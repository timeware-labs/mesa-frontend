import {
	Contractors,
	OperationsTypes,
	Sellers,
	ProposalsStatusView,
} from 'knex/types/tables'
import type { NextApiRequest, NextApiResponse } from 'next'

import createConnection from '@/database'
import capitalizeString from '@/utils/capitalizeString'
import { faker } from '@faker-js/faker'
import { Temporal } from '@js-temporal/polyfill'

faker.setLocale('pt_BR')

interface Rank {
	values: {
		name: string
		data: number[]
	}[]
	dateRange: Date[]
}

export default async function MetaData(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { type, page = 25, limit = 1, startDate, endDate } = req.query

	if (
		Array.isArray(page) ||
		isNaN(Number(page)) ||
		Array.isArray(limit) ||
		isNaN(Number(limit))
	) {
		return res.status(400).send({ message: 'INVALID_QUERY' })
	}

	let connection
	try {
		connection = createConnection()
	} catch (error: any) {
		return res.status(400).json({ error, message: error?.message })
	}

	// return res.status(200).send('a')

	// console.log({
	// 	date: past.toString(),
	// 	now: now.toString(),
	// 	startDate: startDate.slice(0, 10),
	// 	endDate: endDate.slice(0, 10),
	// })
	const where = {
		query: '?? NOT LIKE ? AND ?? BETWEEN ? AND ?',
		bindings: [
			'Contratantes.ConNomeCompleto',
			'%treinamento%',
			'Contratantes.ConDataCadastro',
			startDate.slice(0, 10),
			endDate.slice(0, 10),
		] as (number | string)[],
	}

	if (type === 'vendedor') {
		where.query += ' AND ?? = ?'
		where.bindings.push('Vendedores.VenCodigo', 63)
	}

	let result: (Contractors &
		ProposalsStatusView['base'] &
		OperationsTypes &
		Sellers)[] = []

	try {
		result = await connection('ViewPropostasStatus')
			.whereRaw(where.query, where.bindings)
			.join(
				'Vendedores',
				'Vendedores.VenCodigo',
				'ViewPropostasStatus.VenCodigo'
			)
			.join(
				'Contratantes',
				'Contratantes.ConCodigo',
				'ViewPropostasStatus.ConCodigo'
			)
			.leftJoin(
				'TiposDeOperacoes',
				'TiposDeOperacoes.TipOpeCodigo',
				'Vendedores.TipOpeCodigo'
			)
			.orderBy('Contratantes.ConDataCadastro', 'asc')
			.limit(Number(limit))
			.offset(Number(page))
	} catch (error: any) {
		return res.status(400).json({ error, message: error?.message })
	}

	let totalValue = 0
	let goalDifference = 0
	let rank: Rank | null = null

	if (type !== 'vendedor')
		rank = result.reduce<Rank>(
			(prev, curr) => {
				if ('VenNome' in curr && 'ConDataCadastro' in curr) {
					const indexRank = prev.values.findIndex(
						(value) => value.name.toLowerCase() === curr.VenNome.toLowerCase()
					)
					const indexDate = prev.dateRange.findIndex(
						(value) =>
							value.toISOString() ===
							new Date(curr.ConDataCadastro).toISOString()
					)

					indexDate < 0 && prev.dateRange.push(new Date(curr.ConDataCadastro))

					if (indexRank > -1) {
						prev.values[indexRank].data.push(curr.ProValorBruto)
					} else {
						prev.values.push({
							name: capitalizeString(curr.VenNome.toLowerCase()),
							data: [curr.ProValorBruto],
						})
					}
				}

				totalValue += curr.ProValorBruto

				return prev
			},
			{ values: [], dateRange: [] }
		)

	const tableData = result.reduce<GlobalInterfaces.SellersData[]>(
		(prev, curr) => {
			if (
				!('VenNome' in curr) ||
				!('ConDataCadastro' in curr) ||
				!('TipOpeNome' in curr)
			)
				return prev

			const index = prev.findIndex(
				(value) =>
					value.name.toLowerCase() === curr.VenNome.toLowerCase() &&
					value.product === curr.TipOpeNome
			)

			if (index > -1) {
				const value = prev[index]

				value.totalValue += curr.ProValorBruto
				value.totalSelled += 1
				value.revenue += curr.ProValorLiquido

				value.difference = value.totalValue - value.goal
				value.percentage = (value.totalValue / value.goal) * 100

				goalDifference += value.difference

				prev[index] = value
			} else {
				const goal = faker.datatype.number({ min: 1500, max: 10000 })
				const difference = curr.ProValorBruto - goal
				const percentage = (curr.ProValorBruto / goal) * 100

				goalDifference += difference

				prev.push({
					name: capitalizeString(curr.VenNome),
					product: curr.TipOpeNome,
					goal,
					totalSelled: 1,
					totalValue: curr.ProValorBruto,
					revenue: curr.ProValorLiquido,
					difference,
					percentage,
				})
			}

			return prev
		},
		[]
	)

	await connection.destroy()

	res.status(200).json({
		totalValue,
		goalDifference,
		averageTicket: 1000,
		rank,
		tableData,
	})
}

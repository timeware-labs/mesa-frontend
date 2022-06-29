import type { NextApiRequest, NextApiResponse } from 'next'

import createConnection from '@/database'
import defaultQuery from '@/database/query'
import capitalizeString from '@/utils/capitalizeString'
import { Status, statusToId } from '@/utils/status'

export default async function handler(
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

	const connection = createConnection()

	console.log(startDate.slice(0, 10), endDate.slice(0, 10))
	const where = {
		query: '',
		bindings: [] as (number | string)[],
	}

	if (type === 'vendedor') {
		where.query += ' AND ?? = ?'
		where.bindings.push('Vendedores.VenCodigo', 63)
	}

	const result = await defaultQuery(connection, {
		limit: Number(limit),
		page: Number(page),
		where: where.query,
		whereBindings: where.bindings,
	})

	if (!Array.isArray(result))
		return res.status(404).send({
			message: 'NOT_FOUND',
		})

	const tableData: GlobalInterfaces.ManagerData[] = []
	let analysisTotal = 0

	result.forEach((value) => {
		const tableRow: GlobalInterfaces.ManagerData = {
			id: value.ProCodigo,
			seller: capitalizeString(value.VenNome.toLowerCase()),
			bank: capitalizeString((value.BanNome as string).toLowerCase()),
			clientName: capitalizeString(value.ConNomeCompleto.toLowerCase()),
			product: value.TipOpeNome as string,
			date: value.ConDataCadastro,
			font: 'LEAD',
			revenue: value.ProValorLiquido,
			status: capitalizeString(value.NomeStatus.toLowerCase()),
			term: value.ProOrigemDataUltimaParcela,
			value: value.ProValorBruto,
		}

		tableData.push(tableRow)

		if (statusToId(value.NomeStatus) === Status.Analysis)
			analysisTotal += value.ProValorLiquido
	})

	await connection.destroy()

	return res.status(200).json({
		tableData,
		analysisTotal: Intl.NumberFormat('pt-BR', {
			currency: 'BRL',
			style: 'currency',
		}).format(analysisTotal),
	})
}

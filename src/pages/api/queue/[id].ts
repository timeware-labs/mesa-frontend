import type { NextApiRequest, NextApiResponse } from 'next'

import createConnection from '@/database'
import defaultQuery from '@/database/query'
import capitalizeString from '@/utils/capitalizeString'
import { faker } from '@faker-js/faker'

faker.setLocale('pt_BR')

const CPF_REGEX = /^(\d{3})(\d{3})(\d{3})(\d{2})$/
const PHONE_REGEX = /^(\d{2})(\d{5})(\d{4})/
const RG_REGEX = /(^\d{1,2})(\d{3})(\d{3})?(\d{1}|X|x$)/

export default async function QueueData(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { type, id } = req.query

	if (!id || Array.isArray(id) || isNaN(Number(id))) {
		return res.status(400).send({ message: 'INVALID_QUERY' })
	}

	const connection = createConnection()

	const result = await defaultQuery(connection, {
		where:
			type === 'vendedor'
				? 'ViewPropostasStatus.ConCodigo = ? AND Vendedores.VenCodigo = ?'
				: 'ViewPropostasStatus.ProCodigo = ?',
		whereBindings: type === 'vendedor' ? [Number(id), 63] : [Number(id)],
	})

	if (!result || !Array.isArray(result))
		return res.status(404).send({
			message: 'NOT_FOUND',
		})

	const parsedResult = result?.map<GlobalInterfaces.DistributionData>(
		(value) => {
			return {
				id: value.ProCodigo,
				product: capitalizeString(value.TipOpeNome as string),
				registrationDate: value.ConDataCadastro,
				seller: capitalizeString(value.VenNome),
				client: {
					birthday: value.ConDataNascimento,
					cpf: value.ConCPF.replace(CPF_REGEX, '$1.$2.$3-$4'),
					name: capitalizeString(value.ConNomeCompleto.toLowerCase()),
					phone: value.ConTelefones.replace(PHONE_REGEX, '($1) $2-$3'),
					rg: value.ConRG.replace(RG_REGEX, '$1.$2.$3-$4'),
					status: capitalizeString(value.NomeStatus.toLowerCase()),
					origin: Math.random() > 0.5 ? 'facebook' : 'instagram',
					proposeHistory: Array.from({ length: 5 })?.map(() => ({
						event: faker.random.arrayElement([
							'Iniciou a conversa',
							'Fez a consulta do fgts',
							'Sacou o fgts',
						]),
						createdAt: faker.date.recent().toISOString(),
					})),
					contactHistory: Array.from({ length: 5 })?.map(() => ({
						event: faker.random.arrayElement([
							'Desligou',
							'Retornar a ligação mais tarde',
							'Mudou de número',
							'Número não existe',
							'Fechou contrato',
							'Não atende',
						]),
						createdAt: faker.date.recent().toISOString(),
					})),
				},
			}
		}
	)

	return res.status(200).send(parsedResult[0])
}

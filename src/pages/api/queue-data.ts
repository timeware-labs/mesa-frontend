import type { NextApiRequest, NextApiResponse } from 'next'

import createConnection from '@/database'
import { faker } from '@faker-js/faker'

faker.setLocale('pt_BR')

export default async function QueueData(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { type, page = 1, limit = 25 } = req.query

	if (
		Array.isArray(page) ||
		isNaN(Number(page)) ||
		Array.isArray(limit) ||
		isNaN(Number(limit))
	) {
		return res.status(400).send({ message: 'INVALID_QUERY' })
	}

	const database = createConnection()

	try {
		const query = database.select('*').from('Leads')

		// if (type === 'vendedor') {
		// 	query.where('seller', '=', idVendedor)
		// }

		const rows = (await query)?.map((row) => {
			return {
				...row,
				registrationDate: row.createdAt,

				client: {
					// birthday: value.ConDataNascimento,
					// cpf: value.ConCPF,
					// name: capitalizeString(value.ConNomeCompleto.toLowerCase()),
					// phone: value.ConTelefones,
					// rg: value.ConRG,
					// status: capitalizeString(value.NomeStatus.toLowerCase()),
					// origin: Math.random() > 0.5 ? 'facebook' : 'instagram',

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
		})

		return res.status(200).json(rows)
	} catch (error) {
		return res.status(500).send(error)
	} finally {
		await database.destroy()
	}
}

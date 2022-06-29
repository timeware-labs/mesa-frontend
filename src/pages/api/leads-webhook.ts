import type { NextApiRequest, NextApiResponse } from 'next'

import createConnection from '@/database'

export default async function LeadsWebhook(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		const body = req.body as GlobalInterfaces.AffiliateWebhookBody

		if (Object.keys(body)?.length <= 0) {
			return res
				.status(400)
				.json({ message: 'The request body cannot be empty.' })
		}

		const database = createConnection()

		try {
			const [id] = await database('leads').insert({
				...body,
				clientName: body.client.name,
				clientStatus: body.client.status,
			})

			await database.destroy()
			return res.status(200).json({
				id: id,
			})
		} catch (error) {
			await database.destroy()
			return res.status(500).send(error)
		} finally {
			await database.destroy()
		}
	}

	return res.status(405)
}

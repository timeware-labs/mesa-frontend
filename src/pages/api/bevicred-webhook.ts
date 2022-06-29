import type { NextApiRequest, NextApiResponse } from 'next'

import bevicredWebhook from '@services/bevicredWebhook'

export default async function BevicredWebhook(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// URLSearchParams substitui o FormData que não existe no NodeJS
	const formData = new URLSearchParams()

	formData.append('modulo', 'AGENTE')
	formData.append('assunto', 'PRODUCAOBANCO')
	formData.append('periodoinicio', '2022-03-21')
	formData.append('periodofim', '2022-03-28')
	formData.append('codigobanco', 'BRADESCO')
	formData.append('token', 'a5bfe5c481f7a9ec6961e972e58a2de2')

	const { data } = await bevicredWebhook.post('/', formData)

	console.dir(data)

	return res.status(200).json(data)
}

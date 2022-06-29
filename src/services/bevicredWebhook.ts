import axios from 'axios'

const bevicredWebhook = axios.create({
	baseURL: process.env.BEVICRED_WEBHOOK_URL,
	method: 'POST',
	headers: {
		cookie: 'PHPSESSID=3e4rk36si735d8sommd880ivv7',
		Authorization:
			'Basic MTAwMC1DRjpkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZQ==',
		Cookie:
			'PHPSESSID=ljn20l5u3nir4ekgvbqadkg400; PHPSESSID=iu27k27t88vgejnghqvtcq69s2',
		'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
	},
})

export default bevicredWebhook

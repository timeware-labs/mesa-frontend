export default function getStatusClassName(status: string) {
	status = status.toLowerCase()

	if (status.includes('recusa') || status.includes('fora')) {
		return 'status-red'
	} else if (
		status.includes('finalizado') ||
		status.includes('confirma') ||
		status.includes('pago')
	) {
		return 'status-green'
	} else if (status.includes('análise')) {
		return 'status-blue'
	}
}

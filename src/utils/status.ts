export enum Status {
	Bad,
	Good,
	Analysis,
}

export function statusToId(status: string) {
	status = status.toLowerCase()

	if (status.includes('recusa') || status.includes('fora')) {
		return Status.Bad
	} else if (
		status.includes('finalizado') ||
		status.includes('confirma') ||
		status.includes('pago')
	) {
		return Status.Good
	} else if (status.includes('análise')) {
		return Status.Analysis
	}
}

export const getStatusClassName = (status: number, page: 'queue' | 'panel') => {
	if (page === 'queue') {
		switch (status) {
			case 0:
			case 4:
				return 'status-red'
			case 2:
				return 'status-blue'
			case 1:
			case 3:
				return 'status-green'
		}
	} else if (page === 'panel') {
		switch (status) {
			case 0:
			case 1:
				return 'status-green'
			case 2:
				return 'status-blue'
		}
	}
}

export const getStatusById = (status: number, page: 'queue' | 'panel') => {
	if (page === 'queue') {
		switch (status) {
			case 0:
				return 'Sem aplicativo'
			case 1:
				return 'Pensando'
			case 2:
				return 'Não responde'
			case 3:
				return 'Venda concluída'
			case 4:
				return 'Sem saldo'
			default:
				return 'Status indefinido'
		}
	} else if (page === 'panel') {
		switch (status) {
			case 0:
				return 'Em análise'
			case 1:
				return 'Aguar. formalização'
			case 2:
				return 'Em averbação'
		}
	}
}

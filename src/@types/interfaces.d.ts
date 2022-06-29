import { TColumn } from 'gridjs/dist/src/types'

declare type EventArgs<T> = [T] extends [(...args: infer U) => any]
	? U
	: [T] extends [void]
	? []
	: [T]

export interface TableColumn<T> extends TColumn {
	id?: keyof T | 'select'
	data?: (row: T) => unknown
	name: string
	columns?: TableColumn<T>[]
}

export interface TableProps<T> {
	title?: string
	data?: T[] & TDataObjectRow[]
	columns: Array<TableColumn<T>>
	searchEnabled?: boolean
	onSearchChange?: (value?: string) => unknow
	selectOptions?: { label: string; value: string }[]
	onSelectChange?: (
		newData?: { label: string; value: string },
		selectRows: string[]
	) => unknown
	headerDirection?: 'row' | 'column'
	headerComponent?: ReactNode
	pagination?: { enabled: boolean }
	fixedHeader?: boolean
	height?: string
	language?: {
		search?: string
	}
}

export interface DistributionClientData {
	name: string
	status: string
	origin: 'facebook' | 'instagram'
	cpf: string
	rg: string
	phone: string
	birthday: string
	contactHistory: { event: string; createdAt: string }[]
	proposeHistory: { event: string; createdAt: string }[]
}

export interface DistributionData {
	id: number
	registrationDate: string
	product: string
	seller: string
	client: DistributionClientData
}

export interface ManagerData {
	id: number
	clientName: string
	value: number
	term: string
	// bank: 'C6 Bank' | 'PAN' | 'Safra'
	bank: string
	// product: 'FGTS' | 'INSS'
	product: string
	status: string
	seller: string
	revenue: number
	date: string
	font: 'LEAD' | 'Indicação' | 'SMS' | 'Robô' | 'Cliente 2.2'
}

export interface SellersData {
	name: string
	goal: number
	totalValue: number
	totalSelled: number
	percentage: number
	revenue: number
	difference: number
	product: string
}

export interface MetaDataProps {
	totalValue: number
	goalDifference: number
	averageTicket: number
	rank: {
		values: {
			name: string
			data: number[]
		}[]
		dateRange: string[]
	}
	tableData: SellersData[]
}

export interface QueueDataProps {
	data: DistributionData[]
}

export interface PanelDataProps {
	tableData: ManagersData[]
	analysisTotal: string
}

export interface BevicredBankProduction {
	codigoPromotora: string
	nomePromotora: string
	numeroProposta: string
	codigoOrgao: string
	nomeOrgao: string
	usuario: string
	nomeCliente: string
	matricula: string
	cpf: string
	dataNascimento: string
	tipoDocumento: string
	numeroDocumento: string
	orgaoEmissor: string
	estadoOrgaoEmissor: string
	dataExpedicao: string
	endereco: string
	complemento: string
	bairro: string
	cidade: string
	estado: string
	cep: string
	telefone: string
	referencia: string
	telefoneReferencia: string
	codigoProdutoBMC: string
	nomeProduto: string
	produto: string
	statusProposta: string
	parcela: string
	valorParcela: string
	formaLiberacaoCredito: string
	bancoCredito: string
	agencia: string
	contaCorrente: string
	bancoSaqueOP: string
	agenciaOP: string
	numeroAssociadoOP: string
	valorSolicitado: string
	percentualComissao: string
	valorBrutoComissao: null
	situacaoComissao: string
	dataPagamentoComissao: string
	valorQuitacao: string | null
	nomeConsignataria: string
	dataInclusao: string
	saldoDevedor: string
	valorLiberado: string
	codigoBancoDestinatarioCredito: string
	codigoBancoSaqueOP: string
	codigoVendedor: string
	codigoUsuario: string
	nomeUsuario: string
	sexo: string
	estadoCivil: string
	nomeConjuge: string
	nomeMae: string
	nomePai: string
	numeroContrato: string
	dataContrato: string
	tabelaFinanciamento: string
	taxaFinanciamento: string
	valorTac: string | null
	valorBeneficio: string | null
	valorFinanciado: string
	dataPrimeiroVencimento: string
	codigoFilial: string
	codigoEmpresa: string
	observacao: string
	statusRetorno: string
	dataHistorico: string
	numeroContratoRefin: string
	quantidadeParcelasRefin: string
	quantidadeParcelasPagasRefin: string
	numeroSequencialCompra: string
}

export interface AffiliateWebhookBody {
	createdAt: string
	product: string
	proposalId: string
	seller: string
	client: {
		name: string
		status: string
	}
}

export as namespace GlobalInterfaces

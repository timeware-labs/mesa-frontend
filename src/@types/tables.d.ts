// eslint-disable-next-line @typescript-eslint/no-unused-vars
import knex, { Knex } from 'knex'

declare module 'knex/types/tables' {
	export interface Proposals {
		ConCodigo: number
		ProCodigo: number
		ConID: string
		ProID: string
		ProTipoPagamento: string
		ProPagamentoBanco: string
		ProPagamentoAgencia: string
		ProPagamentoConta: string
		ProPagamentoTipo: string
		ProOrigemBanco: string
		ProOrigemContrato: string
		ProOrigemParcelasPagas: number
		ProOrigemParcelasTotais: number
		ProOrigemSaldoDevedor: number
		ProOrigemDataPrimeiraParcela: string
		ProOrigemDataUltimaParcela: string
		ProNumeroParcelas: number
		ProValorParcela: number
		ProValorBruto: number
		ProValorLiquido: number
		VenCodigo: number
		CidCodigo: number
		EmpCodigo: number
		TabComProCodigo: number
		ConProCodigo: number
		ProConvenioEscolhido: string
		FraCodigo: number
		ProObservacao: string
		ProSemRefin: boolean
	}

	export interface Contractors {
		ConCodigo: number
		ConNomeCompleto: string
		ConNomeMae: string
		ConCPF: string
		ConRG: string
		ConDataNascimento: string
		ConNaturalidade: string
		ConMatricula: string
		ConEspecie: number
		ConRenda: number
		ConCEP: string
		ConEndereco: string
		ConNumero: string
		ConBairro: string
		ConCidade: string
		ConEstado: string
		ConTelefones: string
		ConEmail: string
		ConSenha: string
		ConDataCadastro: string
		ConObservacao: string
		ConSexo: string
		ConRGOrgaoExpedicao: string
		ConRGDataExpedicao: string
		ConID: string
		ConTipoDocumento: string
		ConBeneficios: string
		ConAnalfabeto: boolean
		ConDadosBancarios: string
		ConNomePai: string
		ConUFNaturalidade: string
		ConUFDocumento: string
		ConOutrosBeneficios: string
		ConTipoBeneficio: string
	}

	export interface Franchises {
		FraCodigo: number
		FraNome: string
		FraDataInauguracao: string
		FraCustoFixo: number
		FraCEP: string
		FraEndereco: string
		FraNumero: string
		FraComplemento: string
		FraCidade: string
		FraUF: string
		FraID: string
		FraAtiva: boolean
		FraEmail: string
		FraTelefones: string
		FraCNPJ: string
		FraBairro: string
		FraHomeOffice: boolean
		FraLatLong: string
		FraCPFCertificado: string
		FraMesaDigitacao: boolean
	}

	export interface Sellers {
		VenCodigo: number
		VenNome: string
		VenCPF: string
		VenRG: string
		VenEmail: string
		VenSenha: string
		VenTelefonesContato: string
		VenEndereco: string
		VenNumero: string
		VenBairro: string
		VenCidade: string
		VenEstado: string
		VenNacionalidade: string
		VenBanco: string
		VenAgencia: string
		VenConta: string
		VenFavorecido: string
		VenOperacaoBancaria: string
		VenProfissao: string
		VenID: string
		VenAdm: boolean
		TipOpeCodigo: number
		TipoDeUsuario: string
		VenFranquias: string
	}

	export interface HealthInsurancePromoters {
		ConCodigo: number
		ProCodigo: number
		ConNome: string
		ConFiliacao: number
		ConOrdem: number
		ConAtivo: boolean
		ConID: string
	}

	export interface PromotersCommissionTable {
		TabComProCodigo: number
		TabComProID: string
		ConCodigo: number
		ProCodigo: number
		TipOpeCodigo: number
		TabComProDeParcelas: number
		TabComProAteParcelas: number
		TabComProComissaoTotal: number
		TabComProComissaoAVista: number
		BanCodigo: number
		CidCodigo: number
		TabComProDescricao: string
		ConID: string
	}

	export interface ContractsStatus {
		StaConCodigo: number
		StaCodigo: number
		StaConDataHoraAlteracao: string
		StaConPrazoConclusao: number
		StaConPrazoTipo: string
		UsuCodigoStatus: number
		CidCodigo: number
		EmpCodigo: number
		StaConDataHoraLimite: string
		StaConDescricao: string
		ConConCodigo: number
		StaConCaminhoArquivo: string
		StaConCodigoOperadorAtuando: number
	}

	export interface ProposalsStatus {
		StaCodigo: number
		StaNome: string
		StaMissao: string
		StaPrazo: number
		StaPrazoTipo: string
		StaCor: string
		StaOrdem: number
		StaID: string
		StaComandoVendedor: string
		StaMensagemVendedor: string
		StaMensagemAdm: string
		StaAcaoNecessariaVendedor: boolean
		StaAcaoNecessariaAdm: boolean
		StaAcrescentarDescricao: boolean
		StaProcessaPerdaPontos: boolean
		StaFinalizadoPago: boolean
		StaPerdidoCancelado: boolean
		TipOpeCodigo: number
		StaStatusInicial: boolean
		StaLinkWiki: string
		StaErroDigitacao: boolean
		StaPagoCliente: boolean
		StaNotificacaoFrequenciaVendedor: number
		StaNotificacaoFrequenciaVendedorTipo: string
		StaNotificacaoFrequenciaAdm: number
		StaNotificacaoFrequenciaAdmTipo: string
		StaEnviarAnexo: boolean
		StaConfirmacaoSimNao: boolean
		StaCodConfirmacaoSim: number
		StaCodConfirmacaoNao: number
		StaPermiteEdicaoProposta: boolean
	}

	export interface Banks {
		BanCodigo: number
		BanNome?: string
		BanNumero?: string
	}

	export interface OperationsTypes {
		TipOpeCodigo: number
		TipOpeNome: string
	}

	export interface HealthInsuranceFiliationsView
		extends HealthInsurancePromoters {
		Pai?: string
		Avo?: string
	}

	export type ProposalsStatusView = Knex.CompositeTableType<
		Proposals & ContractsStatus
	>

	export interface FranchisesLoginsBanks {
		LogBanFraCodigo: number
		FraID?: string
		ProCodigo: number
		BanCodigo: number
		LogBanUsuario: string
		LogBanSenha: string
	}

	export interface Leads {
		id: string
		createdAt: string
		product: string
		proposalId: string
		seller: string
		clientName: string
		clientStatus: string
	}

	export interface Tables {
		Propostas: Proposals
		Contratantes: Contractors
		Bancos: Banks
		Franquias: Franchises
		Vendedores: Sellers
		ConveniosPromotoras: HealthInsurancePromoters
		TabelaComissaoPromotoras: PromotersCommissionTable
		StatusContratos: ContractsStatus
		StatusPropostas: ProposalsStatus
		ViewPropostasStatus: ProposalsStatusView
		ViewConveniosFiliacao: HealthInsuranceFiliationsView
		LoginsBancosFranquias: FranchisesLoginsBanks
		TiposDeOperacoes: OperationsTypes
		Leads: Leads
	}
}

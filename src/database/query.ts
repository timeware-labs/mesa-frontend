import { Knex } from 'knex'
import {
	Banks,
	Contractors,
	ContractsStatus,
	Franchises,
	FranchisesLoginsBanks,
	HealthInsuranceFiliationsView,
	HealthInsurancePromoters,
	OperationsTypes,
	PromotersCommissionTable,
	Proposals,
	ProposalsStatus,
	Sellers,
} from 'knex/types/tables'

type QueryResponse = Banks &
	Contractors &
	ContractsStatus &
	Franchises &
	FranchisesLoginsBanks &
	HealthInsuranceFiliationsView &
	HealthInsurancePromoters &
	OperationsTypes &
	PromotersCommissionTable &
	Proposals &
	ProposalsStatus &
	Sellers & {
		CodigoContratante: number
		ContratanteID: string
		Expr20: number
		Expr22: string
		Expr1: number
		CodigoConvenio: number
		CodigoPromotora: number
		CodigoCidade: number
		ConvenioID: string
		NomeStatus: string
		NomeConvenio: string
		Expr2: number
	}

interface Params {
	limit?: number
	page?: number
	where?: string
	whereBindings?: (string | number)[]
}

export default async function defaultQuery(
	connection: Knex<any, unknown[]>,
	{ limit, page, where, whereBindings }: Params
) {
	const bindings: (string | number)[] = []

	if (limit && page) bindings.unshift((page - 1) * limit, limit)

	if (where && whereBindings) {
		bindings.unshift(...whereBindings)
	}

	console.log(bindings)

	return await connection.raw<QueryResponse[]>(
		`
    SELECT ViewPropostasStatus.ProCodigo,
       ViewPropostasStatus.ConCodigo            AS CodigoContratante,
       ViewPropostasStatus.ConID                AS ContratanteID,
       ViewPropostasStatus.ProID,
       ViewPropostasStatus.ProTipoPagamento,
       ViewPropostasStatus.ProPagamentoBanco,
       ViewPropostasStatus.ProPagamentoAgencia,
       ViewPropostasStatus.ProPagamentoConta,
       ViewPropostasStatus.ProPagamentoTipo,
       ViewPropostasStatus.ProOrigemBanco,
       ViewPropostasStatus.ProOrigemContrato,
       ViewPropostasStatus.ProOrigemParcelasPagas,
       ViewPropostasStatus.ProOrigemParcelasTotais,
       ViewPropostasStatus.ProOrigemSaldoDevedor,
       ViewPropostasStatus.ProOrigemDataPrimeiraParcela,
       ViewPropostasStatus.ProOrigemDataUltimaParcela,
       ViewPropostasStatus.ProNumeroParcelas,
       ViewPropostasStatus.ProValorParcela,
       ViewPropostasStatus.ProValorBruto,
       ViewPropostasStatus.ProValorLiquido,
       ViewPropostasStatus.VenCodigo,
       ViewPropostasStatus.CidCodigo,
       ViewPropostasStatus.EmpCodigo,
       ViewPropostasStatus.TabComProCodigo,
       ViewPropostasStatus.ConProCodigo,
       ViewPropostasStatus.StaCodigo,
       ViewPropostasStatus.StaConDataHoraAlteracao,
       ViewPropostasStatus.StaConPrazoConclusao,
       ViewPropostasStatus.StaConPrazoTipo,
       ViewPropostasStatus.UsuCodigoStatus,
       ViewPropostasStatus.StaConDataHoraLimite,
       ViewPropostasStatus.StaConDescricao,
       ConveniosPromotoras.ConCodigo            AS Expr20,
       ConveniosPromotoras.ConNome,
       ConveniosPromotoras.ConFiliacao,
       ConveniosPromotoras.ConOrdem,
       ConveniosPromotoras.ConAtivo,
       ConveniosPromotoras.ConID                AS Expr22,
       TabelaComissaoPromotoras.TabComProCodigo AS Expr1,
       TabelaComissaoPromotoras.TabComProID,
       TabelaComissaoPromotoras.ConCodigo       AS CodigoConvenio,
       TabelaComissaoPromotoras.ProCodigo       AS CodigoPromotora,
       TabelaComissaoPromotoras.TipOpeCodigo,
       TabelaComissaoPromotoras.TabComProDeParcelas,
       TabelaComissaoPromotoras.TabComProAteParcelas,
       TabelaComissaoPromotoras.TabComProComissaoTotal,
       TabelaComissaoPromotoras.TabComProComissaoAVista,
       TabelaComissaoPromotoras.BanCodigo,
       TabelaComissaoPromotoras.CidCodigo       AS CodigoCidade,
       TabelaComissaoPromotoras.TabComProDescricao,
       TabelaComissaoPromotoras.ConID           AS ConvenioID,
       Vendedores.VenNome,
       Vendedores.VenEmail,
       StatusPropostas.StaNome                  AS NomeStatus,
       StatusPropostas.StaMissao,
       StatusPropostas.StaPrazo,
       StatusPropostas.StaCor,
       StatusPropostas.StaComandoVendedor,
       StatusPropostas.StaMensagemVendedor,
       StatusPropostas.StaMensagemAdm,
       StatusPropostas.StaID,
       StatusPropostas.StaPrazoTipo,
       StatusPropostas.StaOrdem,
       StatusPropostas.StaAcaoNecessariaVendedor,
       StatusPropostas.StaAcaoNecessariaAdm,
       StatusPropostas.StaAcrescentarDescricao,
       StatusPropostas.StaProcessaPerdaPontos,
       StatusPropostas.StaFinalizadoPago,
       StatusPropostas.StaPerdidoCancelado,
       Vendedores.VenID,
       Vendedores.VenAdm,
       Contratantes.ConCodigo,
       Contratantes.ConNomeCompleto,
       Contratantes.ConNomeMae,
       Contratantes.ConCPF,
       Contratantes.ConRG,
       Contratantes.ConDataNascimento,
       Contratantes.ConNaturalidade,
       Contratantes.ConMatricula,
       Contratantes.ConEspecie,
       Contratantes.ConRenda,
       Contratantes.ConCEP,
       Contratantes.ConEndereco,
       Contratantes.ConNumero,
       Contratantes.ConBairro,
       Contratantes.ConCidade,
       Contratantes.ConEstado,
       Contratantes.ConTelefones,
       Contratantes.ConEmail,
       Contratantes.ConSenha,
       Contratantes.ConDataCadastro,
       Contratantes.ConObservacao,
       Contratantes.ConSexo,
       Contratantes.ConRGOrgaoExpedicao,
       Contratantes.ConRGDataExpedicao,
       Contratantes.ConID,
       TiposDeOperacoes.TipOpeNome,
       ViewConveniosFiliacao.ConNome            AS NomeConvenio,
       ViewConveniosFiliacao.Pai,
       ViewConveniosFiliacao.Avo,
       Promotoras.ProNome,
       Bancos.BanNome,
       Contratantes.ConTipoDocumento,
       Contratantes.ConBeneficios,
       ViewPropostasStatus.ProConvenioEscolhido,
       Contratantes.ConAnalfabeto,
       Contratantes.ConDadosBancarios,
       ViewPropostasStatus.StaConCaminhoArquivo,
       ViewPropostasStatus.FraCodigo,
       Franquias.FraNome,
       Franquias.FraCidade,
       Franquias.FraUF,
       LoginsBancosFranquias.LogBanUsuario,
       LoginsBancosFranquias.LogBanSenha,
       StatusPropostas.TipOpeCodigo             AS Expr2,
       StatusPropostas.StaStatusInicial,
       StatusPropostas.StaLinkWiki,
       StatusPropostas.StaErroDigitacao,
       StatusPropostas.StaPagoCliente,
       StatusPropostas.StaNotificacaoFrequenciaVendedor,
       StatusPropostas.StaNotificacaoFrequenciaVendedorTipo,
       StatusPropostas.StaNotificacaoFrequenciaAdm,
       StatusPropostas.StaNotificacaoFrequenciaAdmTipo,
       StatusPropostas.StaEnviarAnexo,
       StatusPropostas.StaConfirmacaoSimNao,
       StatusPropostas.StaCodConfirmacaoSim,
       StatusPropostas.StaCodConfirmacaoNao,
       Franquias.FraCPFCertificado,
       ViewPropostasStatus.StaConCodigoOperadorAtuando,
       StatusPropostas.StaPermiteEdicaoProposta
FROM   Franquias
       LEFT OUTER JOIN LoginsBancosFranquias
                    ON Franquias.FraID = LoginsBancosFranquias.FraID
       RIGHT OUTER JOIN ViewPropostasStatus
                        INNER JOIN ConveniosPromotoras
                                ON ViewPropostasStatus.ConProCodigo =
                                   ConveniosPromotoras.ConCodigo
                        INNER JOIN TabelaComissaoPromotoras
                                ON ViewPropostasStatus.TabComProCodigo =
                                   TabelaComissaoPromotoras.TabComProCodigo
                        INNER JOIN Vendedores
                                ON ViewPropostasStatus.VenCodigo =
                                   Vendedores.VenCodigo
                        INNER JOIN StatusPropostas
                                ON ViewPropostasStatus.StaCodigo =
                                   StatusPropostas.StaCodigo
                        INNER JOIN Contratantes
                                ON ViewPropostasStatus.ConCodigo =
                                   Contratantes.ConCodigo
                        INNER JOIN TiposDeOperacoes
                                ON TabelaComissaoPromotoras.TipOpeCodigo =
                                   TiposDeOperacoes.TipOpeCodigo
                        INNER JOIN ViewConveniosFiliacao
                                ON ViewPropostasStatus.ConProCodigo =
                                   ViewConveniosFiliacao.ConCodigo
                        INNER JOIN Promotoras
                                ON ConveniosPromotoras.ProCodigo =
                                   Promotoras.ProCodigo
                                   AND TabelaComissaoPromotoras.ProCodigo =
                                       Promotoras.ProCodigo
                        INNER JOIN Bancos
                                ON TabelaComissaoPromotoras.BanCodigo =
                                   Bancos.BanCodigo
                     ON LoginsBancosFranquias.BanCodigo = Bancos.BanCodigo
                        AND LoginsBancosFranquias.ProCodigo =
                            ConveniosPromotoras.ProCodigo
                        AND Franquias.FraCodigo = ViewPropostasStatus.FraCodigo
                        WHERE Contratantes.ConNomeCompleto NOT LIKE '%treinamento%' 
                        ${where ? 'AND ' + where : ''}
                        ${
													limit && page
														? `
                          ORDER BY Contratantes.ConDataCadastro DESC
                        OFFSET ? ROWS
                        FETCH NEXT ? ROWS ONLY
                        `
														: ' '
												}
  `,
		bindings
	)
}

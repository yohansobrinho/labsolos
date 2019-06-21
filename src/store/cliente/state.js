export default {
  clientes: [],
  paginacao: {
    page: 1,
    rowsPerPage: 6
  },
  colunasVisiveis: [
    'cpf',
    'nomeProprietario',
    'email',
    'telefone',
    'cep',
    'endereco',
    'numero',
    'bairro',
    'municipio',
    'estado',
    'Acoes'
  ],
  colunas: [
    { align: 'left', name: 'cpf', label: 'CPF', field: 'cpf', sortable: true },
    { align: 'center', name: 'nomeProprietario', label: 'Nome', field: 'nomeProprietario', sortable: true },
    { align: 'left', name: 'email', label: 'Email', field: 'email', sortable: true },
    { align: 'left', name: 'telefone', label: 'Telefone', field: 'telefone', sortable: true },
    { align: 'left', name: 'cep', label: 'CEP', field: 'cep', sortable: true },
    { align: 'left', name: 'endereco', label: 'Endereço', field: 'endereco', sortable: true },
    { align: 'left', name: 'numero', label: 'Nº', field: 'numero', sortable: true },
    { align: 'left', name: 'bairro', label: 'Bairro', field: 'bairro', sortable: false, width: 100 },
    { align: 'left', name: 'municipio', label: 'Município', field: 'municipio', sortable: false, width: 100 },
    { align: 'left', name: 'estado', label: 'Estado', field: 'estado', sortable: false, width: 100 },
    { align: 'left', name: 'acoes', label: 'Ação', field: 'Acoes', sortable: false, width: 100 }
  ],
  proximoPasso: '',
  respostaApiSistema: {},
  sistemaDaTabela: '',
  nextStep: false,
  backStep: false,
  modalConfirmaTransacoes: false,
  modulosCsv: [],
  modalEditaTransacao: false
}

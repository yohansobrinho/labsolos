const SET_TOKEN = (state, dados) => {
  state.token = dados.token
  localStorage.setItem('token', state.token)
}

// const SET_DADOS_CLIENTES = (state, dados) => {
//   state.dadosClientes = dados
//   localStorage.setItem('dadosCliente', JSON.stringify(dados))
//   // FALTANDO SETAR CADA ITEM CORRETAMENTE ,POIS ESTÁ GRAVANDO ERRADO NO LOCALSTORAGE
// }
//
// const SET_PRODUTOCLIENTE = (state, payload) => {
//   state.produtoLogado = payload
// }
//
// const SET_LISTA_PRODUTOS = (state, payload) => {
//   state.listaProdutos = payload
// }

export {
  SET_TOKEN
  // ,
  // SET_DADOS_CLIENTES,
  // SET_PRODUTOCLIENTE,
  // SET_LISTA_PRODUTOS
}

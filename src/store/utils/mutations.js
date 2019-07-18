const SET_NOTIFY_OLD = (state, message, root) => {
  state.notify = message
  // console.log('CHEGOU NO NOTIFY')
  this.$q.notify({
    color: 'negative',
    position: 'top',
    message: message,
    icon: 'report_problem'
  })
  // setTimeout(() => {
  //   state.notify = ''
  // }, 1000)
}

const SHOW_MODAL_INFO_SSA = (state) => {
  state.modalInfoSsa = true
}
const HIDE_MODAL_INFO_SSA = (state) => {
  state.modalInfoSsa = false
}

const SHOW_MODAL_EXCLUIR = (state, payload) => {
  state.modalExcluir = true
  state.objExcluir = payload
  // console.log(payload)
}
const HIDE_MODAL_EXCLUIR = (state) => {
  state.modalExcluir = false
  setTimeout(() => {
    state.objExcluir = {}
  }, 500)
}
const SET_MODAL_GENERICO = (state, status) => {
  state.modalGenerico = status
}

export {
  SET_NOTIFY_OLD,
  SHOW_MODAL_INFO_SSA,
  HIDE_MODAL_INFO_SSA,
  SHOW_MODAL_EXCLUIR,
  HIDE_MODAL_EXCLUIR,
  SET_MODAL_GENERICO
}

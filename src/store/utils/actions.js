import { Notify, Dialog } from 'quasar'
const setNotifyDanger = ({ commit }, message) => {
  Notify.create({
    color: 'negative',
    position: 'top',
    message: message,
    icon: 'report_problem'
  })
}

const setNotifyConfirm = ({ commit }, message) => {
  Notify.create({
    color: 'positive',
    position: 'top',
    message: message,
    icon: 'check_circle'
  })
}

const setNotifyInfo = ({ commit }, message) => {
  Notify.create({
    color: 'primary',
    position: 'top',
    message: message,
    icon: 'info'
  })
}
const setDialogQuestion = ({ commit, store }, obj) => {
  return new Promise((resolve, reject) => {
    Dialog.create({
      title: 'Confirmar',
      message: obj.mensagem,
      color: 'red',
      ok: 'Sim',
      cancel: 'Não'
    }).then(() => {
      resolve()
    }).catch(() => {
      reject(new Error())
    })
  })
}

export {
  setNotifyConfirm,
  setNotifyDanger,
  setNotifyInfo,
  setDialogQuestion
}

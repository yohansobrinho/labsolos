// import Vue from 'vue'
import { HEROKUclientOpen } from 'boot/axios'

const autenticacao = ({ commit }, obj) => {
  // commit('Utils/SHOW_LOAD', null, { root: true })
  return new Promise((resolve, reject) => {
    // Vue.http.post(`/recarga/operadoras/`, {
    // obj = rootState.Autenticacao.token
    HEROKUclientOpen.post(`/login`, obj)
    // {token: rootState.Autenticacao.token})
      .then((suc) => {
        commit('SET_TOKEN', suc.data)
        // commit('Utils/HIDE_LOAD', null, { root: true })
        console.log('autenticação heroku ', suc.data)
        resolve(suc.data)
      })
      .catch((err) => {
        // commit('Utils/HIDE_LOAD', null, { root: true })
        reject(err.response)
      })
  })
}

export {
  autenticacao
}

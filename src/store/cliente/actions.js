// import Vue from 'vue'
import { HEROKUclient } from 'boot/axios'

const getCliente = ({ commit }) => {
  // commit('Utils/SHOW_LOAD', null, { root: true })
  return new Promise((resolve, reject) => {
    // Vue.http.post(`/recarga/operadoras/`, {
    // obj = rootState.Autenticacao.token
    HEROKUclient.get(`/cadClientes`)
    // {token: rootState.Autenticacao.token})
      .then((suc) => {
        commit('GUARDAR_LISTA_CLIENTES', suc.data)
        // commit('SET_TOKEN', suc.data)
        // commit('Utils/HIDE_LOAD', null, { root: true })
        console.log('getCliente suc ', suc.data)
        resolve(suc.data)
      })
      .catch((err) => {
        // commit('Utils/HIDE_LOAD', null, { root: true })
        reject(err.response)
      })
  })
}

const postCliente = ({ commit }, obj) => {
  // commit('Utils/SHOW_LOAD', null, { root: true })
  return new Promise((resolve, reject) => {
    // Vue.http.post(`/recarga/operadoras/`, {
    // obj = rootState.Autenticacao.token
    HEROKUclient.post(`/cadClientes`, obj)
    // {token: rootState.Autenticacao.token})
      .then((suc) => {
        // commit('GUARDAR_LISTA_CLIENTES', suc.data)
        // commit('SET_TOKEN', suc.data)
        // commit('Utils/HIDE_LOAD', null, { root: true })
        // console.log('getCliente suc ', suc.data)
        resolve(suc.data)
      })
      .catch((err) => {
        // commit('Utils/HIDE_LOAD', null, { root: true })
        reject(err.response)
      })
  })
}

export {
  getCliente,
  postCliente
}

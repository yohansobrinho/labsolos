import { Notify } from 'quasar'
function tokenIsValid () {
  let token = {}
  if (localStorage.getItem('token')) {
    token = JSON.parse(atob(localStorage.getItem('token').split('.')[1]))
    console.log('validacao tempo token', token.exp < (Date.now() / 1000))
    if (token.exp < (Date.now() / 1000)) {
      localStorage.removeItem('token')
      Notify.create({
        color: 'negative',
        position: 'top',
        message: 'Token Expirado, por favor faça login novamente',
        icon: 'report_problem'
      })
      return false
    }
    return true
  }
  return false
}

export default ({ router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requiresAuth && !tokenIsValid()) {
      next('/login')
    }
    next()
    // else {
    //   if (token.exp < (Date.now() / 1000)) {
    //     localStorage.removeItem('token')
    //     console.log('LOGIN PORRA', (Date.now().valueOf() / 1000) > token.exp)
    //     next('login')
    //   } else {
    //     next()
    //   }
    // }
  })
}


const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('layouts/Login.vue')
  },
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/clientes', name: 'clientes', component: () => import('pages/Cliente.vue') },
      { path: '/cadastro', name: 'cadastro', component: () => import('pages/Cadastro.vue') }
    ],
    meta: { requiresAuth: true }
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

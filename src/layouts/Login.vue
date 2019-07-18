<template>
<q-layout view="lHh Lpr lFf" class="img-background">
  <q-page-container>
    <q-page
      class="flex row items-center justify-center q-pa-md"
      padding
    >
      <q-card class="app-login-card">
        <q-card-section class="text-center">
          <!-- <div> -->
            <img
              alt=""
              class="app-login-logo"
              src="statics/logo-dashboard2.png"
              width="200rem"
            >
          <!-- </div> -->
          <!-- <div class="app-beauty-label">
            Quasar Skeleton
          </div>
          <small>Just an example about the possibilities</small> -->
        </q-card-section>

        <!-- <q-separator /> -->

        <q-card-section>
          <form @submit.prevent="attempt">
            <div class="row q-col-gutter-md">
              <div class="col-12">
                <q-input
                  label="Login"
                  type="email"
                  v-model="form.email"
                  outlined
                >
                  <template v-slot:prepend>
                    <q-icon name="mail" />
                  </template>
                </q-input>
              </div>
              <div class="col-12">
                <q-input
                  outlined
                  label="Password"
                  :type="isPwd ? 'password' : 'text'"
                  v-model="form.password"
                >
                  <template v-slot:prepend>
                    <q-icon name="vpn_key" />
                  </template>

                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </div>
            </div>
            <div class="q-pt-md">
              <q-btn
                class="full-width"
                color="primary"
                label="Entrar"
                size="lg"
                @click="login()"
              />
            </div>
          </form>
        </q-card-section>
      </q-card>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      isPwd: true,
      form: {
        email: 'teste@mail.com',
        password: 'testE2@'
      }
    }
  },
  mounted () {
    // this.verificaLogado()
  },
  methods: {
    ...mapActions('Auth', ['autenticacao']),
    // verificaLogado () {
    //   if (window.localStorage.getItem('gcx_token')) {
    //     this.$router.replace('/')
    //   }
    // },
    login () {
      // this.$router.push('/')
      // this.autenticacao(this.form)
        .then(() => {
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.img-background{
  /* background: #fff url(../statics/bg-login.png); */
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

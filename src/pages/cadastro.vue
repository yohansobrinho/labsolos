<template>
  <div class="q-pa-md">
    <div class="row justify q-gutter-sm">
      <div class="col-3">
        <q-input filled v-model="formulario.cpf" @input="$v.formulario.cpf.$touch()"
        :error="$v.formulario.cpf.$error"
        label="Digite o CPF" color="primary" value="" type="text" />
      </div>
      <div class="col-4" >
        <q-input filled v-model="formulario.nomeProprietario" @input="$v.formulario.nomeProprietario.$touch()"
        :error="$v.formulario.nomeProprietario.$error" label="Digite o nome do proprietario" color="primary" value="" type="text" />
      </div>
      <div class="col-4" >
        <q-input filled v-model="formulario.email" @input="$v.formulario.email.$touch()"
        :error="$v.formulario.email.$error" label="Digite o email" color="primary" value="" type="text" />
      </div>
      <div class="col-3" >
        <q-input filled v-model="formulario.telefone" @input="$v.formulario.telefone.$touch()"
        :error="$v.formulario.telefone.$error" label="Digite o telefone" color="primary" value="" type="text" />
      </div>
      <div class="col-4" >
        <q-input filled v-model="formulario.cep" @input="$v.formulario.cep.$touch()"
        :error="$v.formulario.cep.$error" label="Digite o CEP" color="primary" value="" type="text" />
      </div>
      <div class="col-4" >
        <q-input filled v-model="formulario.endereco" @input="$v.formulario.endereco.$touch()"
        :error="$v.formulario.endereco.$error" label="Digite o Endereço" color="primary" value="" type="text" />
      </div>
      <div class="col-3" >
        <q-input filled v-model="formulario.numero" @input="$v.formulario.numero.$touch()"
        :error="$v.formulario.numero.$error" label="Digite o número" color="primary" value="" type="text" />
      </div>
      <div class="col-4" >
        <q-input filled v-model="formulario.bairro" @input="$v.formulario.bairro.$touch()"
        :error="$v.formulario.bairro.$error" label="Digite o bairro" color="primary" value="" type="text" />
      </div>
      <div class="col-4" >
        <q-input filled v-model="formulario.municipio" @input="$v.formulario.municipio.$touch()"
        :error="$v.formulario.municipio.$error" label="Digite o Município" color="primary" value="" type="text" />
      </div>
      <div class="col-3" >
        <q-input filled v-model="formulario.estado" @input="$v.formulario.estado.$touch()"
        :error="$v.formulario.estado.$error" label="Digite o estado" color="primary" value="" type="text" />
      </div>
    </div>
    <div>
      <div class="float-right col-xs-12 col-sm-12 q-mt-lg">
        <q-btn color="primary" size="1rem" class="q-mr-md" label="Salvar" @click="salvarCliente"/>
        <q-btn color="primary" size="1rem" class="q-mr-md" flat label="Cancelar"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      formulario: {
        cpf: '',
        nomeProprietario: '',
        email: '',
        telefone: '',
        cep: '',
        endereco: '',
        numero: '',
        bairro: '',
        municipio: '',
        estado: ''
      }
    }
  },
  validations: {
    formulario: {
      cpf: {
        required
      },
      nomeProprietario: {
        required
      },
      email: {
        required
      },
      telefone: {
        required
      },
      cep: {
        required
      },
      endereco: {
        required
      },
      numero: {
        required
      },
      bairro: {
        required
      },
      municipio: {
        required
      },
      estado: {
        required
      }
    }
  },
  mounted () {
    // if (this.$route.params.id) {
    //   this.buscaPerfil()
    // }
  },
  computed: {
    // ...mapState('perfis', ['estrutura', 'perfil', 'alteracaoNoSistemaPerfil', 'acoesPerfil']),
    // ...mapState('sistemas', ['sistemas'])
  },
  methods: {
    ...mapActions('Cliente', ['postCliente']),
    ...mapActions('Utils', ['setNotifyDanger']),
    salvarCliente () {
    // this.$refs.tab2.focus()
      this.$v.formulario.$touch()
      setTimeout(() => {
        if (!this.$v.formulario.$error) {
          this.postCliente(this.formulario)
        } else {
          this.setNotifyDanger('Por favor, verifique os erros no formulário')
        }
      }, 200)
    }
  }
}
</script>

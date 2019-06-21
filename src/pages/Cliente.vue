<template>
  <div class="q-pa-md">
      <q-table
        :data="clientes"
        :columns="colunas"
        row-key="name"
        :visible-columns="visibleColumns"
      >
        <template v-slot:top="props">

          <q-space />

          <q-select
            v-model="visibleColumns"
            multiple
            borderless
            dense
            options-dense
            :display-value="$q.lang.table.colunasVisiveis"
            emit-value
            map-options
            :options="colunasVisiveis"
            option-value="name"
            style="min-width: 150px"
          />

          <q-btn
            flat round dense
            :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="props.toggleFullscreen"
            class="q-ml-md"
          />
          <q-btn flat dense label="Novo cliente" color="primary" icon="add" size="1rem" @click="clickCadastrarFunction" />
        </template>

      </q-table>
    </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
export default {
  name: 'Cliente',
  data () {
    return {
      visibleColumns: this.colunasVisiveis,
      data: this.clientes,
      columns: this.colunas
    }
  },
  computed: {
    ...mapState('Cliente', ['clientes', 'colunas', 'colunasVisiveis'])
  },
  mounted () {
    this.getCliente()
  },
  methods: {
    ...mapActions('Cliente', ['getCliente'])
  }
}
</script>

<style>
</style>

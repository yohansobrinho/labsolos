<template>
  <div class="q-pa-md">
      <q-table
        :data="clientes"
        :columns="colunas"
        row-key="name"
        :filter="filter"
        :visible-columns="visibleColumns"
      >
      <template v-slot:top-left>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Pesquisar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
        <template v-slot:top-right="props">

          <q-space />

          <q-select
            v-model="visibleColumns"
            multiple
            borderless
            dense
            options-dense
            :display-value="$q.lang.table.columns"
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
          <q-btn flat dense label="Novo cliente" color="primary" icon="add" size="1rem" @click="cadCliente" />
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
      filter: '',
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
    ...mapActions('Cliente', ['getCliente']),
    cadCliente () {
      this.$router.push({ name: 'cadastro' })
    }
  }
}
</script>

<style>
table tbody tr {
    cursor: pointer
}

table tbody tr:nth-child(2n) {
    background-color: rgb(231, 231, 231);
}

table tbody tr:nth-child(2n):hover {
    background-color: rgb(196, 196, 196);
}

table tbody tr:nth-child(2n+1):hover {
    background-color: rgb(196, 196, 196);
}

/* table tbody tr:nth-child(2n+1) {
  background-color: blue;
} */

</style>

<template>
  <v-card class="ma-3 ma-md-6">
    <v-card-title>
      Listagem dos pacientes
      <v-spacer class="mb-2"></v-spacer>
      <v-row>
        <v-col order-md="2" md="4" class="d-flex align-center justify-md-end my-4"><v-btn color="primary"
            prepend-icon="mdi-plus" to="/patients/new-patient">Adicionar
            Paciente</v-btn></v-col>
        <v-col order-md="1" md="8">
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-item>
      <v-data-table :headers="headers" :items="patients" :search="search"></v-data-table>
    </v-card-item>

  </v-card>
</template>

<script setup>
import { computed } from 'vue';
import { usePatientsStore } from '@/store/patients.js'

const store = usePatientsStore();

const search = ''
const headers = [
  {
    align: 'start',
    key: 'full_name',
    title: 'Nome',
  },
  { key: 'last_appointment', title: 'Última consulta' },
  { key: 'born_at', title: 'Data de nascimento' },
  { sortable: false, key: 'cpf', title: 'CPF' },
  { sortable: false, key: 'phone', title: 'Telefone' },
  { key: 'actions', title: 'Ações' },
]
const patients = computed(() => store.patientsGetter);

</script>
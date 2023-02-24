<template>
  <v-card class="ma-3 ma-md-6">
    <v-card-title>
      Listagem dos pacientes
      <v-spacer class="mb-2"></v-spacer>
      <v-row>
        <v-col order-md="2" md="4" class="d-flex align-center justify-md-end my-4"><v-btn color="primary"
            prepend-icon="mdi-plus" to="/new-patient">Adicionar
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

<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        {
          align: 'start',
          key: 'name',
          title: 'Nome',
        },
        { key: 'last_appointment', title: 'Última consulta' },
        { key: 'born_at', title: 'Data de nascimento' },
        { sortable: false, key: 'cpf', title: 'CPF' },
        { sortable: false, key: 'phone', title: 'Telefone' },
        { key: 'actions', title: 'Ações' },
      ],
      patients: [
        {
          name: 'Claudia Abreu Brito Moura',
          last_appointment: '09/08/2022',
          born_at: '09/08/1989',
          cpf: '840.471.532-34',
          phone: '84 92511-4989',
          actions: 1,
        },
        {
          name: 'Ricardo Almeida Costa',
          last_appointment: '11/11/2022',
          born_at: '05/07/1972',
          cpf: '683.815.791-56',
          phone: '84 90745-9054',
          actions: 1,
        },
        {
          name: 'Wagner Augusto Bahia',
          last_appointment: '05/10/2022',
          born_at: '19/08/1965',
          cpf: '145.688.456-13',
          phone: '84 95601-5439',
          actions: 7,
        },
        {
          name: 'Marinalva Barbosa Oliveira',
          last_appointment: '20/11/2022',
          born_at: '09/02/1958',
          cpf: '231.804.233-14',
          phone: '84 90426-8123',
          actions: 8,
        },
        {
          name: 'Juarez Molina Machado',
          last_appointment: '08/10/2022',
          born_at: '20/12/1968',
          cpf: '231.804.233-14',
          phone: '84 90426-8123',
          actions: 16,
        },
        {
          name: 'André Lima de Oliveira',
          last_appointment: '02/10/2022',
          born_at: '18/07/1956',
          cpf: '150.269.847-12',
          phone: '84 99678-5438',
          actions: 0,
        },
        {
          name: 'Claudia Abreu Brito Moura',
          last_appointment: '09/08/2022',
          born_at: '09/08/1989',
          cpf: '840.471.532-34',
          phone: '84 92511-4989',
          actions: 1,
        },
        {
          name: 'Ricardo Almeida Costa',
          last_appointment: '11/11/2022',
          born_at: '05/07/1972',
          cpf: '683.815.791-56',
          phone: '84 90745-9054',
          actions: 1,
        },
        {
          name: 'Wagner Augusto Bahia',
          last_appointment: '05/10/2022',
          born_at: '19/08/1965',
          cpf: '145.688.456-13',
          phone: '84 95601-5439',
          actions: 7,
        },
        {
          name: 'Marinalva Barbosa Oliveira',
          last_appointment: '20/11/2022',
          born_at: '09/02/1958',
          cpf: '231.804.233-14',
          phone: '84 90426-8123',
          actions: 8,
        },
        {
          name: 'Juarez Molina Machado',
          last_appointment: '08/10/2022',
          born_at: '20/12/1968',
          cpf: '231.804.233-14',
          phone: '84 90426-8123',
          actions: 16,
        },
        {
          name: 'André Lima de Oliveira',
          last_appointment: '02/10/2022',
          born_at: '18/07/1956',
          cpf: '150.269.847-12',
          phone: '84 99678-5438',
          actions: 0,
        },
      ],
    }
  },
}
</script>
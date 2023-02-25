<template>
  <h1>Create Patient</h1>
  <v-card class="ma-3 ma-md-6 px-5 py-10">
    <v-card-title>Dados pessoais do paciente</v-card-title>
    <v-card-item>
      <personal-data />
    </v-card-item>
  </v-card>
</template>

<script setup>
import PersonalData from '@/components/forms/patients/PersonalData.vue';

</script>
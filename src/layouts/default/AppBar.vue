<template>
  <v-app-bar :elevation="2" color="primary" density="compact">
    <template v-slot:prepend>
      <v-icon size="large" color="white">
        mdi-circle-edit-outline
      </v-icon>
    </template>

    <v-app-bar-title variant="white">Prontuário Eletrônico</v-app-bar-title>
    <template v-slot:append>
      <v-btn prepend-icon="mdi-account-circle" append-icon="mdi-chevron-down">Médico</v-btn>
    </template>
  </v-app-bar>
</template>
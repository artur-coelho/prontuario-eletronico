<template>
  <v-navigation-drawer v-model="drawer" :rail="rail" color="blue-lighten-4" permanent @click="rail = false">
    <v-list-item title="Minimizar menu" nav>
      <template v-slot:prepend>
        <v-btn variant="text" icon="mdi-menu" class="mr-4" @click.stop="rail = !rail"></v-btn>
      </template>
      <template v-slot:append>
        <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item v-for="item in items" :key="item.title" :prepend-icon="item.icon" :title="item.title"
        :value="item.title" :to="item.route"></v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city', route: '/' },
        { title: 'Estatísticas', icon: 'mdi-chart-bar', route: '/' },
        { title: 'Pacientes', icon: 'mdi-account-multiple', route: '/patients' },
      ],
      rail: true,
    }
  },
}
</script>

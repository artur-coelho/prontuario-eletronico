<template>
  <v-row class="fill-height">
    <v-col cols="8">
      <v-carousel height="100%" :show-arrows="false">
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col cols="4" class="d-flex flex-column align-center justify-center px-16">
      <h2>Login do Usuário</h2>
      <v-btn class="mt-10 w-75" color="blue-darken-3" @click="login">Entrar com o Sabiá</v-btn>
      <v-btn href="https://perfil.sabia.ufrn.br/cadastrar/" target="_blank" class="mt-6 w-75" color="blue-darken-2">Criar
        conta
        no
        Sabiá</v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
import { useRouter } from 'vue-router'

import CAROUSEL_01 from '@/assets/images/auth/login-carousel-01.png'
import CAROUSEL_02 from '@/assets/images/auth/login-carousel-02.png'
import CAROUSEL_03 from '@/assets/images/auth/login-carousel-03.png'
import CAROUSEL_04 from '@/assets/images/auth/login-carousel-04.png'

const router = useRouter();
const items = [
  { src: CAROUSEL_01 },
  { src: CAROUSEL_02 },
  { src: CAROUSEL_03 },
  { src: CAROUSEL_04 },
]

const login = () => {
  router.push('/')
}

</script>
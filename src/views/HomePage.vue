<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="pa-4 pa-md-8">
          <v-card-title class="text-center">Consultas atrasadas x Consultas pontuais</v-card-title>
          <v-card-item>
            <Doughnut :data="onTimeData" :options="onTimeOptions" />
          </v-card-item>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-4 pa-md-8">
          <v-card-title class="text-center">Consultas do dia</v-card-title>
          <v-card-item>
            <Doughnut :data="onDayData" :options="onDayOptions" />
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as consultsTimeChartConfig from '@/charts/consultsOnTimeConfig.js'
import * as consultsDayChartConfig from '@/charts/consultsOnDayConfig.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const { data: onTimeData, options: onTimeOptions } = consultsTimeChartConfig
const { data: onDayData, options: onDayOptions } = consultsDayChartConfig

</script>
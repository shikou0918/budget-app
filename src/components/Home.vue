<script setup lang="ts">
import { ref } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto';
import { Pie } from 'vue-chartjs'
import * as chartConfig from '../chartConfig.js'

// ChartJSのプラグインを登録
ChartJS.register(ArcElement, Tooltip, Legend)

// chartConfigからデータを取得
const { data, options } = chartConfig
</script>

<template>
  <Pie :data="data" :options="options" />
</template>

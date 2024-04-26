<script setup lang="ts">

import ProductItem from "~/components/goods/ProductItem.vue";
import type {SearchDataType} from "~/types/display/SearchFilter";

const { goodsList } = defineProps<{ goodsList: SearchDataType[] }>()
</script>

<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="goods-card" flat bordered v-for="goods in goodsList">
      <NuxtLink :to="`/goods/detail/${goods.goodsNo}`" class="text-black" style="text-decoration: none">
        <ProductItem :data="goods"/>
      </NuxtLink>
    </q-card>
  </div>
</template>

<style scoped>
.goods-card {
  width: 280px;
}
</style>
<script setup lang="ts">

interface GoodsPriceProps {
  goodsNo: string
  saleRate: number
  salePrc: number
  norPrc: number
  isPackage: boolean
}
const {
  goodsNo,
  saleRate,
  salePrc,
  norPrc,
  isPackage
} = defineProps<GoodsPriceProps>()

const salePrcStr = salePrc?.toLocaleString('ko-KR')
const norPrcStr = norPrc?.toLocaleString('ko-KR')
</script>

<template>
  <div class="mb-5 flex items-center gap-2">
    <span v-if="saleRate > 0" class="subtitle1 font-bold text-primary">{{ saleRate }}%</span>
    <span class="subtitle1 font-bold">
      {{ salePrcStr }}
      {{ isPackage ? '~' : '' }}
    </span>
    <span v-if="saleRate > 0" class="gray7 caption1 line-through">
      {{ norPrcStr }}
      {{ isPackage ? '~' : '' }}
    </span>
<!--    <GoodsMaxDcInfoModal goodsNo={goodsNo} />-->
  </div>
</template>

<style scoped>

</style>
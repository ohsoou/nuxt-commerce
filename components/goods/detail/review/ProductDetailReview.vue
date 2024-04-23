<script setup lang="ts">
import type {GoodsPackageProps, RelGoodsInfo} from "~/types/goods/GoodsDetailDataModel";
import type {GoodsSummary} from "~/types/display/GoodsSummaryDataModel";

interface GoodsDetailTabReviewProps extends GoodsPackageProps {
  goodsNo: string
  initIndex: number
  relGoodsInfo: RelGoodsInfo[]
  relGoodsSummaryList: GoodsSummary[]
}


const {
  isPackageItemDetail = false,
  isPackage = false,
  goodsNo,
  initIndex,
  relGoodsInfo = [],
  relGoodsSummaryList = []
} = defineProps<GoodsDetailTabReviewProps>()


</script>

<template>
  <q-rating
      v-model="data.goodsRevStarscrAvgVal"
      size="1rem"
      color="grey-7"
      readonly
  />
</template>

<style scoped>

</style>
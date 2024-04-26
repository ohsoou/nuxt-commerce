<script setup lang="ts">
import type {RelGoodsInfo} from "~/types/goods/GoodsDetailDataModel";
import type {GoodsSummary} from "~/types/display/GoodsSummaryDataModel";
import type {GoodsPackageProps} from "~/types/goods/GoodsItemProps";

interface GoodsDetailTabReviewProps extends GoodsPackageProps {
  goodsNo: string
  initIndex: number
  relGoodsInfo: RelGoodsInfo[]
  relGoodsSummaryList: GoodsSummary[]
}


const {
  isGoodsInPackage = false,
  isPackage = false,
  goodsNo,
  initIndex,
  relGoodsInfo = [],
  relGoodsSummaryList = []
} = defineProps<GoodsDetailTabReviewProps>()


</script>

<template>
<!--  <q-rating-->
<!--      v-model=""-->
<!--      size="1rem"-->
<!--      color="grey-7"-->
<!--      readonly-->
<!--  />-->
</template>

<style scoped>

</style>
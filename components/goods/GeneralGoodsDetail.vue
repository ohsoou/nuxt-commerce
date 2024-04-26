<script setup lang="ts">
import type {GoodsContInfo, GoodsDetailInfo} from "~/types/goods/GoodsDetailDataModel";
import {reactive} from "vue";
import type {GoodsPackageProps} from "~/types/goods/GoodsItemProps";

interface GeneralGoodsDetailProps extends GoodsPackageProps {
  goodsDetail: GoodsDetailInfo
}

const {goodsDetail} = defineProps<GeneralGoodsDetailProps>()
const goodsBase = reactive(goodsDetail.goodsBase)
const goodsContList: GoodsContInfo[] = goodsDetail.goodsContList

</script>

<template>
  <GoodsBaseInfo v-if="goodsBase"
                 :goods-base="goodsBase"
                 :deli-polc-base="goodsDetail.deliPolcBase"
                 :rev-summary="goodsDetail.revSummary"
                 :goods-cont-list="goodsContList"
                 :itm-no-list="goodsDetail.itmNoList"
                 :is-package="isPackage"
  />
  <GoodsDetailTab
      :is-package="false"
      :is-goods-in-package="isGoodsInPackage"
      :goods-desc="goodsDetail.goodsDesc.goodsDtlDesc"
      :goods-no="goodsBase.goodsNo"
      :goods-att-info="goodsDetail.goodsAttInfo"
      :rel-goods-info="[]"
  />
</template>

<style scoped>
</style>
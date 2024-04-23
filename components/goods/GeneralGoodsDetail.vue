<script setup lang="ts">
import type {GoodsDetailInfo, GoodsPackageProps} from "~/types/goods/GoodsDetailDataModel";
import {reactive} from "vue";

interface GeneralGoodsDetailProps extends GoodsPackageProps {
  goodsDetail: GoodsDetailInfo
}

const {goodsDetail} = defineProps<GeneralGoodsDetailProps>()
const goodsBase = reactive(goodsDetail.goodsBase)

</script>

<template>
  <ProductDetailTab
      :is-package="false"
      :is-package-item-detail="isPackageItemDetail"
      :goods-desc="goodsDetail.goodsDesc.goodsDtlDesc"
      :goods-no="goodsBase.goodsNo"
      :goods-att-info="goodsDetail.goodsAttInfo"
      :rel-goods-info="[]"
  />
</template>

<style scoped>
</style>
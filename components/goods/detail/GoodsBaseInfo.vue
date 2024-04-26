<script setup lang="ts">
import type {
  BaseDeliveryInfo,
  DeliPolcBase,
  GoodsBase,
  GoodsContInfo,
  RelGoodsInfo,
  RevSummary
} from "~/types/goods/GoodsDetailDataModel";
import type {GoodsSummary} from "~/types/display/GoodsSummaryDataModel";
import type {GoodsPackageProps} from "~/types/goods/GoodsItemProps";
import {ref} from "vue";
import GoodsOptionDialog from "~/components/dialog/goods/GoodsOptionDialog.vue";

interface GoodsBaseInfoProps extends GoodsPackageProps {
  goodsBase: GoodsBase
  deliPolcBase: DeliPolcBase
  revSummary: RevSummary
  goodsContList: GoodsContInfo[]
  relGoodsInfo?: RelGoodsInfo[]
  relGoodsSummaryList?: GoodsSummary[]
  repGoodsBase?: GoodsBase
  itmNoList: string[]
}

const {
  goodsBase,
  deliPolcBase,
  revSummary,
  isPackage = false,
  isGoodsInPackage = false,
  goodsContList,
  relGoodsInfo = [],
  relGoodsSummaryList = [],
  itmNoList = [''],
  repGoodsBase
} = defineProps<GoodsBaseInfoProps>()

const buyQtyLmtInfo = {
  buyQtyLmtYn: goodsBase.buyQtyLmtYn,
  maxLmtQty: goodsBase.maxLmtQty,
  minLmtQty: goodsBase.minLmtQty
}
const restockInfo = {
  goodsNo: goodsBase.goodsNo,
  goodsNm: goodsBase.goodsNm,
  goodsRepImgPathNm: goodsContList.find(
      (item) => item.imgGbCd === 'P10' && item.contTypCd === '03'
  )?.contFilePathNm || '',
  brandNm: goodsBase.brandNo
}
const $optionSelectDialog = ref<InstanceType<typeof GoodsOptionDialog> | null>(null)
const isGeneralGoods = goodsBase.goodsCompCd === '10'
const isPackageGoods = goodsBase.goodsCompCd === '20'

</script>

<template>
  <div class="goods-info mb-10 w-full px-5 pt-5 pc:px-0 pc:pt-0">
    <div class="action-controls mb-2 flex">
    </div>

    <div class="subtitle1 pc:heading2 mb-1">{{ goodsBase.goodsNm }}</div>
    <!--    <GoodsRevSummary :revSummary="revSummary"/>-->
    <GoodsPrice
        :goods-no="goodsBase.goodsNo"
        :sale-prc="goodsBase.salePrc"
        :nor-prc="goodsBase.norPrc"
        :sale-rate="goodsBase.saleRate"
        :is-package="isPackage"
    />
    <table class="table-info mb-10">
      <colgroup>
        <col class="w-[80px]"/>
        <col/>
      </colgroup>
      <tbody>
      </tbody>
    </table>
    <!--    상품 주문     -->
    <template v-if="!isGoodsInPackage">
      <GoodsPurchaseButtons
          :is-sold-out="goodsBase.saleStatCd === '20'"
          :rglr-deli-goods-yn="goodsBase.rglrDeliGoodsYn"
          :gvgf-psb-yn="goodsBase.gvgfPsbYn"
          :open-option-select-popup="() => $optionSelectDialog?.toggle()"
      />
      <GoodsOptionDialog
          ref="$optionSelectDialog"
          :goods-no="goodsBase.goodsNo"
          :sale-stat-cd="goodsBase.saleStatCd"
          :sale-meth-cd="goodsBase.saleMethCd"
          :buy-qty-lmt-info="buyQtyLmtInfo"
          :rglr-deli-goods-yn="goodsBase.rglrDeliGoodsYn"
          :gvgf-psb-yn="goodsBase.gvgfPsbYn"
          :base-delivery-info="goodsBase as BaseDeliveryInfo"
          :deli-polc-base="deliPolcBase"
          :disp-ctg-no="goodsBase.dispCtgNo"
          :restock-info="restockInfo"
          :stk-mgr-yn="goodsBase.stkMgrYn"
          :safe-stk-noti-yn="goodsBase.safeStkNotiYn"
          :rel-goods-info="relGoodsInfo"
          :rel-goods-summary-list="relGoodsSummaryList"
      />
    </template>
  </div>
</template>

<style scoped>

</style>
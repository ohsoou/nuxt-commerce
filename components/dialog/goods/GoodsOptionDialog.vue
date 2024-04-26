<script setup lang="ts">

import type {RelGoodsInfo} from "~/types/goods/GoodsDetailDataModel";
import type {GoodsSummary} from "~/types/display/GoodsSummaryDataModel";
import {getOptionInfo} from "~/api/goods/GoodsOptionApi";
import type {SelectOption} from "~/types/goods/GoodsOptionDataModel";
import {computed} from "@vue/reactivity";
import {reactive, ref} from "vue";

interface GoodsOptionSelectModalProps {
  goodsNo: string
  saleStatCd: string
  saleMethCd: string
  // buyQtyLmtInfo: BuyQtyLmtInfo
  className?: string
  rglrDeliGoodsYn: string
  gvgfPsbYn: string
  dispCtgNo: string
  restockInfo: {
    goodsNo: string
    goodsNm: string
    goodsRepImgPathNm: string
    brandNm: string
  }
  stkMgrYn: string
  safeStkNotiYn: string
  relGoodsInfo?: RelGoodsInfo[]
  relGoodsSummaryList?: GoodsSummary[]
}

const {
  goodsNo,
  saleStatCd,
  saleMethCd,
  // buyQtyLmtInfo,
  rglrDeliGoodsYn,
  gvgfPsbYn,
  dispCtgNo,
  restockInfo,
  stkMgrYn = 'N',
  safeStkNotiYn = 'N'
} = defineProps<GoodsOptionSelectModalProps>()

// https://github.com/nuxt/nuxt/issues/15086
const isOpen = ref(false)
defineExpose({
  toggle: () => isOpen.value = !isOpen.value
})
const optionInfos = await getOptionInfo(goodsNo)
const optionInfoList = reactive(optionInfos)
const selectOptionFormatList = optionInfos.map((item, idx) => {
  return {
    label: item.optnNm,
    value: item.optnNo,
    isSoldOut: item.itmSaleStatCd === '20',
    rgbVal: item.rgbVal,
    imgPathNm: item.imgPathNm
  } as SelectOption
})
const isOnlyOption = computed(() => !(optionInfos.length > 1 || (optionInfos[0]?.nextLevelOption?.length || 0) > 0))

</script>

<template>
  <div className="flex flex-col gap-3">
    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="isOpen" seamless position="bottom" full-width>
        <q-card>
          <q-card-section class="select-options">
            <div class="q-pa-md">
              <div v-if="!isOnlyOption" class="q-gutter-md">
                <GoodsOptionSelect :option-list="optionInfos"/>
              </div>
              <p v-else class="text-sm">해당 상품은 단일상품입니다.</p>

              <!--            <CounterGroup />-->


            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<style scoped>
</style>
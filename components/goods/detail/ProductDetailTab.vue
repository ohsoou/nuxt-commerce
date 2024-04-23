<script setup lang="ts">
// 객체주소 재할당 방지
import type {GoodsAttInfo, GoodsPackageProps, RelGoodsInfo} from "~/types/goods/GoodsDetailDataModel";
import type {GoodsSummary} from "~/types/display/GoodsSummaryDataModel";
import {ref} from "vue";
import ProductDetailReview from "~/components/goods/detail/review/ProductDetailReview.vue";

const emptyArr = [] as GoodsSummary[]

interface GoodsDetailTabProps extends GoodsPackageProps {
  goodsDesc: string
  goodsNo: string
  goodsAttInfo: GoodsAttInfo[]
  relGoodsInfo: RelGoodsInfo[]
  relGoodsSummaryList?: GoodsSummary[]
  className?: string
}

const {
  isPackage = false,
  isPackageItemDetail = false,
  goodsDesc,
  goodsNo,
  goodsAttInfo,
  relGoodsInfo,
  relGoodsSummaryList = emptyArr,
  className
} = defineProps<GoodsDetailTabProps>()

const tab = ref('info')
const splitterModel = ref(20)
</script>

<template>
  <div>
    <q-splitter
        v-model="splitterModel"
        horizontal
    >
      <template v-slot:before>
        <q-tabs
            v-model="tab"
            align="justify"
            class="text-teal"
        >
          <q-tab name="info" label="상품정보" />
          <q-tab name="reviews" label="상품평" />
          <q-tab name="qna" label="상품 QnA" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
            v-model="tab"
            animated
            swipeable
            transition-prev="jump-up"
            transition-next="jump-up"
        >
          <q-tab-panel name="info">
            <div class="text-h4 q-mb-md">상품정보</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="reviews">
            <ProductDetailReview/>
          </q-tab-panel>

          <q-tab-panel name="qna">
            <div class="text-h4 q-mb-md">상품 QnA</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
</template>

<style scoped>

</style>
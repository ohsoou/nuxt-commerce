<script setup lang="ts">

import s3Image from "~/utils/commonUtils";
import type {ProductItemProps} from "~/types/goods/ProductItemProps";

const { data, hideReviewStar } = defineProps<ProductItemProps>()

// goods price
const showDcRate = Boolean(data.dcRate && Number(data.dcRate) > 0)
const showSalePrc = Boolean(
    showDcRate && data.rcntSalePrc && Number(data.rcntSalePrc) > 0
)
const aplyPrc = Number(data.aplyPrc).toLocaleString()

/// goods review
const showReview = Boolean(data.goodsRevCnt && data.goodsRevCnt > 0)
const showReviewStar = Boolean(
    !hideReviewStar &&
    data.goodsRevStarscrAvgVal &&
    data.goodsRevStarscrAvgVal > 0
)
</script>

<template>
  <q-img height="300px" :src="s3Image({src: data.goodsRepImgPathNm})"/>

  <q-card-actions class="goods-icons" align="right">
    <q-btn flat round color="red" icon="favorite" size="sm"/>
    <q-btn flat round color="primary" icon="share" size="sm"/>
  </q-card-actions>
  <q-card-section>
    <div class="goods-review-rate row items-end q-gutter-md text-black">
      <q-rating
          v-model="data.goodsRevStarscrAvgVal"
          size="1rem"
          color="grey-7"
          readonly
      />
      <span class="text-body2 text-gray7" >{{ Number(data.goodsRevCnt).toLocaleString() }}</span>
    </div>
  </q-card-section>

  <q-card-section class="goods-info q-pt-none" style="height: 120px">
    <div class="goods-brand text-caption">
      {{data.brandNm}}
    </div>
    <div class="goods-name text-subtitle2">
      {{data.goodsNm}}
    </div>
    <div class="goods-price">
      <span class="text-body2 block text-gray7" v-if="showSalePrc" style="text-decoration-line: line-through">
        {{ Number(data.rcntSalePrc).toLocaleString() }}원
      </span>
      <span class="text-body1 q-mr-sm text-weight-bold text-red" v-if="showDcRate">
        {{ data.dcRate }}%
      </span>

      <span class="text-body1 text-weight-bold">
        {{ aplyPrc }}원
      </span>
    </div>
  </q-card-section>
</template>

<style scoped>

</style>
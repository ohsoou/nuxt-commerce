<script setup lang="ts">
import type {GoodsDetailInfo, PackageGoodsInfo} from "~/types/goods/GoodsDetailDataModel";
import GeneralGoodsDetail from "~/components/goods/GeneralGoodsDetail.vue";
import {useRoute} from "vue-router";
import {getGoodsDetail} from "~/api/goods/GoodsDetailApi";
import {UnknownError} from "~/utils/error";

// interface GoodsDetailProps {
//   goodsDetail: GoodsDetailInfo | PackageGoodsInfo
// }
//
// const goodsDetail = defineProps<Readonly<GoodsDetailProps>>()
const { params, query } = useRoute()

const goodsDetail: GoodsDetailInfo | PackageGoodsInfo | undefined =
    (await getGoodsDetail(
        params['goodsNo'],
        query.infDispCtgNoGbCd?.toString() ?? '',
        query.infDispCtgNo?.toString() ?? ''
    )) as GoodsDetailInfo | PackageGoodsInfo

if (!goodsDetail) {
  console.log('##################### getGoodsDetail !res : ', res)

  const errorInfo = new UnknownError()
  console.log('####### errorInfo : ', errorInfo)
}


</script>

<template>
  <template v-if="goodsDetail.isPackage">
    <!--      return <PackageGoodsDetail :goodsDetail="goodsDetail as PackageGoodsInfo" />-->
  </template>
  <template v-else>
    <GeneralGoodsDetail :goodsDetail="goodsDetail as GoodsDetailInfo" :is-package="goodsDetail.isPackage"/>
  </template>
</template>

<style scoped>

</style>
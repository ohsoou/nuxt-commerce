<script setup lang="ts">
import type {GoodsDetailInfo, PackageGoodsInfo} from "~/types/goods/GoodsDetailDataModel";
import GeneralGoodsDetail from "~/components/goods/GeneralGoodsDetail.vue";
import {useRoute} from "vue-router";
import {useFetch} from "#imports";

const { params, query } = useRoute()

const { data } = await useFetch(`/api/goods/detail/${params.goodsNo}`, {
  method: 'get'
})

const goods = data.value as GoodsDetailInfo | PackageGoodsInfo

</script>

<template>
  <template v-if="goods.isPackage">
    <!--      return <PackageGoodsDetail :goodsDetail="goodsDetail as PackageGoodsInfo" />-->
  </template>
  <template v-else>
    <GeneralGoodsDetail :goodsDetail="goods as GoodsDetailInfo" :is-package="goods.isPackage"/>
  </template>
</template>

<style scoped>

</style>
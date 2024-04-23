<script setup lang="ts">
import {SearchApi} from "~/api/display/DisplaySearchApi";
import {reactive} from "vue";
import ProductItemList from "~/components/goods/ProductItemList.vue";
import type {ShopProps} from "~/types/display/ShopDataModel";


const {categoryInfo} = defineProps<ShopProps>()

const searchData = await SearchApi({
  searchWord: '',
  from: '0',
  size: '10',
  ctgNo: categoryInfo?.dispCtgNo || '',
  filter: `ctgFullPath:${categoryInfo?.dispCtgNo}`
})

const goodsList = reactive(searchData.searchDataList)

</script>

<template>
  <CategoryGoodsNavigation :category-props="categoryInfo"/>
  <ProductItemList :goods-list="goodsList"/>
</template>

<style scoped>

</style>
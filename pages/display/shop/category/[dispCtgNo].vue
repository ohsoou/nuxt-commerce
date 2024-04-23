<script setup lang="ts">
import {useRoute} from "vue-router";
import {CategoryShopApi} from "~/api/display/DisplayShopApi";

const { params } = useRoute()
const {categoryInfo, shopInfo, conrList, template} = await CategoryShopApi(params)

</script>

<template>
<!--  <DynamicTemplate :category-info="categoryInfo" :template="template" :conr-list="conrList"/>-->
  <CategoryDefaultTemplate :category-info="categoryInfo"/>
</template>

<style scoped>

</style>
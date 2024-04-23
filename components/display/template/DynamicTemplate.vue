<script setup lang="ts">
import type {ShopProps} from "~/types/display/ShopDataModel";
import {pascalCase} from "scule";
import {defineAsyncComponent} from "vue";

const {categoryInfo, brandInfo, template, conrList} = defineProps<ShopProps>()
const tmplFileNm = pascalCase(template?.tmplFileNm || '')

const AsyncComponent = defineAsyncComponent( {
  loader: () => import(`/components/display/template/${tmplFileNm}.vue`),
  onError(error, retry, fail, attempts) {
      retry()
  },
  // suspensible: true
})
</script>

<template>
  <AsyncComponent
      :conrList="conrList"
      :template="template"
      :brandInfo="brandInfo"
      :categoryInfo="categoryInfo"
  />
</template>

<style scoped>

</style>
<script setup lang="ts">
import {useCategoryStore} from "~/stores/Category";
import CategoryMenuContents from "~/components/common/CategoryMenuContents.vue";

const {displayCategoryList} = useCategoryStore()


</script>

<template>
  <q-btn flat round dense icon="menu" class="q-mr-sm">
    <CategoryMenuContents :categories="displayCategoryList" :depth="'1'"/>
  </q-btn>
</template>

<style scoped>

</style>
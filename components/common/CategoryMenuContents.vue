<script setup lang="ts">
import type {DisplayCategory} from "~/types/display/CategoryDataModel";

defineProps<{
  categories: DisplayCategory[],
  depth: string
}>()
</script>

<template>
  <q-menu
      transition-show="jump-down"
      transition-hide="jump-up"
      anchor="bottom start" self="top start"
      :updatePosition="() => {}"
  >
    <q-list dense style="min-width: 100px" v-for="(category, index) in categories">
      <q-item :to="`/display/shop/category/${category.dispCtgNo}`" >
        <q-item-section>{{ category.dispCtgNm }}</q-item-section>
        <template v-if="category.subCategoryList && category.subCategoryList.length > 0">
          <q-item-section side>
            <q-icon name="keyboard_arrow_right"/>
          </q-item-section>
          <CategoryMenuContents :categories="category.subCategoryList" :depth="category.depth"/>
        </template>
      </q-item>
      <q-separator/>
    </q-list>
  </q-menu>
</template>

<style scoped>

</style>
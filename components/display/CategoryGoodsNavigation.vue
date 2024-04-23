<script setup lang="ts">
import {useCategoryStore} from "~/stores/Category";
import type {DisplayCategory} from "~/types/display/CategoryDataModel";
import {computed, ref} from "vue";
import {navigateTo} from "#app/composables/router";

const MAX_VISIBLE_CATEGORY = 3
const {categoryProps} = defineProps<{ categoryProps: DisplayCategory }>()
const {flatCategories} = useCategoryStore()


const pageCategory = flatCategories[categoryProps.dispCtgNo]
const categoryHistory = computed(() => {
  const result = [pageCategory.lrgCtgNo, pageCategory.midCtgNo, pageCategory.smlCtgNo, pageCategory.thnCtgNo]
      .filter(no => no)
      .map(no => flatCategories[(no as string)])
      .slice(0, MAX_VISIBLE_CATEGORY)

  return pageCategory.depth !== '4' && pageCategory.leafYn === 'Y'? result.slice(0, -1) : result
})
const upperCategory= categoryHistory.value.at(-1)
const navFocus = ref(pageCategory.dispCtgNo)
const clickNav = (dispCtgNo: string) => {
  navigateTo(`/display/shop/category/${dispCtgNo}`)
}
</script>

<template class="category-nav">

    <q-breadcrumbs gutter="sm">
      <q-breadcrumbs-el v-for="category in categoryHistory"
                        :label="category.dispCtgNm"
                        @click="clickNav(category.dispCtgNo)"/>
    </q-breadcrumbs>
    <div class="q-pa-md" v-if="upperCategory">
      <q-tabs
          v-model="navFocus"
          inline-label
          outside-arrows
          mobile-arrows
          align="left"
      >
        <q-tab :label="'전체'" :name="upperCategory.dispCtgNo" @click="clickNav(upperCategory.dispCtgNo)" content-class=""/>
        <q-tab v-for="sub in upperCategory.subCategoryList"
               :label="sub.dispCtgNm"
               :name="sub.dispCtgNo"
               @click="clickNav(sub.dispCtgNo)"
        />
      </q-tabs>
    </div>
</template>

<style scoped>

</style>
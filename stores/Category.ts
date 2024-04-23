import {defineStore} from "pinia";
import type {DisplayCategory} from "~/types/display/CategoryDataModel";
import DisplayCategoryApi from "~/api/display/DisplayCategoryApi";

export const useCategoryStore = defineStore('categoryStore', {
    state: () => ({
        displayCategoryList: [] as DisplayCategory[],
        flatCategories: {} as { [k: string]: DisplayCategory }
    }),
    actions: {
        async fetchCategory() {
            this.displayCategoryList = await DisplayCategoryApi()
            this.flatCategories = getCategoryFlatList(this.displayCategoryList)
        }
    }
})

const flattenCategory = (categoryList: DisplayCategory[]) : DisplayCategory[] => {
    return categoryList.flatMap((category) => [category, ...flattenCategory(category.subCategoryList ?? [])])
}
const getCategoryFlatList = (hierarchyCategoryList: DisplayCategory[]) => {
    if (!hierarchyCategoryList || hierarchyCategoryList.length <= 0) return {}
    const targetList = [...hierarchyCategoryList]
    return Object.fromEntries(flattenCategory(targetList).map(c=> [c.dispCtgNo, c]))
}
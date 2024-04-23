import type {DisplayCategory} from "~/types/display/CategoryDataModel";
import {useFetchApi} from "~/composables/useFetchApi";

const DisplayCategoryApi = async (params?: { brandNo: string }) => {
    const {data} = (await useFetchApi('/api/display/v1/displayCategory', {
        method: 'GET',
        params
    }))

    return (data.value || []) as DisplayCategory[]
}

export default DisplayCategoryApi

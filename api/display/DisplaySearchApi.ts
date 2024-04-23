import {useFetchApi} from "~/composables/useFetchApi";
import {FILTER_DEFAULT_VALUE} from "~/constants/SearchConstants";
import type {FilterDataType} from "~/types/display/SearchFilter";
import exp from "node:constants";

// @ts-ignore
const SearchApi = async ({
                             from = FILTER_DEFAULT_VALUE.PAGE_NO,
                             size = FILTER_DEFAULT_VALUE.PAGE_SIZE,
                             searchWord = '',
                             ctgNo = '',
                             order = { sort: 'desc', sortField: 'ordQty' },
                             filter=''
                         }): Promise<FilterDataType> => {
    const { data } = (await useFetchApi(
        `/api/goods/v1/search/product?searchWord=${searchWord}&ctgNo=${ctgNo}&from=${from}&size=${size}&sortField=${order.sortField}&sort=${order.sort}&filters=${filter}`
    )) as any

    return (data.value.payload || {}) as FilterDataType
}

export {SearchApi}
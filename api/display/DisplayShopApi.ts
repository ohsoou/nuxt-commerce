import type {ShopResponse} from "~/types/display/ShopDataModel";
import {useFetchApi} from "~/composables/useFetchApi";

interface ShopProps {
    shopNo?: string
    dispCtgNo?: string
    brandNo?: string
}

const ShopApi = async ({ shopNo }: ShopProps): Promise<ShopResponse> => {
    const { data } = (await useFetchApi(
        `/api/display/v1/shop/${shopNo}`, {
            method: 'GET'
        }
    ))
    return (data.value || {}) as ShopResponse
}

const CategoryShopApi = async ({
                                   dispCtgNo
                               }: ShopProps): Promise<ShopResponse> => {
    const { data } = (await useFetchApi(
        `/api/display/v1/shop/category/${dispCtgNo}`, {
            method: 'GET'
        }
    ))
    return (data.value || {}) as ShopResponse
}

export { ShopApi, CategoryShopApi }
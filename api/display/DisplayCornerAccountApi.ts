import type {Corner} from "~/types/display/ShopDataModel";
import {useFetchApi} from "~/composables/useFetchApi";

const DisplayCornerAccountApi = async ({accountId}: { accountId: string }) => {
    const {data} = (await useFetchApi(`/api/display/v1/shop/account/${accountId}`, {
        method: 'GET'
    }))
    return (data.value || {}) as Corner
}

export default DisplayCornerAccountApi

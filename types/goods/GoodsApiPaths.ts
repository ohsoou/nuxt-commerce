type GoodsDetailProps = {
    goodsNo: string
    infDispCtgNoGbCd: string
    infDispCtgNo: string
    chlNo: string
}


export const goodsDtailpaths = {
    goodsDetail({
                    goodsNo,
                    infDispCtgNoGbCd,
                    infDispCtgNo,
                    chlNo
                }: GoodsDetailProps): string {
        return `/api/goods/v1/detail/goodsDetail?goodsNo=${goodsNo}&infDispCtgNoGbCd=${infDispCtgNoGbCd}&infDispCtgNo=${infDispCtgNo}&chlNo=${chlNo}`
    },
    goodsOptionInfo(): string {
        return `/api/goods/v1/detail/goodsOptionInfo`
    },
    optionItemGoodsInfo(): string {
        return `/api/goods/v1/detail/goods`
    },
    eventList(): string {
        return `/api/order/v1/marketing/aeEvtList`
    },
    couponList(): string {
        return `/api/order/v1/marketing/goodsDetailCpnList`
    },
    downloadCoupon(): string {
        return `/api/order/v1/marketing/cpnDown`
    },
    maxDcPriceWithItem(goodsNo: string): string {
        return `/api/goods/v1/detail/maxDc/${goodsNo}`
    },
    replenishApply(): string {
        return `/api/goods/v1/replenish/replenishApply`
    },
    replenishList(): string {
        return `/api/goods/v1/replenish/replenishList`
    },
    replenishCancel(): string {
        return `/api/goods/v1/replenish/replenishCancel`
    },
    registerBasket(): string {
        return `/api/order/v1/basket/registerBasket`
    },
    entrDlvpInfoList(goodsNo:string): string {
        return `/api/goods/v1/delivery/pd/${goodsNo}`
    },
    relGoodsInfoList(): string {
        return `/api/goods/v1/detail/summary`
    },
    detailProductInfo(): string {
        return `/api/goods/v1/detail/productInfo`
    }
}
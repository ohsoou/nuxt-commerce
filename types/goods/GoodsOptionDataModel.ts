import type {GoodsBase} from "~/types/goods/GoodsDetailDataModel";

export interface OptionInfo {
    goodsNo: string
    optnCatNm: string
    optnNo: string
    optnNm: string
    itmNo: string | null
    limtQty: number
    stkQty: number
    safeStkQty: number
    itmSaleStatCd: string
    addSalePrc: number
    basePrc: number
    imgPathNm: string
    imgFileNm: string
    rgbVal: string
    nextLevelOption: OptionInfo[] | null
}

export type OptionPrice = {
    goodsNo: string
    itmNo: string
    norPrc: number
    salePrc: number
    orgSalePrc: number
    maxBenefitAmt: number
    saleRate: number
}

export type GoodsOptionInfo = {
    goodsBase: GoodsBase
    options: OptionInfo[]
}

export type SelectOption = {
    label: string
    value: string
    isSoldOut: boolean
    rgbVal: string
    imgPathNm: string
}
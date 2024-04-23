export interface GoodsSummary {
    goodsNo: string
    goodsNm: string
    brandNo: string
    brandNm?: string
    buyrAgeLmtCd: string
    saleStatCd: string
    salePrc: number
    rcntSalePrc: number
    aplyPrc: number
    dispCtgNo?: number
    dcRate?: number
    goodsRepImgPathNm: string
    goodsRevCnt: number
    goodsRevStarscrAvgVal?: string
    adlCertiYn: string
    iconList?: string[]
    wishGoodsYn?: string
}

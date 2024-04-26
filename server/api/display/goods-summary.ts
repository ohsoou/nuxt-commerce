export type GoodsSummary = {
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
  goodsRevStarscrAvgVal?: number
  adlCertiYn: string
  iconList?: string[]
  wishGoodsYn?: string
}

export type PrGoodsItemInfo = {
    goodsNo: string | null | undefined // 상품번호
    goodsNotiLisartCd: string | null | undefined // 상품고시품목코드(PR012)
    goodsNotiItemCd: string | null | undefined // 상품고시항목코드
    langCd: string | null | undefined  // 언어코드(CM009)
    notiItemCmt: string | null | undefined // 고시항목내용
    sortSeq: string | null | undefined // 정렬순서
    notiItemNm: string | null | undefined  // 고시항목명
    goodsNotiLisartNm: string | null | undefined // 상품고시항목코드명
}

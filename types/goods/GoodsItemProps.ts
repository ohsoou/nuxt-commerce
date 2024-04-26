
/**
 * ProductItem 컴포넌트 내 공통 상품유닛
 * */
export interface GoodsUnit {
    goodsNo: string
    goodsNm: string
    sortSeq?: string
    brandNm?: string
    buyrAgeLmtCd: string
    rcntSalePrc: number // 판매가
    aplyPrc: number // 적용가
    dcRate?: number // 할인율
    goodsRepImgPathNm: string
    goodsRevCnt?: number
    goodsRevStarscrAvgVal?: number
    saleStatCd?: string
    wishGoodsYn?: string
    iconList?: string[]
}

/**
 * 상품유닛 optional props
 * */
export interface GoodsUnitOptionalProps {
    type?: 'card' | 'list'
    cols?: number
    imageSizes?: string
    imageWidth?: number

    // 랭킹번호
    rank?: number
    // 순서
    index?: number

    // 랭킹번호 노출여부
    showRank?: boolean
    // 순서 노출여부
    showIndex?: boolean
    // 좋아요 버튼 노출여부
    showLike?: boolean
    // 장바구니 버튼 노출여부
    showCart?: boolean
    // 브랜드정보 숨김여부
    hideBrand?: boolean
    // 리뷰정보 숨김여부
    hideReview?: boolean
    // 리뷰평점 숨김여부
    hideReviewStar?: boolean
    // 아이콘정보 숨김여부
    hideIcon?: boolean

    // 좋아요 클릭 후 callback 함수
    likeCallback?: () => {}
}

/**
 * ProductItem 내 사용 props
 * */
export interface GoodsItemProps extends GoodsUnitOptionalProps {
    data: GoodsUnit
}

/**
 * 상품목록 공통 props
 * - 사용 컴포넌트: product-list, product-slide, product-bundle-button-list
 * */
// export interface GoodsListCommonProps extends GoodsUnitOptionalProps {
//     data: GoodsSummary[] | AssociationGoodsInfo[] | SearchDataType[]
//     dataType: keyof typeof GoodsUnitDataTypeFunction
// }

export interface GoodsPackageProps {
    isPackage?: boolean, // 묶음 상품 여부
    isGoodsInPackage?: boolean, // 묶음 상품 내 상품 여부
    // isGoodsInPackageDetail?: boolean,
}
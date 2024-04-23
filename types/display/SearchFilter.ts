

export interface FilterContextType {
    filter: FilterType,
    filterData: FilterDataType | undefined,
    filterCategory: FilterCategoryType,
    filterHandler: (filterItem: {[key: string]: string | string[]}) => void,
    isShop: boolean
}

export interface FilterProviderType {
    searchWord?: string,
    dispCtgNo?: string
}
export interface FilterType {
    searchWord: string,
    ctgFullPath: string,
    from: string,
    order: string,
    dispCtgNo: string,
    brandNo: string[],
    prcTyp: string,
    minPrc: string,
    maxPrc: string,
    goodsRevStarscrAvgVal: string,
    dlexTypCd: string[],
    buyrAgeLmtCd: string
}

export interface FilterFunctionType {
    label?: string,
    key: string,
    value: string | string[] | number,
    priceValue?: Object
}

export interface FilterDataType {
    totalCount: number,
    totalPage: number,
    from: string,
    size: string,
    minPrc: number,
    maxPrc: number,
    searchDataList: SearchDataType[],
    categoryDataList: DispCtgInfoType[],
    assocwordDataList: string[],
    brandDataList: {[key: string]: string}[] | [],
    lrgCtgGrpCnt: {[key: string]: number}[],
    lrgCtgGrpNoCnt: number | null,
    lrgCtgGrpData: CtgGrpDataType[]
}

export interface FilterCategoryType {
    current: CategoryType,
    categoryList: CategoryType[][] | []
}

export interface CategoryType {
    dispCtgNo?: string,
    dispCtgNm?: string,
    subCtgGrpData?: SubCtgGrpDataType
}

export interface CtgGrpDataType {
    lrgCtgNm: string,
    lrgCtgNo: string,
    count?: number,
    subCtgGrpData?: SubCtgGrpDataType[]
}

export interface SubCtgGrpDataType {
    subCtgNm: string,
    subCtgNo: string,
    count: number,
    subCtgGrpData: SubCtgGrpDataType[] | null
}

export interface SearchDataType {
    id: string,
    goodsNo: string,
    goodsNm: string,
    prestNm: string | null,
    adveWrd: string | null,
    schKwdNm: string[],
    brandNo: string,
    brandNm: string,
    buyrAgeLmtCd: string,
    goodsRegDtm: Date,
    saleStatCd: string,
    deliProcTypCd: string,
    deliWayCd: string,
    deliDday: string,
    rcntSalePrc: string,
    salePrc: number,
    aplyPrc: number,
    dcRate: string,
    dispCtgNo: DispCtgInfoType[],
    dlexTypCd: string,
    payWayMeanCd: string,
    rservSaleYn: string,
    goodsRevCnt: string,
    goodsRevHlpfulCnt: string,
    goodsRevStarscrAvgVal: string,
    wishListCnt: string,
    goodsDtlDesc: string | null,
    sendGb: string,
    langCd: string,
    extraData: string,
    goodsRepImgPathNm: string,
    iconJson?: null,
    iconList?: string[]
}

interface DispCtgInfoType {
    dispCtgNo: string,
    ctgFullPath: string,
    ctgFullPathNm: string,
    siteNo: string,
    siteNm: string,
    dpmlNo: string,
    lrgCtgNm: string,
    lrgCtgNo: string | null
}

export interface BrandFilterType {
    brandDataList: {[key: string]: string}[] | []
}

export interface PriceMapType {
    A?: PriceType,
    B?: PriceType,
    C?: PriceType,
    D?: PriceType,
    E?: PriceType,
    F?: PriceType,
    G?: PriceType
}

export interface PriceType {
    label: string,
    value: { minPrc: number, maxPrc: number | '' }
}

import type {ErrorType} from "~/types/common/Error";


export type GoodsBase = {
    goodsNo: string
    stdCtgNo: string
    goodsCompCd: string
    goodsTypCd: string
    saleMethCd: string
    brandNo: string
    brandNm: string
    safeCertiTgtYn: string
    buyrAgeLmtCd: string
    saleStatCd: string
    buyTypCd: string
    stkMgrYn: string
    buyQtyLmtYn: string
    minLmtQty: number
    maxLmtQty: number
    safeStkNotiYn: string
    deliProcTypCd: string
    deliProcTypCdNm: string
    deliGoodsGbCd: string
    deliGoodsGbCdNm: string
    deliWayCd: string
    deliWayCdNm: string
    deliPsbRgnCd: string
    deliPsbRgnCdNm: string
    deliDday: string
    deliPolcNo: string
    bpckPsbYn: string
    rtnPsbYn: string
    exchPsbYn: string
    hsCd: string
    rglrDeliGoodsYn: string
    szGdeUseYn: string
    szGdeRegMethodCd: string
    szGdeCd: string
    szGdeConts: string
    pkgGoodsPrioRnkCd: string
    prestNm: string
    langCd: string
    goodsNm: string
    modlNm: string
    homeNm: string
    mfcoNm: string
    incomNm: string
    manufYm: string
    salemnNm: string
    adveWrd: string
    entrNo: string
    entrNm: string
    fwdidcPrarDy: string
    rsvStrtDtm: string
    rsvEndDtm: string
    dispCtgNo: string
    dispCtgNm: string
    norPrc: number
    supPcost: number
    orgSalePrc: number
    maxBenefitAmt: number
    salePrc: number
    goodsPrceTypCd: string
    saleRate: number
    milgRsrvPsbYn: string
    gvgfPsbYn: string
}

export type DeliPolcBase = {
    deliPolcNo: string
    entrNo: string
    dlexTypCd: string
    stdAmt: number
    dlexAmt: number
    wthdRtnAmt: number
    exchDlex: string
    addDlexAmt: number
}

export type GoodsContInfo = {
    imgGbCd: string
    contTypCd: string
    dispSeq: string
    contFilePathNm: string
    trnfTextCont: string
}

export type GoodsDescInfo = {
    goodsDtlDesc: string
}

export type RevSummary = {
    totScr: number
    avgScr: number
    revTotCnt: number
}

export type GiftInfo = {
    aeNo: string
    addEvtTypCd: string
    aeStrDtm: string
    aeEndDtm: string
    payStrDt: string
    tmEvtYn: string
    aeDesc: string
    aeNm: string
    aeGoodsList: {
        aeFvrSeq: string
        aplyMinAmt: number
        aplyMaxAmt: number
        aeGoodsNm: string
        aeGoodsImgPath: string
    }[]
}

export type AssociationGoodsInfo = {
    goodsNo: string
    saleStatCd: string
    sortSeq: string
    goodsNm: string
    brandNm: string
    contFilePathNm: string
    salePrc: number
    aplyPrc: number
    norPrc: number
    saleRate: number
    buyrAgeLmtCd: string
    iconJson: string[]
}

export type GoodsAttInfo = {
    goodsNo: string
    attCd: string
    attVal: string
    stdCtgNo: string
    attNm: string
}

export type RelGoodsInfo = {
    goodsNo: string
    goodsNm: string
    buyrAgeLmtCd: string
    repYn: string
    sortSeq: string
}

export type GoodsItemInfo = {
    goodsNo: string
    goodsNotiLisartCd: string
    goodsNotiItemCd: string
    langCd: string
    notiItemCmt: string
    sortSeq: string
    notiItemNm: string
    goodsNotiLisartNm: string
}

export type GoodsSafeCertiHist = {
    goodsNo: string
    safeCertiGbCd: string
    safeCertiNm: string
    safeCertiNo: string
    aplyStrDt: string
    aplyEndDt: string
    safeCertiOrnNm: string
}

export type GoodsDetailInfo = {
    isPackage: boolean
    goodsBase: GoodsBase
    deliPolcBase: DeliPolcBase
    goodsContList: GoodsContInfo[]
    goodsDesc: GoodsDescInfo
    revSummary: RevSummary
    associateGoodsList: AssociationGoodsInfo[]
    goodsItemInfoList: GoodsItemInfo[]
    goodsSafeCertiHistList: GoodsSafeCertiHist[]
    goodsAttInfo: GoodsAttInfo[]
    itmNoList: string[]
} & ErrorType

export type PackageGoodsInfo = GoodsDetailInfo & {
    repGoodsBase: GoodsBase
    relGoodsInfo: RelGoodsInfo[]
}

export interface BaseDeliveryInfo {
    saleMethCd: string
    rglrDeliGoodsYn: string
    fwdidcPrarDy: string
    deliProcTypCd: string
    deliProcTypCdNm: string
    deliGoodsGbCd: string
    deliGoodsGbCdNm: string
    deliWayCd: string
    deliWayCdNm: string
    deliPsbRgnCd: string
    deliPsbRgnCdNm: string
    deliDday: string
    deliPolcNo: string
    rsvStrtDtm: string
    rsvEndDtm: string
}

export type GoodsCategoryNavItem = {
    href: string
    title: string
}

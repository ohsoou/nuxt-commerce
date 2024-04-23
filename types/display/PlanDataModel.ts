import type {GoodsSummary} from "~/types/display/GoodsSummaryDataModel";

export interface PlanInfoList {
    mkdpNo: string
    mkdpNm: string
    tmplNo: string
    brefDesc: string
    introConts: string
    pcTopYn: string
    dispSeq: string
    startDate: string
    endDate: string
    wishContYn: string
    imageList: PlanImageModel[]
}

export interface PlanListModel {
    totalCount: number
    planInfoList: PlanInfoList[]
}


export interface PlanBrandModel {
    brandNo: string
    brandNm: string
    useYn: string
    brandImgPathNm: string
    brandImgFileNm: string
    brandDescCmt: string
    schKwdNm: string
}

export interface PlanGroupModel {
    dispGrpNo: string
    dispGrpNm: string
    dispSeq: string
}

export interface PlanDetailModel {
    resultCd: string
    resultMsg: string
    mkdpNo: string
    mkdpNm: string
    tmplNo: string
    tmplFileNm: string
    startDate: string
    endDate: string
    introCont: string
    briefDescription: string
    titleHtml: string
    titleHtmlPc: string
    footerContents: string
    wishContYn: string
    pcTopYn: string
    staffYn: string
    planDivObjList: PlanDivObjList[]
    recentPlanList: PlanInfoList[]
    titleImgMovList: PlanImageModel[]
}

export interface PlanDivObjList {
    divobjNo: string
    divobjNm: string
    divobjGbCd: string
    dispSeq: string
    tmplNo: string
    textDivobjNm: string
    bnrImgPathNm: string
    htmlFileCont: string
    cpnDnldYn: string
    cpnNo: string
    cpnBnrImgPathNm: string
    goodsNo: string

    goodsList: GoodsSummary[]
}

export interface PlanImageModel {
    mkdpNo: string
    imgTypCd: string
    contGbCd: string
    bnrImgPathNm: string
}


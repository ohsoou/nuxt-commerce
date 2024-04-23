import type {
    AssociationGoodsInfo,
    DeliPolcBase,
    GiftInfo,
    GoodsAttInfo,
    GoodsBase, GoodsContInfo, GoodsDescInfo,
    GoodsDetailInfo, PackageGoodsInfo, RelGoodsInfo,
    RevSummary
} from "~/types/goods/GoodsDetailDataModel";
import type {PrGoodsItemInfo} from "~/types/goods/GoodsItemDataModel";
import type {PrGoodsSafeCertiHist} from "~/types/goods/GoodsSafeCertiHistDataModel";
import type {GoodsSummary} from "~/types/display/GoodsSummaryDataModel";
import {useFetchApi} from "~/composables/useFetchApi";
import {useCookies} from "@vueuse/integrations/useCookies";
import {paths} from "~/types/goods/GoodsApiPaths";
import {
    CustomError,
    FailAdlCertiError,
    isInstanceOfAPIError,
    NeedAdlCertiError,
    NeedLoginError,
    UnknownError
} from "~/utils/error";
import {unref} from "vue";

interface ApiGoodsContInfo {
    contTypCd: string
    imgGbCd: string
    dispSeq: string
    contFilePathNm: string
    trnfTexxtCont: string
    goodsDtlDesc: string
}

interface ApiAssociateGoodsInfo {
    goodsNo: string
    saleStatCd: string
    asctGbCd: string
    asctGoodsNo: string
    sortSeq: string
    goodsNm: string
    brandNm: string
    contFilePathNm: string
    salePrc: number
    aplyPrc: number
    norPrc: number
    saleRate: number
    buyrAgeLmtCd: string
    iconJson: string
}

interface GoodsPayload {
    prGoodsBase: GoodsBase
    etDeliPolcBase: DeliPolcBase
    prGoodsContInfo: ApiGoodsContInfo[]
    revSummaryDto: RevSummary
    prBrandMst: {
        brandNm: string
    }
    prAssocGoodsInfo: ApiAssociateGoodsInfo[]
    prGoodsItemInfo: PrGoodsItemInfo[]
    prGoodsSafeCertiHist: PrGoodsSafeCertiHist[]
    prGoodsAttInfo: GoodsAttInfo[]
    prRelGoodsInfo: {
        baseGoosNo: string
        tgtGoodsNo: string
        tgtGoodsNm: string
        buyrAgeLmtCd: string
        repYn: string
        sortSeq: string
    }[]
    prItmBase: { goodsNo: string; itmNo: string }[]
}

interface GoodsResponse {
    _code: string
    _message: string
    _httpStatus: number
    _payload: GoodsPayload
}

interface GiftGoodsNoRequestParam {
    goodsNo: string
    itmNo: string
    salePrc: number
    cnt: number
}

interface GiftRequestParam {
    ordMediaCd: string
    goodsInfo: GiftGoodsNoRequestParam[]
}

interface GiftPayload {
    aeEvtList: GiftInfo[]
}

interface GiftResponse {
    _code: string
    _payload: GiftPayload
}

interface RelGoodsDetailListPayload {
    totalCnt: number
    smryList: GoodsSummary[]
}

interface RelGoodsDetailListResponse {
    _code: string
    _payload: RelGoodsDetailListPayload
}

function setGoodsBase(orgnGoodsBase: GoodsBase, brandNm: string): GoodsBase {
    return {
        goodsNo: orgnGoodsBase.goodsNo,
        stdCtgNo: orgnGoodsBase.stdCtgNo,
        goodsCompCd: orgnGoodsBase.goodsCompCd,
        goodsTypCd: orgnGoodsBase.goodsTypCd,
        saleMethCd: orgnGoodsBase.saleMethCd,
        brandNo: orgnGoodsBase.brandNo,
        brandNm,
        safeCertiTgtYn: orgnGoodsBase.safeCertiTgtYn,
        buyrAgeLmtCd: orgnGoodsBase.buyrAgeLmtCd,
        saleStatCd: orgnGoodsBase.saleStatCd,
        buyTypCd: orgnGoodsBase.buyTypCd,
        stkMgrYn: orgnGoodsBase.stkMgrYn,
        buyQtyLmtYn: orgnGoodsBase.buyQtyLmtYn,
        minLmtQty: orgnGoodsBase.minLmtQty,
        maxLmtQty: orgnGoodsBase.maxLmtQty,
        safeStkNotiYn: orgnGoodsBase.safeStkNotiYn,
        deliProcTypCd: orgnGoodsBase.deliProcTypCd,
        deliProcTypCdNm: orgnGoodsBase.deliProcTypCdNm,
        deliGoodsGbCd: orgnGoodsBase.deliGoodsGbCd,
        deliGoodsGbCdNm: orgnGoodsBase.deliGoodsGbCdNm,
        deliWayCd: orgnGoodsBase.deliWayCd,
        deliWayCdNm: orgnGoodsBase.deliWayCdNm,
        deliPsbRgnCd: orgnGoodsBase.deliPsbRgnCd,
        deliPsbRgnCdNm: orgnGoodsBase.deliPsbRgnCdNm,
        deliDday: orgnGoodsBase.deliDday,
        deliPolcNo: orgnGoodsBase.deliPolcNo,
        bpckPsbYn: orgnGoodsBase.bpckPsbYn,
        rtnPsbYn: orgnGoodsBase.rtnPsbYn,
        exchPsbYn: orgnGoodsBase.exchPsbYn,
        hsCd: orgnGoodsBase.hsCd,
        rglrDeliGoodsYn: orgnGoodsBase.rglrDeliGoodsYn,
        szGdeUseYn: orgnGoodsBase.szGdeUseYn,
        szGdeRegMethodCd: orgnGoodsBase.szGdeRegMethodCd,
        szGdeCd: orgnGoodsBase.szGdeCd,
        szGdeConts: orgnGoodsBase.szGdeConts,
        pkgGoodsPrioRnkCd: orgnGoodsBase.pkgGoodsPrioRnkCd,
        prestNm: orgnGoodsBase.prestNm,
        langCd: orgnGoodsBase.langCd,
        goodsNm: orgnGoodsBase.goodsNm,
        modlNm: orgnGoodsBase.modlNm,
        homeNm: orgnGoodsBase.homeNm,
        mfcoNm: orgnGoodsBase.mfcoNm,
        incomNm: orgnGoodsBase.incomNm,
        manufYm: orgnGoodsBase.manufYm,
        salemnNm: orgnGoodsBase.salemnNm,
        adveWrd: orgnGoodsBase.adveWrd,
        entrNo: orgnGoodsBase.entrNo,
        entrNm: orgnGoodsBase.entrNm,
        fwdidcPrarDy: orgnGoodsBase.fwdidcPrarDy,
        rsvStrtDtm: orgnGoodsBase.rsvStrtDtm,
        rsvEndDtm: orgnGoodsBase.rsvEndDtm,
        dispCtgNo: orgnGoodsBase.dispCtgNo,
        dispCtgNm: orgnGoodsBase.dispCtgNm,
        norPrc: orgnGoodsBase.norPrc,
        supPcost: orgnGoodsBase.supPcost,
        orgSalePrc: orgnGoodsBase.orgSalePrc,
        maxBenefitAmt: orgnGoodsBase.maxBenefitAmt,
        salePrc: orgnGoodsBase.salePrc,
        goodsPrceTypCd: orgnGoodsBase.goodsPrceTypCd,
        saleRate: orgnGoodsBase.saleRate,
        milgRsrvPsbYn: orgnGoodsBase.milgRsrvPsbYn,
        gvgfPsbYn: orgnGoodsBase.gvgfPsbYn
    }
}

const getGoodsData =
    async (goodsNo, infDispCtgNoGbCd, infDispCtgNo, chlNo) => {
        const res = (await useFetchApi(
            paths.goodsDetail({ goodsNo, infDispCtgNoGbCd, infDispCtgNo, chlNo })
        )) as any
        return res
    }

export async function getGoodsDetail(
    goodsNo: string,
    infDispCtgNoGbCd: string,
    infDispCtgNo: string
): Promise<GoodsDetailInfo | PackageGoodsInfo | undefined> {
    try {
        // const chlNo = useCookies().get('chlNo')?.value || ''
        const chlNo = ''

        const {data, status} = await getGoodsData(
            goodsNo,
            infDispCtgNoGbCd,
            infDispCtgNo,
            chlNo
        )

        //@ts-ignore
        const goods: GoodsResponse = {
            _code: data.value.code,
            _message: data.value.message,
            _payload: data.value.payload
        }

        if (goods._code === '7010') {
            throw new NeedLoginError()
        }

        if (goods._code === '7060') {
            throw new NeedAdlCertiError()
        }

        if (goods._code === '7050') {
            throw new FailAdlCertiError()
        }

        if (goods._code !== '0000') {
            throw new UnknownError()
        }

        if (status.value !== 'success') {
            throw new UnknownError()
        }

        const orgnGoodsBase = goods._payload.prGoodsBase
        const orgnBrandMst = goods._payload.prBrandMst

        const goodsBase: GoodsBase = setGoodsBase(
            orgnGoodsBase,
            orgnBrandMst?.brandNm || ''
        )

        const goodsContInfoList = goods._payload.prGoodsContInfo

        let goodsContList: GoodsContInfo[] = []
        const goodsDesc: GoodsDescInfo = {
            goodsDtlDesc: ''
        }
        goodsContInfoList.forEach((item) => {
            if (item.contTypCd === '01') {
                goodsDesc.goodsDtlDesc = item.goodsDtlDesc
            } else {
                const tempContItem: GoodsContInfo = {
                    imgGbCd: item.imgGbCd,
                    contTypCd: item.contTypCd,
                    dispSeq: item.dispSeq,
                    contFilePathNm: item.contFilePathNm,
                    trnfTextCont: item.trnfTexxtCont
                }

                goodsContList.push(tempContItem)
            }
        })

        goodsContList = goodsContList.toSorted(
            (a: GoodsContInfo, b: GoodsContInfo) => {
                if (a.imgGbCd === 'M10' || b.imgGbCd === 'P10') {
                    return 1
                }
                if (b.imgGbCd === 'M10' || a.imgGbCd === 'P10') {
                    return -1
                }
                return Number(a.dispSeq) - Number(b.dispSeq)
            }
        )

        if (goods._payload.prGoodsBase.goodsCompCd === '10') {
            // 일반상품
            //@ts-ignore
            const orgnDeliPolcBase = goods._payload.etDeliPolcBase

            const deliPolcBase = {
                deliPolcNo: orgnDeliPolcBase.deliPolcNo,
                entrNo: orgnDeliPolcBase.entrNo,
                dlexTypCd: orgnDeliPolcBase.dlexTypCd,
                stdAmt: orgnDeliPolcBase.stdAmt,
                dlexAmt: orgnDeliPolcBase.dlexAmt,
                wthdRtnAmt: orgnDeliPolcBase.wthdRtnAmt,
                exchDlex: orgnDeliPolcBase.exchDlex,
                addDlexAmt: orgnDeliPolcBase.addDlexAmt
            }

            const orgnRevSummary = goods._payload.revSummaryDto
            const revSummary: RevSummary = {
                totScr: orgnRevSummary.totScr,
                avgScr: orgnRevSummary.avgScr,
                revTotCnt: orgnRevSummary.revTotCnt
            }

            const associateGoodsList: AssociationGoodsInfo[] = []
            const orgnAssociateGoodsList = goods._payload.prAssocGoodsInfo

            orgnAssociateGoodsList.forEach((item) => {
                const iconList: string[] = []
                if (item.iconJson) {
                    const tempIconList = JSON.parse(item.iconJson)
                    tempIconList.forEach((item) => {
                        iconList.push(...item.disp_icon_no)
                    })
                }
                const assocGoods: AssociationGoodsInfo = {
                    goodsNo: item.asctGoodsNo,
                    saleStatCd: item.saleStatCd,
                    sortSeq: item.sortSeq,
                    goodsNm: item.goodsNm,
                    brandNm: item.brandNm,
                    contFilePathNm: item.contFilePathNm,
                    salePrc: item.salePrc,
                    aplyPrc: item.aplyPrc,
                    norPrc: item.norPrc,
                    saleRate: item.saleRate,
                    buyrAgeLmtCd: item.buyrAgeLmtCd,
                    iconJson: iconList
                }

                associateGoodsList.push(assocGoods)
            })

            const goodsItemInfoList: PrGoodsItemInfo[] = []
            const orgnGoodsItemInfoList = goods._payload.prGoodsItemInfo

            orgnGoodsItemInfoList.forEach((item) => {
                const goodsItemInfo: PrGoodsItemInfo = {
                    goodsNo: item.goodsNo,
                    goodsNotiLisartCd: item.goodsNotiLisartCd,
                    goodsNotiItemCd: item.goodsNotiItemCd,
                    langCd: item.langCd,
                    notiItemCmt: item.notiItemCmt,
                    sortSeq: item.sortSeq,
                    notiItemNm: item.notiItemNm,
                    goodsNotiLisartNm: item.goodsNotiLisartNm
                }

                goodsItemInfoList.push(goodsItemInfo)
            })

            const goodsSafeCertiHistList: PrGoodsSafeCertiHist[] = []
            const orgnGoodsSafeCertiHistList = goods._payload.prGoodsSafeCertiHist

            orgnGoodsSafeCertiHistList.forEach((item) => {
                const goodsSafeCertiHist: PrGoodsSafeCertiHist = {
                    goodsNo: item.goodsNo,
                    safeCertiGbCd: item.safeCertiGbCd,
                    safeCertiNm: item.safeCertiNm,
                    safeCertiNo: item.safeCertiNo,
                    aplyStrDt: item.aplyStrDt,
                    aplyEndDt: item.aplyEndDt,
                    safeCertiOrnNm: item.safeCertiOrnNm
                }

                goodsSafeCertiHistList.push(goodsSafeCertiHist)
            })

            let goodsAttInfo: GoodsAttInfo[] = []
            const orgnGoodsAttInfo = goods._payload.prGoodsAttInfo

            orgnGoodsAttInfo.forEach((item) => {
                goodsAttInfo.push({
                    goodsNo: item.goodsNo,
                    attCd: item.attCd,
                    attVal: item.attVal,
                    stdCtgNo: item.stdCtgNo,
                    attNm: item.attNm
                })
            })

            goodsAttInfo = goodsAttInfo.toSorted((a, b) => {
                return Number(a.attCd) - Number(b.attCd)
            })

            const itmNoList: string[] = goods._payload.prItmBase.map((item) => {
                return item.itmNo
            })

            const allGoodsList: string[] = []

            allGoodsList.push(goodsNo)
            allGoodsList.push(
                ...associateGoodsList.map((item) => {
                    return item.goodsNo
                })
            )

            const result: GoodsDetailInfo = {
                isPackage: false,
                goodsBase,
                deliPolcBase,
                goodsContList,
                goodsDesc,
                revSummary,
                associateGoodsList,
                goodsItemInfoList,
                goodsSafeCertiHistList,
                goodsAttInfo,
                itmNoList
            }

            return result
        } else if (goods._payload.prGoodsBase.goodsCompCd === '20') {
            // 묶음상품
            let relGoodsList: RelGoodsInfo[] = []
            const orgnRelGoodsList = goods._payload.prRelGoodsInfo

            let repGoodsNo: string = ''

            orgnRelGoodsList.forEach((item) => {
                if (item.repYn.toLowerCase() === 'y') {
                    repGoodsNo = item.tgtGoodsNo
                }
                relGoodsList.push({
                    goodsNo: item.tgtGoodsNo,
                    goodsNm: item.tgtGoodsNm,
                    buyrAgeLmtCd: item.buyrAgeLmtCd,
                    repYn: item.repYn,
                    sortSeq: item.sortSeq
                })
            })

            relGoodsList = relGoodsList.toSorted((a, b) => {
                return Number(a.sortSeq) - Number(b.sortSeq)
            })

            const {data} = await useFetchApi(
                paths.goodsDetail({
                    goodsNo: repGoodsNo,
                    infDispCtgNoGbCd,
                    infDispCtgNo,
                    chlNo
                }
            )) as any

            //@ts-ignore
            const repData: GoodsResponse = {
                _payload: data.value.payload
            }

            const repGoodsBase = setGoodsBase(
                repData._payload.prGoodsBase,
                repData._payload.prBrandMst.brandNm || ''
            )

            const orgnDeliPolcBase: DeliPolcBase = repData._payload.etDeliPolcBase

            const deliPolcBase: DeliPolcBase = {
                deliPolcNo: orgnDeliPolcBase.deliPolcNo,
                entrNo: orgnDeliPolcBase.entrNo,
                dlexTypCd: orgnDeliPolcBase.dlexTypCd,
                stdAmt: orgnDeliPolcBase.stdAmt,
                dlexAmt: orgnDeliPolcBase.dlexAmt,
                wthdRtnAmt: orgnDeliPolcBase.wthdRtnAmt,
                exchDlex: orgnDeliPolcBase.exchDlex,
                addDlexAmt: orgnDeliPolcBase.addDlexAmt
            }

            const orgnRevSummary = repData._payload.revSummaryDto
            const revSummary: RevSummary = {
                totScr: orgnRevSummary.totScr,
                avgScr: orgnRevSummary.avgScr,
                revTotCnt: orgnRevSummary.revTotCnt
            }

            const itmNoList: string[] = repData._payload.prItmBase.map((item) => {
                return item.itmNo
            })

            const result: PackageGoodsInfo = {
                isPackage: true,
                goodsBase: goods._payload.prGoodsBase,
                repGoodsBase,
                deliPolcBase,
                goodsContList,
                goodsDesc,
                revSummary,
                associateGoodsList: [],
                goodsItemInfoList: [],
                goodsSafeCertiHistList: [],
                goodsAttInfo: [],
                relGoodsInfo: relGoodsList,
                itmNoList
            }

            return result
        }
    } catch (error: Error | unknown) {
        if (isInstanceOfAPIError(error)) {
            throw new CustomError(error.message, error.code, error.name)
        } else {
            const unknowError = new UnknownError()
            throw new Error(unknowError?.message, {
                cause: {
                    customErrorInfo: {
                        message: unknowError.message,
                        code: unknowError.code,
                        name: unknowError.name
                    }
                }
            })
        }
    }
}

export async function getGoodsGiftList(
    goodsNo: string,
    salePrc: number
): Promise<GiftInfo[]> {
    const request: GiftRequestParam = {
        ordMediaCd: '30',
        goodsInfo: [
            {
                goodsNo,
                itmNo: '001',
                salePrc,
                cnt: 1
            }
        ]
    }

    let gift: GiftInfo[] = []

    try {
        const res = await useFetchApi(`${paths.eventList()}`, {
            method: 'post',
            body: request
        })

        //@ts-ignore
        const data: GiftResponse = res

        if (data._code === '0000') gift = data._payload.aeEvtList
    } catch (error) {
        return []
    }
    return gift
}

export async function getRelGoodsDetailList(
    goodsNoList: string[],
    pageSize?: number,
    pageNo?: number
): Promise<GoodsSummary[]> {
    const request = {
        goodsNo: goodsNoList,
        pageSize,
        pageNo
    }

    const res = (await useFetchApi(paths.relGoodsInfoList(), {
        method: 'post',
        body: request
    }))

    //@ts-ignore
    const data: RelGoodsDetailListResponse = res

    const relGoodsInfoList: GoodsSummary[] = data._payload.smryList.map(
        (item) => {
            return {
                goodsNo: item.goodsNo,
                goodsNm: item.goodsNm,
                goodsRevCnt: item.goodsRevCnt,
                goodsRevStarscrAvgVal: item.goodsRevStarscrAvgVal,
                goodsRepImgPathNm: item.goodsRepImgPathNm,
                brandNo: item.brandNo,
                brandNm: item.brandNm,
                rcntSalePrc: item.rcntSalePrc,
                dcRate: item.dcRate,
                aplyPrc: item.aplyPrc,
                buyrAgeLmtCd: item.buyrAgeLmtCd,
                saleStatCd: item.saleStatCd,
                salePrc: item.salePrc,
                dispCtgNo: item.dispCtgNo,
                adlCertiYn: item.adlCertiYn
            }
        }
    )

    return relGoodsInfoList
}

// interface MaxDcInfoResponse {
//     _payload: OptionPrice[]
// }

export async function getMaxDcInfo(goodsNo: string) {
    try {
        const res = (await useFetchApi(`${paths.maxDcPriceWithItem(goodsNo)}`, {
            params: {
                goodsNo,
                cnt: 1
            }
        }))

        //@ts-ignore
        return res.data._payload[0]
    } catch (e) {
        return {
            goodsNo: 'error',
            itmNo: '',
            norPrc: 0,
            salePrc: 0,
            orgSalePrc: 0,
            maxBenefitAmt: 0,
            saleRate: 0
        }
    }
}

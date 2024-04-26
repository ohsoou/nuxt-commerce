import type {GoodsBase} from "~/types/goods/GoodsDetailDataModel";
import type {GoodsOptionInfo, OptionInfo, OptionPrice} from "~/types/goods/GoodsOptionDataModel";
import {useFetchApi} from "~/composables/useFetchApi";
import {goodsDtailpaths} from "~/types/goods/GoodsApiPaths";

interface GoodsOptionPayload {
    optionInfo: {
        goodsNo: string | null
        itmNo: string | null
        limtQty: number | null
        stkQty: number | null
        itmSaleStatCd: string | null
        safeStkQty: number | null
        addSalePrc: number | null
        productOption1InfoList: (OptionInfo & OptionInfoSubList)[]

    }
    prGoodsBase: GoodsBase
}
interface OptionInfoSubList {
    productOption2InfoList?: (OptionInfo & OptionInfoSubList)[]
    productOption3InfoList?: (OptionInfo & OptionInfoSubList)[]
    productOption4InfoList?: (OptionInfo & OptionInfoSubList)[]
    productOption5InfoList?: (OptionInfo & OptionInfoSubList)[]
}

interface GoodsOptionResponse {
    code: string
    message: string
    httpStatus: number
    payload: GoodsOptionPayload
}

interface RequestParams {
    langCd: string
    siteNo: string
    goodsNo: string
}

async function getOption(goodsNo: string): Promise<GoodsOptionInfo> {
    const request: RequestParams = {
        langCd: 'ko',
        siteNo: '1',
        goodsNo
    }

    const { data } = await useFetchApi<GoodsOptionResponse>(
        `${goodsDtailpaths.goodsOptionInfo()}?langCd=${request.langCd}&siteNo=${request.siteNo}&goodsNo=${request.goodsNo}`
    )

    const goodsOptionInfo: GoodsOptionInfo = {
        goodsBase: {
            goodsNo: '',
            stdCtgNo: '',
            goodsCompCd: '',
            goodsTypCd: '',
            saleMethCd: '',
            brandNo: '',
            brandNm: '',
            safeCertiTgtYn: '',
            buyrAgeLmtCd: '',
            saleStatCd: '',
            buyTypCd: '',
            stkMgrYn: '',
            buyQtyLmtYn: '',
            minLmtQty: 0,
            maxLmtQty: 0,
            safeStkNotiYn: '',
            deliProcTypCd: '',
            deliProcTypCdNm: '',
            deliGoodsGbCd: '',
            deliGoodsGbCdNm: '',
            deliWayCd: '',
            deliWayCdNm: '',
            deliPsbRgnCd: '',
            deliPsbRgnCdNm: '',
            deliDday: '',
            deliPolcNo: '',
            bpckPsbYn: '',
            rtnPsbYn: '',
            exchPsbYn: '',
            hsCd: '',
            rglrDeliGoodsYn: '',
            szGdeUseYn: '',
            szGdeRegMethodCd: '',
            szGdeCd: '',
            szGdeConts: '',
            pkgGoodsPrioRnkCd: '',
            prestNm: '',
            langCd: '',
            goodsNm: '',
            modlNm: '',
            homeNm: '',
            mfcoNm: '',
            incomNm: '',
            manufYm: '',
            salemnNm: '',
            adveWrd: '',
            entrNo: '',
            entrNm: '',
            fwdidcPrarDy: '',
            rsvStrtDtm: '',
            rsvEndDtm: '',
            dispCtgNo: '',
            dispCtgNm: '',
            norPrc: 0,
            supPcost: 0,
            orgSalePrc: 0,
            maxBenefitAmt: 0,
            salePrc: 0,
            goodsPrceTypCd: '',
            saleRate: 0,
            milgRsrvPsbYn: '',
            gvgfPsbYn: ''
        },
        options: []
    }

    if(data.value) {
        const payload = data.value.payload
        goodsOptionInfo.goodsBase = payload.prGoodsBase

        if (payload.optionInfo.itmNo && payload.optionInfo.itmSaleStatCd) {
            const temp: OptionInfo = {
                goodsNo: payload.optionInfo.goodsNo ?? '',
                optnCatNm: '',
                optnNo: '',
                optnNm: '',
                itmNo: payload.optionInfo.itmNo,
                limtQty: payload.optionInfo.limtQty ?? 0,
                stkQty: payload.optionInfo.stkQty ?? 0,
                safeStkQty: payload.optionInfo.safeStkQty ?? 0,
                itmSaleStatCd: payload.optionInfo.itmSaleStatCd,
                addSalePrc: payload.optionInfo.addSalePrc ?? 0,
                basePrc: payload.prGoodsBase.orgSalePrc ?? 0,
                imgPathNm: '',
                imgFileNm: '',
                rgbVal: '',
                nextLevelOption: []
            }

            goodsOptionInfo.options.push(temp)
        } else {
            type ResponseOptionInfo = OptionInfo & OptionInfoSubList
            const firstOptionList: ResponseOptionInfo[] =
                payload.optionInfo.productOption1InfoList ?? []
            const setOptionData = (optionList: ResponseOptionInfo[]) : OptionInfo[] => {
                return optionList.map(option => {
                    const subOptionList : ResponseOptionInfo[] =
                        option.productOption2InfoList ??
                        option.productOption3InfoList ??
                        option.productOption4InfoList ??
                        option.productOption5InfoList ?? []
                    return {
                        goodsNo: option.goodsNo,
                        optnCatNm: option.optnCatNm,
                        optnNo: option.optnNo,
                        optnNm: option.optnNm,
                        itmNo: option.itmNo,
                        limtQty: option.limtQty,
                        stkQty: option.stkQty,
                        safeStkQty: option.safeStkQty,
                        itmSaleStatCd: option.itmSaleStatCd,
                        addSalePrc: option.addSalePrc ?? 0,
                        basePrc: payload.prGoodsBase.orgSalePrc ?? 0,
                        imgPathNm: option.imgPathNm,
                        imgFileNm: option.imgFileNm,
                        rgbVal: option.rgbVal,
                        nextLevelOption: setOptionData(subOptionList)
                    } as OptionInfo
                })

            }

            goodsOptionInfo.options = setOptionData(firstOptionList)
        }
    }

    return goodsOptionInfo
}

export async function getOptionInfo(goodsNo: string): Promise<OptionInfo[]> {
    const goodsOptionInfo = await getOption(goodsNo)
    return goodsOptionInfo.options
}

export async function getBundleGoodsOptionInfo(
    goodsNo: string
): Promise<GoodsOptionInfo> {
    const goodsOptionInfo = await getOption(goodsNo)
    return goodsOptionInfo
}

export async function getOptionPrice(
    goodsNo: string,
    itmNo: string,
    cnt: number
): Promise<number> {
    try {
        const {data} = await useFetchApi(`${goodsDtailpaths.maxDcPriceWithItem(goodsNo)}`, {
            params: {
                goodsNo,
                itmNo,
                cnt
            }
        })

        //@ts-ignore
        const { payload } = data.value

        return payload[0].salePrc
    } catch (e) {
        return 0
    }
}

interface OptionItemGoodsInfo {
    buyQtyLmtYn: string
    minLmtQty: string
    maxLmtQty: string
}

interface OptionItemGoodsInfoResponse {
    _payload: OptionItemGoodsInfo[]
}

export async function getOptionItemGoodsInfo(goodsNo: string, itmNo: string) {
    const {data} = await useFetchApi(goodsDtailpaths.optionItemGoodsInfo(), {
        body: {
            goodsNo,
            itmNo
        }
    })

    //@ts-ignore
    const {payload} = data.value

    return {
        buyQtyLmtYn: payload[0].buyQtyLmtYn,
        minLmtQty: Number(payload[0].minLmtQty),
        maxLmtQty: Number(payload[0].maxLmtQty)
    }
}

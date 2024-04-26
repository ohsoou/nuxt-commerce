import { defineEventHandler } from 'h3'
import { goodsDtailpaths } from '~~/server/paths/goods/goods-detail-paths'
import type {
  AssociationGoodsInfo,
  DeliPolcBase,
  GoodsAttInfo,
  GoodsBase,
  GoodsContInfo,
  GoodsDescInfo,
  GoodsDetailInfo,
  GoodsItemInfo,
  GoodsSafeCertiHist,
  PackageGoodsInfo,
  RelGoodsInfo,
  RevSummary
} from '~/types/goods/GoodsDetailDataModel'
import type { ErrorType } from '~/types/common/Error'

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
  prGoodsItemInfo: GoodsItemInfo[]
  prGoodsSafeCertiHist: GoodsSafeCertiHist[]
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
  code: string
  message: string
  httpStatus: number
  payload: GoodsPayload
}

export default defineEventHandler(
  async (event): Promise<GoodsDetailInfo | PackageGoodsInfo | ErrorType> => {
    try {
      const goodsNo = event.context.params?.goodsNo as string

      const res = await fetch(
        goodsDtailpaths.goodsDetail({
          goodsNo,
          infDispCtgNoGbCd: '',
          infDispCtgNo: '',
          chlNo: ''
        })
      ).then((res) => {
        return res
          .json()
          .then((data) => {
            return data as GoodsResponse
          })
          .then((data) => {
            data.httpStatus = res.status
            return data
          })
      })

      if (res.code === '7010') {
        throw new Error()
      }

      if (res.code === '7060') {
        throw new Error()
      }

      if (res.code === '7050') {
        throw new Error()
      }

      if (res.code !== '0000') {
        throw new Error()
      }

      if (res.httpStatus !== 200) {
        throw new Error()
      }

      const goodsBase = res.payload.prGoodsBase
      goodsBase.brandNm = res.payload.prBrandMst.brandNm

      const goodsContList: GoodsContInfo[] = []
      const goodsDesc: GoodsDescInfo = {
        goodsDtlDesc: ''
      }

      res.payload.prGoodsContInfo.forEach((item) => {
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

      goodsContList.sort((a: GoodsContInfo, b: GoodsContInfo) => {
        if (a.imgGbCd === 'M10' || b.imgGbCd === 'P10') {
          return 1
        }
        if (b.imgGbCd === 'M10' || a.imgGbCd === 'P10') {
          return -1
        }
        return Number(a.dispSeq) - Number(b.dispSeq)
      })

      if (res.payload.prGoodsBase.goodsCompCd === '10') {
        // 일반상품
        const deliPolcBase = res.payload.etDeliPolcBase
        const revSummary = res.payload.revSummaryDto
        const associateGoodsList: AssociationGoodsInfo[] =
          res.payload.prAssocGoodsInfo.map((item) => {
            const iconList: string[] = []
            if (item.iconJson) {
              const tempIconList = JSON.parse(item.iconJson)
              // @ts-ignore
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

            return assocGoods
          })

        const goodsItemInfoList: GoodsItemInfo[] =
          res.payload.prGoodsItemInfo.map((item) => {
            const goodsItemInfo: GoodsItemInfo = {
              goodsNo: item.goodsNo,
              goodsNotiLisartCd: item.goodsNotiLisartCd,
              goodsNotiItemCd: item.goodsNotiItemCd,
              langCd: item.langCd,
              notiItemCmt: item.notiItemCmt,
              sortSeq: item.sortSeq,
              notiItemNm: item.notiItemNm,
              goodsNotiLisartNm: item.goodsNotiLisartNm
            }

            return goodsItemInfo
          })

        const goodsSafeCertiHistList: GoodsSafeCertiHist[] =
          res.payload.prGoodsSafeCertiHist.map((item) => {
            const goodsSafeCertiHist: GoodsSafeCertiHist = {
              goodsNo: item.goodsNo,
              safeCertiGbCd: item.safeCertiGbCd,
              safeCertiNm: item.safeCertiNm,
              safeCertiNo: item.safeCertiNo,
              aplyStrDt: item.aplyStrDt,
              aplyEndDt: item.aplyEndDt,
              safeCertiOrnNm: item.safeCertiOrnNm
            }

            return goodsSafeCertiHist
          })

        const goodsAttInfo: GoodsAttInfo[] = res.payload.prGoodsAttInfo.map(
          (item) => {
            return {
              goodsNo: item.goodsNo,
              attCd: item.attCd,
              attVal: item.attVal,
              stdCtgNo: item.stdCtgNo,
              attNm: item.attNm
            }
          }
        )

        const itmNoList: string[] = res.payload.prItmBase.map((item) => {
          return item.itmNo
        })

        const result: GoodsDetailInfo = {
          isPackage: false,
          code: '0000',
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
      } else if (res.payload.prGoodsBase.goodsCompCd === '20') {
        // 묶음상품
        const relGoodsList: RelGoodsInfo[] = res.payload.prRelGoodsInfo.map(
          (item) => {
            return {
              goodsNo: item.tgtGoodsNo,
              goodsNm: item.tgtGoodsNm,
              buyrAgeLmtCd: item.buyrAgeLmtCd,
              repYn: item.repYn,
              sortSeq: item.sortSeq
            }
          }
        )
        relGoodsList.sort((a, b) => {
          return Number(a.sortSeq) - Number(b.sortSeq)
        })

        const repGoodsNo: string =
          relGoodsList.find((item) => item.repYn === 'Y')?.goodsNo || ''

        const repRes = await fetch(
          goodsDtailpaths.goodsDetail({
            goodsNo: repGoodsNo,
            infDispCtgNoGbCd: '',
            infDispCtgNo: '',
            chlNo: ''
          })
        ).then((res) => {
          return res.json().then((data) => {
            return data as GoodsResponse
          })
        })

        const repGoodsBase: GoodsBase = repRes.payload.prGoodsBase
        repGoodsBase.brandNm = repRes.payload.prBrandMst.brandNm || ''

        const deliPolcBase = repRes.payload.etDeliPolcBase
        const revSummary = repRes.payload.revSummaryDto
        const itmNoList: string[] = repRes.payload.prItmBase.map((item) => {
          return item.itmNo
        })

        const result: PackageGoodsInfo = {
          isPackage: true,
          code: '0000',
          goodsBase: res.payload.prGoodsBase,
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
      } else {
        throw new Error()
      }
    } catch (e) {
      return { code: '9999' }
    }
  }
)

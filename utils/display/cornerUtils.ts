import type {Brand, Content, GoodsReview, SetInfo} from "~/types/display/ShopDataModel";
import type {GoodsSummary} from "~/types/display/GoodsSummaryDataModel";
import type {PlanInfoList} from "~/types/display/PlanDataModel";



interface ContentProps {
    /* 필요여부 */
    isRequired: boolean
    /* 최소포함개수 */
    minCnt?: number
    /* 최대포함개수 */
    maxCnt?: number
}

interface CornerContentParams {
    setList?: SetInfo[]
    props: {
        goods?: ContentProps
        review?: ContentProps
        brand?: ContentProps
        plan?: ContentProps
        html?: ContentProps
        image?: ContentProps
        text?: ContentProps
        video?: ContentProps
    }
}

/**
 * 코너대상코드 데이터
 * */
const CornerTarget = {
    11: {
        propKey: 'goods',
        key: 'productList'
    },
    12: {
        propKey: 'brand',
        key: 'brandList'
    },
    13: {
        propKey: 'review',
        key: 'productReviewList'
    },
    14: {
        propKey: 'plan',
        key: 'planShopList'
    },
    21: {
        propKey: 'html',
        key: 'htmlList',
        filterFn: (content: Content): boolean => {
            return !!content.htmlFileCont
        }
    },
    22: {
        propKey: 'image',
        key: 'imageList',
        filterFn: (content: Content): boolean => {
            return !!content.contFileNm && !!content.contTitleNm
        }
    },
    23: {
        propKey: 'text',
        key: 'textList',
        filterFn: (content: Content): boolean => {
            return !!content.contTitleNm && !!content.movFrmeCd
        }
    },
    24: {
        propKey: 'video',
        key: 'videoList',
        filterFn: (content: Content): boolean => {
            return !!content.contFileNm && !!content.contTitleNm
        }
    }
}

/**
 * 코너 콘텐츠 반환
 * */
export const getCornerContent = ({
                                     setList = [],
                                     props
                                 }: CornerContentParams) => {
    const setCondition = (setInfo: SetInfo) => setInfo.contentInfoList && setInfo.contentInfoList.length > 0

    const contentList = setList?.filter(setCondition)?.map((setInfo) => {
        const data: any = {}
        setInfo.contentInfoList?.forEach((contentInfo) => {// @ts-ignore
            const target = CornerTarget[contentInfo.conrTgtCd]
            // @ts-ignore
            const prop = props[target.propKey] // 코너대상코드 해당 prop


            // prop 존재 시에만 콘텐츠 세팅
            if (prop) {
                // @ts-ignore
                let contents = contentInfo[target.key] ?? [] // 코너대상코드 해당 contents

                // 상세 유효성 검증
                if (target.filterFn) {
                    contents = contents.filter(target.filterFn)
                }

                // 최소 노출 개수 검증
                if (contents.length >= (prop.minCnt ?? 1)) {
                    data.dispSetSeq = contentInfo.dispSetSeq

                    // 최대 노출 개수 적용
                    data[target.key] = getMaxContent(prop.maxCnt, contents)
                }

            }
        })
        return data
    })
    return contentList
}

/**
 * 최대 노출값 기준 콘텐츠 반환
 * */
const getMaxContent = (
    maxCnt?: number,
    data?: GoodsSummary[] | Brand[] | GoodsReview[] | PlanInfoList[] | Content[]
) => {
    return maxCnt ? data?.slice(0, maxCnt) : data
}

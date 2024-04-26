import { defineEventHandler, getQuery } from 'h3'
import { planApiPaths } from '~/server/paths/display/plan-api-paths'
import type {
  PlanDivObjList,
  PlanDivObjResponse
} from '~/types/display/plan-types'
import type { ErrorType } from '~/types/common/error'

export default defineEventHandler(
  async (event): Promise<PlanDivObjList | ErrorType> => {
    try {
      const query = getQuery(event)
      const data = await fetch(
        planApiPaths.planGoodsInfoPath({
          mkdpNo: query.mkdpNo?.toString() || '',
          divobjNo: query.divobjNo?.toString() || '',
          sort: query.sort?.toString() || ''
        })
      ).then((res) => {
        return res.json().then((data): PlanDivObjResponse => {
          return { planDivObjList: data, code: '' }
        })
      })

      return data
    } catch (e) {
      return { code: 'error' }
    }
  }
)

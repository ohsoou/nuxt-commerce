import { defineEventHandler } from 'h3'
import { planApiPaths } from '~~/server/paths/display/plan-api-paths'
import type { PlanBrand, PlanBrandResponse } from '~~/types/display/plan-types'

export default defineEventHandler(async () => {
  try {
    const data = await fetch(planApiPaths.planBrandPath()).then((res) => {
      return res.json().then((data) => {
        return data as PlanBrand[]
      })
    })

    const res: PlanBrandResponse = {
      brandList: data,
      code: ''
    }

    return res
  } catch (e) {
    return { code: 'error' }
  }
})

import { defineEventHandler } from 'h3'
import { planApiPaths } from '~~/server/paths/display/plan-api-paths'
import type { PlanGroup } from '~~/types/display/plan-types'

export default defineEventHandler(async () => {
  try {
    const res = await fetch(planApiPaths.planGroupPath()).then((res) => {
      return res.json().then((data) => {
        return data as PlanGroup[]
      })
    })

    return res
  } catch (e) {
    return ''
  }
})

import { defineEventHandler } from 'h3'
import type { ErrorType } from '~/types/common/error'
import { planApiPaths } from '~/server/paths/display/plan-api-paths'
import type { IconData, IconResponse } from '~/types/display/icon-types'

export default defineEventHandler(
  async (): Promise<IconResponse | ErrorType> => {
    try {
      const data = await fetch(planApiPaths.planIconPath()).then((res) => {
        return res.json().then((data) => {
          return data as IconData[]
        })
      })
      console.log('::api call operated::')

      return {
        iconList: data,
        code: ''
      }
    } catch (e) {
      return { code: 'error' }
    }
  }
)

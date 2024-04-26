export const planApiPaths = {
  planBrandPath() {
    return 'https://gw-dev.x2bee.com/api/display/v1/plan/brand'
  },
  planGroupPath() {
    return 'https://gw-dev.x2bee.com/api/display/v1/plan/group'
  },
  planGoodsInfoPath({
    mkdpNo,
    divobjNo,
    sort
  }: {
    mkdpNo: string
    divobjNo: string
    sort: string
  }) {
    return `https://gw-dev.x2bee.com/api/display/v1/plan/planGoodsInfo?mkdpNo=${mkdpNo}&dispMediaCd=20&divobjNo=${divobjNo}&sort=${sort}`
  },
  planIconPath() {
    return 'https://gw-dev.x2bee.com/api/display/v1/icon?disMediaCd=99'
  }
}

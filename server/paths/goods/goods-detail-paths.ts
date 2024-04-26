type GoodsDetailProps = {
  goodsNo: string
  infDispCtgNoGbCd: string
  infDispCtgNo: string
  chlNo: string
}

export const goodsDtailpaths = {
  goodsDetail({
    goodsNo,
    infDispCtgNoGbCd,
    infDispCtgNo,
    chlNo
  }: GoodsDetailProps) {
    return `https://gw-dev.x2bee.com/api/goods/v1/detail/goodsDetail?goodsNo=${goodsNo}&infDispCtgNoGbCd=${infDispCtgNoGbCd}&infDispCtgNo=${infDispCtgNo}&chlNo=${chlNo}`
  }
}

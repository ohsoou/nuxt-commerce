<script setup lang="ts">
interface GoodsDetailPurchaseButtonsProps {
  isSoldOut: boolean
  rglrDeliGoodsYn: string
  gvgfPsbYn: string
  className?: string
  openOptionSelectPopup: (
      type: 'gift' | 'regular' | 'buy' | 'restock'
  ) => void
}

const {
  isSoldOut,
  rglrDeliGoodsYn,
  gvgfPsbYn,
  className,
  openOptionSelectPopup
} = defineProps<GoodsDetailPurchaseButtonsProps>()

const isPossible = (possible: string) => possible.toUpperCase() === 'Y'
const onClickButton = (e: any) =>
  openOptionSelectPopup(e.target.value)

</script>

<template>
  <q-btn-group
      :class="`bottom-fixed ${className}`"
      type="column"
      size="full"
  >
    <template v-if="!isSoldOut">
      <button
          v-if="isPossible(gvgfPsbYn)"
          variant="border"
          size="xxl"
          value="gift"
          @click="onClickButton"
      >선물하기</button>
      <button
          v-if="isPossible(rglrDeliGoodsYn)"
          variant="border"
          size="xxl"
          value="regular"
          @click="onClickButton"
      >정기주문</button>
      <button
          variant="bgcolor"
          size="xxl"
          value="buy"
          @click="onClickButton"
      >구매하기</button>
    </template>
    <template v-else>
      <q-btn
          variant="bgcolor"
          size="xxl"
          value="restock"
          @click="onClickButton"
      >재입고알림</q-btn>
    </template>
  </q-btn-group>

</template>

<style scoped>

</style>
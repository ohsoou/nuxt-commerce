<script setup lang="ts">

import s3Image from "~/utils/commonUtils";
import {ref} from "vue";
import type {OptionInfo, SelectOption} from "~/types/goods/GoodsOptionDataModel";

const {optionList} = defineProps<{ optionList: OptionInfo[] }>()

const selectedOption = ref<OptionInfo | null>(null)
const selectCategoryTitle = optionList?.at(0)?.optnCatNm ?? ''
const isSoldOutItem = (item: OptionInfo) => item.itmSaleStatCd === '20'
</script>

<template>
  <q-select
      v-model="selectedOption"
      :options="optionList"
      :label="selectCategoryTitle"
      :option-label="(option:OptionInfo) => option.optnNm"
      :option-value="(option:OptionInfo) => option.optnNo"
  >
    <template #selected>
      <div class="option-inner-box" v-if="selectedOption">
        <span v-if="selectedOption.imgPathNm" class="select-option-color"
              :style="{'background-image': `url(${s3Image({ src: selectedOption.imgPathNm })})`}"></span>

        <span v-if="!selectedOption.imgPathNm && selectedOption.rgbVal"
              class="select-option-color"
              :style="{ 'background-color': selectedOption.rgbVal }"
        ></span>
        {{ selectedOption.optnNm }}
        <span v-if="isSoldOutItem(selectedOption)" class="select-option-status">품절</span>
      </div>
    </template>
    <template #option="scope">
      <div class="option-inner-box" v-bind="scope.itemProps">
        <span v-if="scope.opt.imgPathNm" class="select-option-color"
              :style="{'background-image': `url(${s3Image({ src: scope.opt.imgPathNm })})`}"></span>

        <span v-if="!scope.opt.imgPathNm && scope.opt.rgbVal"
              class="select-option-color"
              :style="{ 'background-color': scope.opt.rgbVal }"
        ></span>
        {{ scope.opt.optnNm }}
        <span v-if="isSoldOutItem(scope.opt)" class="select-option-status">품절</span>
      </div>
    </template>

  </q-select>
  <template v-if="selectedOption?.nextLevelOption && selectedOption.nextLevelOption.length > 0">
    <goods-option-select :option-list="selectedOption.nextLevelOption"/>
  </template>
</template>


<style scoped>
.select-option-color {
  @apply size-5 mr-3 inline-block;
}
</style>
<script setup lang="ts">
import DisplayCornerAccountApi from "~/api/display/DisplayCornerAccountApi";
import {getCornerContent} from "~/utils/display/cornerUtils";
import type {Content} from "~/types/display/ShopDataModel";

const GNB_ACCOUNT_ID = 'gnb'

const { setList } = await DisplayCornerAccountApi({accountId:GNB_ACCOUNT_ID})

const contentInfoList = getCornerContent({
  setList: setList ?? [],
  props: { text: { isRequired: true } }
})
const { textList } = contentInfoList?.at(0) ?? {}
const navContentList = textList as Content[]
</script>

<template>
    <q-route-tab v-for="(gnb, index) in navContentList" :name="gnb.contTitleNm" :label="gnb.contTitleNm" :to="gnb.linkUrlAddr"/>
</template>

<style scoped>

</style>
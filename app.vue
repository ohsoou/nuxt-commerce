<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import {useCategoryStore} from "~/stores/Category";
import {callOnce} from "#app/composables/once";

const {fetchCategory} = useCategoryStore()
await callOnce(fetchCategory)
</script>
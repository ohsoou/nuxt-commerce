<script setup lang="ts">

import Logo from "~/components/common/logo.vue";
import Gnb from "~/components/common/gnb.vue";
import CategoryMenu from "~/components/common/CategoryMenu.vue";
</script>

<template>
  <q-header elevated >
    <q-toolbar>
      <CategoryMenu/>
      <Logo/>
      <q-space/>
      <span><NuxtLink to="/member/login">로그인</NuxtLink></span>
    </q-toolbar>

    <q-tabs>
      <Gnb/>
    </q-tabs>
  </q-header>
</template>

<style scoped>

</style>
<script setup lang="ts">
import Footer from "~/components/common/Footer.vue";
import Header from "~/components/common/Header.vue";
</script>
<template>
  <div>
    <q-layout view="lHh lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
      <Header/>
      <Footer/>

      <q-page-container>
        <q-page class="q-pa-md">
          <slot/>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<style scoped>
.q-layout__section--marginal {
  background-color: #fff;
  color: var(--q-primary);
}
</style>
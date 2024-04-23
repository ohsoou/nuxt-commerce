<script setup lang="ts">

const onSubmit = () => {}
const onReset = () => {}
</script>

<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
    >
      <q-input
          filled
          label="ID  *"
          hint="Name and surname"
      />

      <q-input
          filled
          type="password"
          label="Password *"
      />


      <div>
        <q-btn label="'로그인'" type="submit" color="primary"/>
        <q-btn label="'회원가입'" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<style scoped>

</style>
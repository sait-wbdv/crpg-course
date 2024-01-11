<template>
  <header class="flex justify-between mt-4 px-8">
    <div>
      Logo<span v-if="user">| {{ user.email }}</span>
    </div>
    <nav><ul></ul></nav>
    <div>
      <LogoutButton v-if="user" />
      <div v-else>
        <NuxtLink to="login" class="px-4 py-2 mx-2 bg-orange-500 rounded-md"
          >Login</NuxtLink
        >
        <NuxtLink to="register" class="px-4 py-2 mx-2 bg-blue-500 rounded-md"
          >Sign Up</NuxtLink
        >
      </div>
    </div>
  </header>
</template>

<script setup>
const user = useSupabaseUser();
</script>

<style lang="scss" scoped></style>

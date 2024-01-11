<template>
  <form @submit.prevent="signUp">
    <label for="email" class="block my-4">
      Email:
      <input type="email" v-model="email" />
    </label>
    <label for="password" class="block my-4">
      Password:
      <input type="password" v-model="password" />
    </label>
    <button @click="signUp">Sign Up</button>
  </form>
</template>

<script setup>
const client = useSupabaseClient();
const email = ref("");
const password = ref(null);
const errorMsg = ref(null);
const successMsg = ref(null);
async function signUp() {
  try {
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        emailRedirectTo: "http://localhost:3000/confirm",
      },
      data: {
        user_name: email.value,
      },
    });
    if (error) throw error;
    successMsg.value = "Check email to confirm account";
  } catch (error) {
    console.error(error);
  }
}
</script>

<style lang="scss" scoped></style>

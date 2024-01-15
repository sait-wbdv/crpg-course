<script setup lang="ts">
definePageMeta({
  /*
  middleware: [
    function (to, from) {
      const user = useSupabaseUser();
      if (!user.value) {
        return;
      }
      return navigateTo("/");
    },
  ],
  */
});
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");
const user = useSupabaseUser();
const signIn = async () => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
  } catch (error) {
    console.error(error);
  }
};
const signInWithGoogle = async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) throw error;
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <main>
    <section class="my-4">
      <label for="email" class="block my-2">
        email
        <input type="email" v-model="email" />
      </label>
      <label for="password" class="block my-2">
        password
        <input type="password" v-model="password" />
      </label>

      <button @click="signIn" class="bg-blue-500 p-4">
        Sign In with E-Mail
      </button>
    </section>
    <section class="my-4">
      <header class="my-2 mx-auto">
        <h2 class="text-4xl">Sign in with our supported providers</h2>
      </header>
      <button @click="signInWithGoogle" class="bg-amber-500 p-4">
        Sign in with Google
      </button>
    </section>
    <section class="my-4">
      <header class="my-2 mx-auto">
        <h2 class="text-4xl">Authenticated user info</h2>
      </header>
      <ul>
        <li v-for="userDetail in user">
          {{ userDetail }}
        </li>
      </ul>
    </section>
  </main>
</template>

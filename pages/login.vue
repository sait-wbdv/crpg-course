<script setup lang="ts">
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
    <div class="my-4">
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
    </div>
    <div>
      <button @click="signInWithGoogle" class="bg-amber-500 p-4">
        Sign in with Google
      </button>
    </div>
    <div>
      <p>{{ user }}</p>
    </div>
  </main>
</template>

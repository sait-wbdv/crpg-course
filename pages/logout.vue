<template>
  <div>
    <button @click="logout">Sign out</button>
    <p>{{ user }}</p>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logout = () => {
  try {
    const { error } = supabase.auth.signOut();
    if (error) {
      throw error;
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <button @click="logout" class="bg-blue-500 p-4 rounded-md">Sign out</button>
</template>

<script setup>
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

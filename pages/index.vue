<script setup>
// set this up to be more maintainable
definePageMeta({
  middleware: [
    function (to, from) {
      const user = useSupabaseUser();
      if (user.value) {
        return;
      }
      return navigateTo("/login");
    },
  ],
});
</script>
<template>
  <main>
    <header>
      <h1>CRPG 206</h1>
      <p>Winter 2024</p>
    </header>
    <section>
      <header>
        <h2>Course Calendar</h2>
      </header>
      <div></div>
    </section>
  </main>
</template>

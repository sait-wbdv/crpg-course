<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
<template>
  <main>
    <header>
      <h1>Employee</h1>
    </header>
    <div>display information about each employee</div>
  </main>
</template>

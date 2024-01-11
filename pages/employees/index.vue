<template>
  <main>
    <header>
      <h1>Employee List</h1>
      <p>This page will show the list of employees for authenticated users</p>
    </header>
    <div>
      <ul>
        <li v-for="employee in employees" :key="employee.id">
          loop through the api to generate links to all the employee pages
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
const { users } = await useFetch("/api/users");
const { employees } = await useFetch("/api/employees");
console.log(`users: ${users}`);
console.log(employees);
</script>

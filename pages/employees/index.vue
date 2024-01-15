<template>
  <main>
    <header>
      <h1>Employee List</h1>
      <p>This page will show the list of employees for authenticated users</p>
    </header>
    <div>
      <ul>
        <!-- currently this pulls from the table in the api. to be changed to supabase -->
        <li v-for="employee in employees" :key="employee.id">
          {{ employee.LAST_NAME }} {{ employee.FIRST_NAME }}
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
const employees = ref([]);
async function getEmployees() {
  const { data } = await useSupabaseClient().from("Employees").select();
  employees.value = data;
}
onMounted(() => {
  getEmployees();
});
console.log(employees);
</script>

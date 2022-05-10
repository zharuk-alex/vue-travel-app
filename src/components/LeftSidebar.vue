<template>
  <ul>
    <li><router-link :to="{ name: 'protected' }">Dashboard</router-link></li>
    <li><router-link :to="{ name: 'invoices' }">Invoice</router-link></li>
  </ul>
</template>

<script>
</script>

<style scoped>
ul {
  background: transparent;
  padding: 10px;
  margin-right: 20px;
  list-style: none;
  border-right: 2px grey solid;
}
li {
  margin: 10px 10px 20px;
}
</style>
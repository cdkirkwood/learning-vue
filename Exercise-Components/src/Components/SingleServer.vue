<template>
  <li @click="selectServer(server)">
    <p>Server #{{ server.id }}</p>
  </li>
</template>

<script>
export default {
  props: ['server', 'selectServer']
}
</script>


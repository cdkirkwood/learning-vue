<template>
  <div>
    <p>Server #{{ server.id }}</p>
    <p>Status: {{ server.status }}</p>
  </div>
</template>

<script>
export default {
  props: ['server']
}
</script>


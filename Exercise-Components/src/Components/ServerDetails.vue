<template>
  <div class="col-xs-12 col-sm-6" v-if="!selectedServer">
      <p>Please Select a Server</p>
  </div>
  <div class="col-xs-12 col-sm-6" v-else>
      <p>Server # {{ selectedServer.id }}</p>
      <p>Status {{ selectedServer.status }}</p>
      <button @click="statusToNormal">Change Status</button>
  </div>
</template>

<script>
import { eventBus } from '../main'
export default {
  data: () => ({
    selectedServer: null
  }),
  methods: {
    statusToNormal() {
      this.selectedServer.status = 'Normal'
    }
  },
  created() {
    eventBus.$on('newServerSelected', server => {
      this.selectedServer = server
    })
  }
}
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>

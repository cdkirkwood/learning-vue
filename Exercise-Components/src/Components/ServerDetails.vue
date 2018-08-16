<template>
  <div class="col-xs-12 col-sm-6" v-if="!selectedServer">
      <p>Server Details are currently not updated</p>
  </div>
  <div class="col-xs-12 col-sm-6" v-else>
      <SingleServer :server="selectedServer" />
  </div>
</template>

<script>
import { eventBus } from '../main'
import SingleServer from './SingleServer.vue'
export default {
  data: () => ({
    selectedServer: null
  }),
  created() {
    eventBus.$on('newServerSelected', server => {
      this.selectedServer = server
    })
  },
  components: {
    SingleServer
  }
}
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>

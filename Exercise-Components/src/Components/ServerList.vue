<template>
   <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
                <SingleServer 
                    class="list-group-item"
                    v-for="server in servers"
                    :key="server.id"
                    :server="server" 
                    style="cursor: pointer"
                    :selectServer="selectServer"
                    />
        </ul>
    </div>
</template>

<script>
import SingleServer from "./SingleServer.vue";
import { eventBus } from "../main";
export default {
  data: () => ({
    servers: [
      { id: 1, status: "Normal" },
      { id: 2, status: "Normal" },
      { id: 3, status: "Critical" },
      { id: 4, status: "Normal" },
      { id: 5, status: "Unknown" }
    ],
    selectedServer: null
  }),
  methods: {
    selectServer(server) {
      this.selectedServer = server;
      eventBus.$emit("newServerSelected", this.selectedServer);
    }
  },
  components: {
    SingleServer
  }
};
</script>


<style scoped>
div {
  border: 1px solid blue;
}
</style>


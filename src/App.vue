<template>
  <v-app>
    <AppBarComponent/>
    <v-main class="grey lighten-3">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import AppBarComponent from "@/components/AppBarComponent.vue"
import TaskService from "@/services/TaskService"


@Component({
  components: { AppBarComponent }
})

export default class App extends Vue {
  created() {
    TaskService.setTaskStorage()
  }
}

</script>

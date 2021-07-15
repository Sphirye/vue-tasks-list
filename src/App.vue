<template>
  <v-app>
    <AppBarComponent/>
    <v-main class="grey lighten-3">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import NavigationDrawerComponent from "@/components/NavigationDrawerComponent.vue"
import AppBarComponent from "@/components/AppBarComponent.vue"

@Component({
  components: { NavigationDrawerComponent, AppBarComponent }
})

export default class App extends Vue {
}

</script>

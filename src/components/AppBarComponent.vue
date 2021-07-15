<template>
  <v-app-bar fixed app elevation="2">

      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>My Task List</v-toolbar-title>

      <v-spacer/>

      <v-btn icon>
          <v-icon>fas fa-search</v-icon>
      </v-btn>

      <v-btn icon>
          <v-icon>far fa-bell</v-icon>
      </v-btn>

      <v-avatar>
          <v-img src="@/assets/garfield.jpg"></v-img>
      </v-avatar>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import DatePickerComponent from "@/components/DatePickerComponent.vue";

@Component({
  components: { DatePickerComponent }
})

export default class NavigationDrawerComponent extends Vue {
  drawer = false
  mini = false
}

</script>

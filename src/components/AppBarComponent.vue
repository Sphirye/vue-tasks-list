<template>
  <div>

    <v-overlay opacity="0" :value="drawer" z-index="4"></v-overlay>

    <v-app-bar clipped-left app elevation="2">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="font-weight-black text-h5">My Task List</v-toolbar-title>

        <v-spacer/>

        <v-btn class="mx-2" icon>
            <v-icon>fas fa-search</v-icon>
        </v-btn>

        <v-btn class="mx-2" icon>
            <v-icon>far fa-bell</v-icon>
        </v-btn>

        <v-avatar>
            <v-img src="@/assets/garfield.jpg"></v-img>
        </v-avatar>
    </v-app-bar>

    <v-navigation-drawer temporary app clipped hide-overlay :style="{ top: $vuetify.application.top + 'px', zIndex: 4 }" v-model="drawer" width="250px" height="100%" class="grey lighten-3">
      <v-list>
        <v-list-item v-for="(item, key) in items" @click="filter = item.value" :key="key">
	  			<v-list-item-content>
	  				<div>
	  					<v-icon :class='`${item.color} pa-2 rounded`' color="white">{{item.icon}}</v-icon>
	  					<span class="mx-3 font-weight-black text-body-2">{{item.text}}</span>
	  				</div>
	  			</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import DatePickerComponent from "@/components/DatePickerComponent.vue";
import TaskModule from "@/store/TaskModule";
import { getModule } from "vuex-module-decorators";

@Component({
  components: { DatePickerComponent }
})

export default class NavigationDrawerComponent extends Vue {

  taskModule: TaskModule = getModule(TaskModule)

  drawer = false
  items = [
		{ icon: "fas fa-th-large", color: "indigo", text: "All Tasks", value: undefined },
		{ icon: "far fa-user", color: "orange", text: "Personal", value: "Personal"},
		{ icon: "fas fa-book", color: "red", text: "School", value: "School" },
		{ icon: "fas fa-medkit", color: "green", text: "Work", value: "Work" }
  ]

  get filter() {
    return this.taskModule.filter!
  }

  set filter(f: string) {
    this.taskModule.setFilter(f)
  }

}

</script>

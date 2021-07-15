<template>
	<v-navigation-drawer fixed hide-overlay v-model="drawer" width="250px" height="100%" class="grey lighten-3">

    <v-list rounded>
			<v-list-item v-for="(item, key) in items" @click="changeFilter(item.value)" :key="key">
				<v-list-item-content>
					<div>
						<v-icon :class='`${item.color} pa-2 rounded`' color="white">{{item.icon}}</v-icon>
						<span class="mx-3 font-weight-black text-body-2">{{item.text}}</span>
					</div>
				</v-list-item-content>
			</v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import { getModule } from "vuex-module-decorators"
import TaskModule from "@/store/TaskModule";

@Component({ components: { } })

export default class LeftNavigationDrawerComponent extends Vue {

	@Prop() drawer!: boolean
	

	items = [
		{ icon: "fas fa-th-large", color: "indigo", text: "All Tasks", value: undefined },
		{ icon: "far fa-user", color: "orange", text: "Personal", value: "Personal"},
		{ icon: "fas fa-book", color: "red", text: "School", value: "School" },
		{ icon: "fas fa-medkit", color: "green", text: "Work", value: "Work" }
	]

	@Watch('drawer') 
	onDrawerChanged() {
		console.log(this.drawer)
	}
}

</script>

<template>
  <v-container class="mb-12">
    <v-row align="center" justify="center">
      <v-col cols="10" sm="8" md="6">

        <span class="font-weight-black text-h4">New Task</span>

        <div class="mt-8 mb-8">
        	<span class="font-weight-black text-h6 mx-8">Task name</span>
          <v-text-field :value="title" @change="t => title = t" hide-details="true" rounded class="rounded-xl elevation-5 white pa-4 ma-2" label="What are you going to do?"></v-text-field>
        </div>

				<div class="my-8">
        	<span class="font-weight-black text-h6 mx-8">Description</span>
          <v-text-field :value="description" @change="d => description = d" hide-details="true" rounded class="rounded-xl elevation-5 white pa-4 ma-2" label="Add a description"></v-text-field>
        </div>

				<div class="my-8">
        	<span class="font-weight-black text-h6 mx-8">Collection</span>

          <v-menu offset-y rounded="xl" transition="slide-y-transition">
						<template v-slot:activator="{ on, attrs }">
							<v-card rounded="xl" class="elevation-5 pa-2 ma-2" v-bind="attrs" v-on="on">
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title>{{collection == "" ? "Select collection" : collection}}</v-list-item-title>
									</v-list-item-content>
									<v-list-item-icon>
										<v-icon color="grey darken-4">fas fa-chevron-down</v-icon>
									</v-list-item-icon>
								</v-list-item>

							</v-card>
						</template>

							<v-list rounded>
								<v-list>
									<v-list-item-group>

										<v-list-item v-for="(collection, key) in collectionList" @click="setCollection(collection.value)" :key="key">
											<v-list-item-content>
												<span>{{collection.title}}</span>
											</v-list-item-content>
										</v-list-item>

									</v-list-item-group>
								</v-list>
							</v-list>
					</v-menu>
        </div>

				<div class="my-8">
        	<span class="font-weight-black text-h6 mx-8">Date</span>
	
					<v-menu offset-y transition="slide-y-transition">
						<template v-slot:activator="{ on, attrs }">
							<v-card rounded="xl" class="elevation-5 pa-2 ma-2" v-bind="attrs" v-on="on">
								<v-list-item two-line>
									<v-list-item-content>
										<v-list-item-title>Select a date for your task</v-list-item-title>
										<v-list-item-subtitle>{{datePicker}}</v-list-item-subtitle>
									</v-list-item-content>
									<v-list-item-icon>
										<v-icon color="grey darken-4">far fa-calendar</v-icon>
									</v-list-item-icon>
								</v-list-item>
							</v-card>
						</template>

							<v-list>
								<v-list-item two-line>
									<v-list-item-content>
										<v-date-picker v-model="datePicker"></v-date-picker>
									</v-list-item-content>
								</v-list-item>
							</v-list>
					</v-menu>
        </div>

				<div class="my-8">
        	<span class="font-weight-black text-h6 mx-8">Time</span>
					<v-card rounded="xl" class="elevation-5 pa-2 ma-2">
						<v-list-item>
							<v-list-item-content>
								<v-time-picker v-model="timePicker" color="grey darken-3" ampm-in-title format="ampm" full-width></v-time-picker>
							</v-list-item-content>
						</v-list-item>
					</v-card>
        </div>

				<v-row>
					<v-spacer/>
					<v-btn class="mx-8 blue white--text py-8 rounded-xl" depressed @click="addTask()"><v-icon class="mx-3">far fa-save</v-icon>Save Task</v-btn>
				</v-row>
      </v-col>
			
    </v-row>

		<v-row>
		</v-row>

  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import DateService from "@/services/DateService"
import TaskService from "@/services/TaskService"


@Component({
  components: { }
})

export default class NewTask extends Vue {

	collectionList = [
		{ title: "Personal", value: "personal" },
		{ title: "School", value: "school" },
		{ title: "Work", value: "work" }
	]

	datePicker = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
	timePicker = ""

	title: string = ""
	description: string= ""
	collection: string = ""

	hour: string = ""
	minute: string = "" 
	meridiem: string = ""

	setCollection(collection: string) {
		this.collection = collection
	}

	addTask() {
		let newTask: any = {
			title: this.title,
			description: this.description,
			collection: this.collection,
			date: DateService.convertDateToObject(this.datePicker),
			time: DateService.convertTimeToTobject(this.timePicker)
		}
		TaskService.addTask(newTask)
		this.$router.push("/")
	}
}
</script>

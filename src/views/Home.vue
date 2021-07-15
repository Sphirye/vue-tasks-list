<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <span class="font-weight-black display-1">All for today - {{formatedDate}}</span>
        <TaskComponent class="my-3" v-for="(task, key) in tasks" :task="task" :key="key"/>
      </v-col>
    </v-row>

    <v-row>
      <v-spacer/>
      <v-btn fab class="info mr-12" x-large elevation="2">
        <v-icon>fas fa-plus</v-icon>
      </v-btn>
    </v-row>

    <NavigationDrawerComponent v-on:onPickerChanged=onPickerChanged />    

  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import NavigationDrawerComponent from "@/components/NavigationDrawerComponent.vue"
import TaskComponent from "@/components/TaskComponent.vue"
import Tasks from "@/assets/Tasks.json"
import DateService from "@/services/DateService"

@Component({
  components: { TaskComponent, NavigationDrawerComponent }
})

export default class Home extends Vue {

  pickedDate = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
  formatedDate: string = ""
  tasks = Tasks

  created() {
    this.refresh()
  }

  refresh() {
    console.log(Tasks)
    this.formatedDate = DateService.formatDisplayDate(this.pickedDate)
    //this.tasks.splice(0, this.tasks.length)
    for(let task of Tasks) {
    }
  }

  getMonthNameByNumber(number: number) {
    return DateService.getMonthNameByNumber(number)
  }

  onPickerChanged(newPickedDate: any) {
    this.pickedDate = newPickedDate
    this.refresh()
  }

}

</script>

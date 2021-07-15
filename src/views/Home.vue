<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="10" sm="8" md="6">
        <span class="font-weight-black display-1"> 
          {{ taskFilter == null ? "All" : taskFilter }} {{today == pickedDate ? "for today -" + formatedDate : " - " + formatedDate}}
        </span>

        <TaskComponent class="my-3" v-for="(task, key) in tasks" :task="task" :key="key"/>
        <div v-if="tasks.length == 0">
          Nothing to show here.
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-spacer/>

      <v-btn fab class="info mr-12" @click="$router.push(`add`).catch((err) => {})" x-large elevation="2">
        <v-icon>fas fa-plus</v-icon>
      </v-btn>
      
    </v-row>

    <RightNavigationDrawerComponent v-on:onPickerChanged=onPickerChanged />    

  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import RightNavigationDrawerComponent from "@/components/RightNavigationDrawerComponent.vue"
import TaskComponent from "@/components/TaskComponent.vue"
import Tasks from "@/assets/Tasks.json"
import DateService from "@/services/DateService"
import TaskModule from "@/store/TaskModule"
import { getModule } from "vuex-module-decorators"

@Component({
  components: { TaskComponent, RightNavigationDrawerComponent }
})

export default class Home extends Vue {

  today: string = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
  pickedDate = this.today
  formatedDate: string = ""
  tasks: Array<any> = []

  taskModule: TaskModule = getModule(TaskModule)

  get taskFilter() {
    return this.taskModule.filter!
  }

  created() {
    this.refresh()
  }

  refresh() {
    let tasks: Array<any> = JSON.parse(localStorage.getItem("tasks")!)

    this.formatedDate = DateService.formatDisplayDate(this.pickedDate)
    this.tasks.splice(0, this.tasks.length)

    let compareDate = DateService.convertDateToObject(this.pickedDate)

    tasks.forEach(task => {
      console.log(task)
      if ((task.date.day == compareDate.day.toString()) && (task.date.month == compareDate.month.toString()) && (task.date.year == compareDate.year.toString())) {
          
        if (this.taskFilter != null) {
          if (task.collection == this.taskFilter.toLowerCase()) {
            this.tasks.push(task)
          }
        }

        if (this.taskFilter == null) {
          this.tasks.push(task) 
        }
      }
    })

  }

  getMonthNameByNumber(number: number) {
    return DateService.getMonthNameByNumber(number)
  }

  onPickerChanged(newPickedDate: any) {
    this.pickedDate = newPickedDate
    this.refresh()
  }

  @Watch('taskFilter')
  onTaskFilterChanged() {
    this.refresh()
  }

}

</script>

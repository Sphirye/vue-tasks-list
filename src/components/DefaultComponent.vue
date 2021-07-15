<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="6">
        <TaskComponent/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import TaskComponent from "@/components/TaskComponent.vue"

@Component({ components: { TaskComponent } })

export default class HelloWorld extends Vue {

}

</script>

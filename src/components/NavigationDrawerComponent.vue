<template>
  <v-navigation-drawer fixed absolute permanent :mini-variant.sync="mini" width="auto" height="100%" right class="grey lighten-3 my-2">
    <v-list dense style="position: sticky; top: 0; z-index: 1;">

      <v-list-item class="d-flex align-center">
        <v-btn icon @click.stop="mini = !mini">
          <v-icon color="grey darken-4">far fa-calendar</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider/>

      <v-list-item class="d-flex justify-center">
        <v-list-item-content>
          <v-date-picker v-if="!mini" v-model="picker" :min="today"></v-date-picker>
        </v-list-item-content>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator"
import DatePickerComponent from "@/components/DatePickerComponent.vue";

@Component({
  components: { DatePickerComponent }
})

export default class NavigationDrawerComponent extends Vue {

  today = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
  picker: string = this.today
  
  drawer = true
  mini = true

  @Watch('picker')
  onPickerChanged() {
    this.$emit('onPickerChanged', this.picker)
  }
}

</script>

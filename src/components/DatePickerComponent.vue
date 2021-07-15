<template>
    <v-date-picker v-model="picker" :min="today"></v-date-picker>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"

@Component({ components: { } })

export default class DatePickerComponent extends Vue {
    @Prop() today!: string
    @Prop() picker!: string
}

</script>

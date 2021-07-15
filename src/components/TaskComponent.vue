<template>
    <v-card rounded="xl" class="lol">
        <v-card-title class="py-0 mx-2">
            
            <v-icon @click="select()" color="grey darken-4"> {{ selected ? "fas" : "far"}} fa-circle</v-icon>

            <v-list class="transparent" width="80%">
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-wrap">{{task.title}}</v-list-item-title>
                        <v-list-item-subtitle>{{task.time.hour}}:{{task.time.minute}} {{task.time.meridiem}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-spacer/>

            <v-icon color="grey darken-4">{{getIconByType(task.type)}}</v-icon>

        </v-card-title>
    </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component({ components: { } })

export default class TaskComponent extends Vue {
 
    @Prop() readonly task: any
    type: string = "work"
    selected: boolean = false

    select() {
        this.selected = !this.selected
    }

    getIconByType(type: string) {
        switch (type) {
            case ("personal"): return "far fa-user"
            case ("school"): return "fas fa-book"
            case ("work"): return "fas fa-medkit" //No tengo idea de cual es el icono al que hacía referencia el ejemplo para Work.
            default: return undefined
        }
    }

}

</script>

import store from "@/store/store"
import { Module, Mutation, VuexModule } from "vuex-module-decorators"

@Module({dynamic: true, store, name: "TaskModule"})
export default class TaskModule extends VuexModule {

    filter: string | null = null
    
    @Mutation
    setFilter(filter: string | null) {
        this.filter = filter
    }
}
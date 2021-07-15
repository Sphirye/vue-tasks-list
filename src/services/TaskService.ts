export default class TaskService {

    static setTaskStorage() {
        if (localStorage.tasks == undefined) {
            localStorage.setItem("tasks", JSON.stringify([]))
        }
    }

    static addTask(task: any) {

        let error: boolean = false

        if ((task.title == "") || (task.description == "") || (task.collection == "") || (task.time.hour == NaN) || (task.time.minute == undefined) || (task.date == undefined)) {
            error = true
        }

        if (error != true) {
            let storedTasks = JSON.parse(localStorage.getItem("tasks")!)
            storedTasks.push(task)
            localStorage.tasks = JSON.stringify(storedTasks)
        } else {
            alert("Hay datos incompletos en la tarea.")
        }
    }
}
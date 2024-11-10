import Tasks from "../model/dashboard-task-model.js"

const taskOperations = {
    tasks : [],
    add(taskObject){
        const task = new Tasks();
        for(let key in taskObject){
            task[key] = taskObject[key]
        }
        this.tasks.push(task);
        return task;
    },
    getAllTasks(){
        return this.tasks;
    }, loadAllSavedTasks(){
        if(localStorage.tasks){
            const obj = JSON.parse(localStorage.tasks);
            for(let item in obj){
                const t = new Tasks();
                let tt = obj[item]
                for(let item in tt){
                    t[item] = tt[item]
                }
                this.tasks.push(t);
            }
            return this.tasks;
        }

        else{
            alert("No tasks..")
        }
    }
}

export default taskOperations;

class Tasks{
    constructor(id = 0,title ="",desc = "",date="",priority=""){
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.priority = priority;
        this.isDeleted = false;
        this.newlyAdded = true;
        this.important = false;
    }
}

export default Tasks
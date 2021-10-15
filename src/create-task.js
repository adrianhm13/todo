import {events} from './pubsub.js';

export class addTask {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    get infoTask() {
        console.log(`${this.title} it's a task with the description: ${this.description} with a due date of: ${this.dueDate}, with a ${this.priority}`)
    }
    set changeTitle(newTitle) {
        this.title = newTitle;
    }
    set changeDescription(newDescription) {
        this.description = newDescription;
    }

}







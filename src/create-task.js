import {events} from './pubsub.js';

export class addTask {
    constructor(title, description, dueDate, priority, project){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }
    get infoTask() {
        console.log(`${this.title} it's a task with the description: ${this.description} with a due date of: ${this.dueDate}, with a ${this.priority} and belongs to this ${this.project}.`)
        this.pushToList();
    }
    pushToList() {
        events.emit('taskAdded', this)
    }
}







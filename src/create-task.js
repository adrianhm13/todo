import { projectController } from './handler-project.js';
import {events} from './pubsub.js';
import { Render } from './render.js';

export class addTask {
    constructor(title, description, dueDate, done){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.done = done;
    }
    get infoTask() {
        console.log(`${this.title} it's a task with the description: ${this.description} with a due date of: ${this.dueDate}, with a ${this.priority}`)
    }
    get infoDescription() {
        const desc = this.description;
        return desc;
    }
    set changeTitle(newTitle) {
        this.title = newTitle;
    }
    
    // set changeDescription(newDescription) {
    //     this.description = newDescription;
    // }

    set changeTitle(title){
        this.title = title
    }
    set changeDueDate(dueDate){
        this.dueDate = dueDate
    }
    set changeDescription(description){
        this.description = description;
    }

    changeInfoTask(title, description, dueDate) {
        this.changeTitle = title
        this.changeDueDate = dueDate
        this.changeDescription = description
    }

}







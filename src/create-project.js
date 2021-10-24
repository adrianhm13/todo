import {addTask} from './create-task.js';
import {projectController} from './handler-project.js';
import { Render } from './render.js';

class Project {
    constructor(name) {
        this.projectName = name
        this.listTasks = [];
        projectController.addProject(this);
        console.log(this.infoProject)
    }
    createTask(title, description, dueDate, priority, project){
        let task = new addTask(title, description, dueDate, priority, project)
        this.listTasks.push(task);
    }
    set changeProjectName(newName){
        this.projectName = newName;
        Render.renderProjects();
    }
    get nameProject(){
        return this.projectName;
    }
    get infoProject(){
        console.log(`The project it's: ${this.nameProject}, with the quantity of: ${this.listTasks.length}, tasks`)
    }
}

export {Project}
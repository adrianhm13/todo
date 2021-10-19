//Module pattern for handling tasks

import { projectController } from "./handler-project";
import { Render } from "./render";

class TaskController {
    static createTaskTemplate(gridList, i){
        const divTemplate = document.createElement('div');
        divTemplate.classList.add('grid-list-tasks-child')

        const inputNameTask = document.createElement('input');
        inputNameTask.type = "text";
        inputNameTask.value = "Task's title";
        inputNameTask.onclick = function () {this.select()};

        const inputDescriptionTask = document.createElement('textarea');
        inputDescriptionTask.value = "Write the task's description";
        inputDescriptionTask.onclick = function () {this.select()};

        const inputDate = document.createElement('input');
        inputDate.type = "date";
        inputDate.valueAsDate = new Date();

        const submitInfo = document.createElement('span');
        submitInfo.setAttribute('class', "fas fa-plus");
        submitInfo.addEventListener('click', () => {this.getInfoInputs(inputNameTask, inputDescriptionTask, i)})

        gridList.appendChild(divTemplate);
        divTemplate.appendChild(inputNameTask);
        divTemplate.appendChild(inputDescriptionTask);
        divTemplate.appendChild(inputDate);
        divTemplate.appendChild(submitInfo);
    }
    static getInfoInputs(inputNameTask, inputDescriptionTask, i){
        const taskTitle = inputNameTask.value;
        const descriptionTask = inputDescriptionTask.value;
        console.log(`Task's title: ${taskTitle}, description task: ${descriptionTask}`)
        projectController.projectList[i].createTask(taskTitle, descriptionTask);
        Render.renderProjects();
        Render.renderTasks(i);
    }
    static taskContentTemplate(i, j){
        const gridList = document.getElementById('show-list-tasks');

        const divTemplate = document.createElement('div');
        divTemplate.classList.add('grid-list-tasks-child');
        divTemplate.id = j

        const titleTask = document.createElement('h3');
        titleTask.textContent = projectController.projectList[i].listTasks[j].title;
        titleTask.classList.add('grid-list-tasks-content')

        const descriptionTask = document.createElement('p');
        descriptionTask.textContent = projectController.projectList[i].listTasks[j].description;
        descriptionTask.classList.add('grid-list-tasks-content');
        gridList.appendChild(divTemplate);
        divTemplate.appendChild(titleTask);
        divTemplate.appendChild(descriptionTask);
    }
}

export {TaskController}
//Module pattern for handling tasks

import { projectController } from "./handler-project";
import { Render } from "./render";

class TaskController {
    static createTaskDiv(showListTasks, i) {
        const createTask = document.createElement('div');
        createTask.addEventListener('click', () => { Render.addTaskClicked(showListTasks, i) })
        createTask.classList.add('list-tasks-child-add-task');


        const addTask = document.createElement('span');
        addTask.setAttribute('class', "fas fa-plus");
        addTask.classList.add('add-task')

        const createTaskText = document.createElement('h3');
        createTaskText.textContent = "Add a new task";


        showListTasks.appendChild(createTask);
        createTask.appendChild(addTask);
        createTask.appendChild(createTaskText);
    }
    static createTaskTemplate(showListTasks, i) {
        const divTemplate = document.createElement('div');
        divTemplate.classList.add('list-tasks-child-create-template');

        const inputNameTask = document.createElement('input');
        inputNameTask.type = "text";
        inputNameTask.value = "Task's title";
        inputNameTask.onclick = function () { this.select() };

        const inputDescriptionTask = document.createElement('textarea');
        inputDescriptionTask.value = "Write the task's description";
        inputDescriptionTask.onclick = function () { this.select() };

        const inputDate = document.createElement('input');
        inputDate.type = "date";
        inputDate.valueAsDate = new Date();

        const submitInfo = document.createElement('span');
        submitInfo.setAttribute('class', "fas fa-plus");
        submitInfo.addEventListener('click', () => { this.getInfoInputs(inputNameTask, inputDescriptionTask, i) })
        
        showListTasks.appendChild(divTemplate);
        divTemplate.appendChild(inputNameTask);
        divTemplate.appendChild(inputDescriptionTask);
        divTemplate.appendChild(inputDate);
        divTemplate.appendChild(submitInfo);
    }
    static getInfoInputs(inputNameTask, inputDescriptionTask, i) {
        const taskTitle = inputNameTask.value;
        const descriptionTask = inputDescriptionTask.value;
        console.log(`Task's title: ${taskTitle}, description task: ${descriptionTask}`)
        projectController.projectList[i].createTask(taskTitle, descriptionTask);
        Render.renderProjects();
        Render.renderTasks(i);
    }
    static taskContentTemplate(i, j) {
        const taskList = document.getElementById('show-list-tasks');

        const taskMain = document.createElement('div');
        taskMain.classList.add('task');
        taskMain.id = j
   
        const taskResume = document.createElement('div');
        taskResume.classList.add('task-general')

        const titleTask = document.createElement('h3');
        titleTask.textContent = projectController.projectList[i].listTasks[j].title;

        //Creating hidden side
        const hiddenDiv = document.createElement('div');
        hiddenDiv.classList.add('task-details');

        const descriptionTask = document.createElement('p');
        descriptionTask.textContent = projectController.projectList[i].listTasks[j].description;
        taskList.appendChild(taskMain);
        taskMain.appendChild(taskResume);
        taskMain.appendChild(hiddenDiv);
        taskResume.appendChild(titleTask);
        taskResume.appendChild(descriptionTask);

        taskMain.addEventListener('click', () => {
            if(hiddenDiv.classList.contains('task-details-show')){
                setTimeout(() => {console.log('huh');hiddenDiv.classList.remove('task-details-show'), 55500})    
                hiddenDiv.classList.add('task-details-hide')
            }else{
                hiddenDiv.classList.add('task-details-show')
                hiddenDiv.classList.remove('task-details-hide')
            }})
    }
}

export { TaskController }
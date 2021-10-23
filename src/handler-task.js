//Module pattern for handling tasks

import { projectController } from "./handler-project";
import { Render } from "./render";

class TaskController {
    static createTaskDiv(showListTasks, i) {
        const createTask = document.createElement('div');
        createTask.addEventListener('click', () => { Render.addTaskClicked(showListTasks, i) }, {once : true})
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
        submitInfo.addEventListener('click', () => { this.getInfoInputs(inputNameTask, inputDescriptionTask, inputDate, i) })
        
        showListTasks.appendChild(divTemplate);
        divTemplate.appendChild(inputNameTask);
        divTemplate.appendChild(inputDescriptionTask);
        divTemplate.appendChild(inputDate);
        divTemplate.appendChild(submitInfo);
    }
    static getInfoInputs(inputNameTask, inputDescriptionTask, inputDate, i) {
        const taskTitle = inputNameTask.value;
        const descriptionTask = inputDescriptionTask.value;
        const dueDate = inputDate.value;
        console.log(`Task's title: ${taskTitle}, description task: ${descriptionTask}`)
        projectController.projectList[i].createTask(taskTitle, descriptionTask, dueDate);
        Render.renderProjects();
        Render.renderTasks(i);
    }
    static taskContentTemplate(i, j) {
        const taskList = document.getElementById('show-list-tasks');

        const taskMain = document.createElement('div');
        if(projectController.projectList[i].listTasks[j].done == true){
            console.log('true muahaha')
            taskMain.classList.add('task');
            taskMain.classList.add('task-done');
        }else{
            taskMain.classList.add('task');
        }

        taskMain.id = j
        
        const taskResume = document.createElement('div');
        taskResume.classList.add('resume-task')

        const taskDone = document.createElement('div');
        taskDone.classList.add('done-btn')
        
        const taskDoneBtn = document.createElement('button');

        const taskBtns = document.createElement('div');
        taskBtns.classList.add('btns-task');

        const editTask = document.createElement('span');
        editTask.setAttribute('class', 'far fa-edit');

        const deleteTask = document.createElement('span');
        deleteTask.setAttribute('class', 'fas fa-trash');
        deleteTask.addEventListener('click', () => {projectController.removeTask(i, j)});

        const taskTitle = document.createElement('div');
        taskTitle.classList.add('title-task');

        const taskTitleText = document.createElement('h3');
        taskTitleText.textContent = projectController.projectList[i].listTasks[j].title;

        const taskDate = document.createElement('div');
        taskDate.classList.add('date-task');

        const taskDateText = document.createElement('h3');
        console.log(projectController.projectList[i].listTasks[j].dueDate)
        taskDateText.textContent = projectController.projectList[i].listTasks[j].dueDate;
        //Creating hidden side
        const hiddenDiv = document.createElement('div');
        hiddenDiv.classList.add('task-details');

        const descriptionTask = document.createElement('p');
        descriptionTask.textContent = projectController.projectList[i].listTasks[j].description;
        taskList.appendChild(taskMain);

        taskMain.appendChild(taskResume);

        taskResume.appendChild(taskDone)
        taskResume.appendChild(taskTitle)
        taskTitle.appendChild(taskTitleText);
        taskResume.appendChild(taskTitle);
        taskResume.appendChild(taskDate);
        taskResume.appendChild(taskBtns);

        taskBtns.appendChild(editTask);
        taskBtns.appendChild(deleteTask);

        taskDone.appendChild(taskDoneBtn);
        taskDate.appendChild(taskDateText);
        taskMain.appendChild(hiddenDiv);

        hiddenDiv.appendChild(descriptionTask);

        taskDoneBtn.addEventListener('click', () => {projectController.taskDone(i, j)}, {once : true});
        editTask.addEventListener('click', () => {this.editTask(i, j, hiddenDiv)});
        taskTitle.addEventListener('click', () => {
            if(hiddenDiv.classList.contains('task-details-show')){
                setTimeout(() => {console.log('huh');hiddenDiv.classList.remove('task-details-show'), 55500})    
                hiddenDiv.classList.add('task-details-hide')
            }else{
                hiddenDiv.classList.add('task-details-show')
                hiddenDiv.classList.remove('task-details-hide')
            }})
    }
    static editTask (projectIndex, taskIndex, description){
        
    }
}

export { TaskController }
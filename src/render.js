import { Project } from "./create-project";
import { projectController } from "./handler-project";
import {TaskController} from "./handler-task";

class Render {
    static renderProjects() {

        const projectList = this.projectList
        console.log(this.projectList);
        this.clearProjectsDOM()

        for (let i = 0; i < projectList.length; i++) {
            this.populateListProject(i);
        }
    }
    static renderTasks(i){
        this.populateSingleProjectContent(i);
    }
    static clearProjectsDOM() {
        const titleProject = document.getElementById('title-project-task');
        titleProject.textContent = "Keep your tasks organized!"
        this.projectsDOM.innerHTML = "";
    }
    static get projectsDOM() {
        const divProjects = document.getElementById('listProjects')
        return divProjects;
    }
    static get projectList() {
        const projectList = projectController.infoProjectList
        return projectList
    }
    static getButtons() {
        console.log('Getting buttons and inputs');

        const btnAddProject = document.getElementById('addProject');
        btnAddProject.addEventListener('click', this.getInfoNewProject)
    }
    static getInfoNewProject() {
        const inputNameProject = document.getElementById('inputNameProject');
        const nameProject = inputNameProject.value
        inputNameProject.value = "New project's name";

        if (Render.checkDuplicateNameProject(nameProject) == true || nameProject == false) {
            alert("This name it's being used, or it's empty");
        } else {
            const project = new Project(nameProject);
        }
    }
    static checkDuplicateNameProject(nameProject) {
        const projectList = projectController.infoProjectList
        let test = projectList.some(element => element.projectName == nameProject)
        return test;
    }
    static populateListProject(i) {
        const projectDiv = document.createElement('div');
        projectDiv.id = i;
        projectDiv.classList.add('project')

        this.projectsDOM.appendChild(projectDiv);

        projectDiv.addEventListener('click', () => { this.populateSingleProjectContent(i) })

        this.populateSingleProjectNav(projectDiv, i);
    }
    static populateSingleProjectNav(projectDiv, i) {
        const projectList = this.projectList

        const titleProject = document.createElement('h4');
        titleProject.innerHTML = projectList[i].projectName;

        const divButtons = document.createElement('div');
        divButtons.classList.add('buttons-project');

        const circleTasks = document.createElement('div');
        circleTasks.classList.add('circle-task')

        const numberCircleTasks = document.createElement('p');
        numberCircleTasks.textContent = projectList[i].listTasks.length

        const deleteProject = document.createElement('span')
        deleteProject.setAttribute('class', 'fas fa-trash')
        deleteProject.addEventListener('click', () => { projectController.removeProject(i) })
        deleteProject.classList.add('delete-project')

        const addTask = document.createElement('span');
        addTask.addEventListener('click', () => { addTaskClicked(i) })
        addTask.setAttribute('class', "fas fa-plus");
        addTask.classList.add('add-task')

        const editProjectBtn = document.createElement('span');
        editProjectBtn.setAttribute('class', "fas fa-pen")
        editProjectBtn.classList.add('edit-project-btn');
        editProjectBtn.id = "edit-project-btn"

        this.createModalEditProjectName(editProjectBtn, i); //Create only one modal, add the id of the project to the button, when the button its clicked, fetch the id and edit that project

        projectDiv.appendChild(titleProject);
        projectDiv.appendChild(divButtons);
        divButtons.appendChild(circleTasks);
        circleTasks.appendChild(numberCircleTasks);
        divButtons.appendChild(addTask)
        divButtons.appendChild(editProjectBtn);
        divButtons.appendChild(deleteProject);
    }
    static addTaskClicked(i) {
        this.populateSingleProjectContent(i)
    }
    static populateSingleProjectContent(i) {
        const divMainListTasks = document.getElementById('populate-list-task');

        const titleProject = document.getElementById('title-project-task');
        titleProject.textContent = this.projectList[i].nameProject

        const checkShowListTasks = document.getElementById('show-list-tasks'); //Look if there it's an instance, if so, delete and get ready to populate again
        if(checkShowListTasks != undefined){
            checkShowListTasks.remove();
        }
        const showListTasks = document.createElement('div');
        showListTasks.id = "show-list-tasks";
        showListTasks.classList.add('grid-list-tasks');

        divMainListTasks.appendChild(showListTasks);
        TaskController.createTaskTemplate(showListTasks, i)

        const tasksProject = projectController.projectList[i].listTasks
        for (let j = 0; j < tasksProject.length; j++) {
            TaskController.taskContentTemplate(i, j);
        }

        alert(`The index of the project its: ${i}`)
    }
    static showPopupEditProjecName(i) {
        this.createModalEditProjectName()
    }
    static createModalEditProjectName(editProjectBtn, i) {

        const content = document.getElementById('content')
        const modal = document.createElement('div');
        modal.id = "modal-rename-project"
        modal.classList.add('modal-edit-project-name');

        const modalContent = document.createElement('div')
        modalContent.classList.add('modal-edit-project-name-content');


        const closeModal = document.createElement('span');
        closeModal.classList.add('close');
        closeModal.innerHTML = "&times;"

        //Input for renaming the project
        const inputRenameProject = document.createElement('input');
        inputRenameProject.type = "text";
        inputRenameProject.value = projectController.projectList[i].projectName;
        inputRenameProject.onclick = function() {this.select()};

        const submitRename = document.createElement('span');
        submitRename.setAttribute('class', 'fas fa-check');
        submitRename.classList.add('submit-rename-project');

        content.appendChild(modal);
        modal.appendChild(modalContent);
        modalContent.appendChild(closeModal);
        modalContent.appendChild(inputRenameProject);
        modalContent.appendChild(submitRename);

        // When the user clicks on the button, open the modal
        editProjectBtn.onclick = function () {
            event.stopPropagation();
            modal.style.visibility = "visible";
            modal.style.opacity = "1";
        }

        // When the user clicks on <span> (x), close the modal
        closeModal.onclick = function () {
            modal.style.visibility = "hidden";
            modal.style.opacity = "0";
        }

        //When the user clicks submit span, close the modal and execute the renaming
        submitRename.onclick = function () {
            let nameProject = inputRenameProject.value;
            if (Render.checkDuplicateNameProject(nameProject) == true || nameProject == false) {
                alert("This name it's being used, or it's empty");
            } else {
                modal.style.visibility = "hidden";
                modal.style.opacity = "0";
                projectController.projectList[i].changeProjectName = nameProject;
                setTimeout(Render.deleteModalRenameProject, 500, modal)
            }
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.visibility = "hidden";
                modal.style.opacity = "0";
            }
        }
    }
    static deleteModalRenameProject(modal){
        console.log("hahaha")
        modal.remove();
    }
}

export { Render }
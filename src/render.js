import { Project } from "./create-project";
import { projectController } from "./handler-project";
import { TaskController } from "./handler-task";
import { Storage } from "./storage";

class Render {
    static renderProjects() {

        const projectList = this.projectList
        this.clearProjectsDOM()

        for (let i = 0; i < projectList.length; i++) {
            this.populateListProject(i);
        }
        Storage.saveProject()
    }
    static renderTasks(i) {
        this.populateSingleProjectContent(i);
        Storage.saveProject()
    }
    static clearProjectsDOM() {
        const titleProject = document.getElementById('title-project-task');
        this.projectsDOM.innerHTML = "";
    }
    static clearProjectNameTitle(){
        const titleProject = document.getElementById('title-project-task')
        titleProject.textContent = "";
    }
    static clearTasksDom() {
        const listTasks = document.getElementById('show-list-tasks'); //Look if there it's an instance, if so, delete and get ready to populate again
        if (listTasks != undefined) {
            listTasks.remove();
        }
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

        const btnAddProject = document.getElementById('addProject');
        btnAddProject.addEventListener('click', this.getInfoNewProject)
    }
    static getInfoNewProject() {
        const inputNameProject = document.getElementById('inputNameProject');
        const nameProject = inputNameProject.value
        inputNameProject.value = "New project's name";

        if (Render.checkDuplicateNameProject(nameProject) == true || nameProject == false || nameProject.length > 18) {
            if (nameProject == false){
                alert(`The project's title can't be empty`);
            }else if (nameProject.length > 18){
                alert(`The name of the project it's too long`);
            }else{
                alert(`The name of the project already exists`);
            }
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

        const editProjectBtn = document.createElement('span');
        editProjectBtn.id = i
        editProjectBtn.addEventListener('click', () => { this.createModalEditProjectName(editProjectBtn, i) })
        editProjectBtn.setAttribute('class', "fas fa-pen")
        editProjectBtn.classList.add('edit-project-btn');



        projectDiv.appendChild(titleProject);
        projectDiv.appendChild(divButtons);
        divButtons.appendChild(circleTasks);
        circleTasks.appendChild(numberCircleTasks);
        divButtons.appendChild(editProjectBtn);
        divButtons.appendChild(deleteProject);
    }
    static addTaskClicked(showListTasks, i) {
        this.showTaskCreator(showListTasks, i);
    }
    static showTaskCreator(showListTasks, i) {
        TaskController.createTaskTemplate(showListTasks, i);
    }
    static populateSingleProjectContent(i) {
        const divMainListTasks = document.getElementById('populate-list-task');

        const titleProject = document.getElementById('title-project-task');
        titleProject.textContent = this.projectList[i].nameProject

        this.clearTasksDom()//Look if there it's an instance, if so, delete and get ready to populate again

        const showListTasks = document.createElement('div');
        showListTasks.id = "show-list-tasks";
        showListTasks.classList.add('list-tasks');

        divMainListTasks.appendChild(showListTasks);
        TaskController.createTaskDiv(showListTasks, i)

        const tasksProject = projectController.projectList[i].listTasks
        for (let j = 0; j < tasksProject.length; j++) {
            TaskController.taskContentTemplate(i, j);
        }
    }
    static showPopupEditProjecName(i) {
        this.createModalEditProjectName()
    }
    static changeProjectNameDom(nameProject){
        const titleProjectDom = document.getElementById('title-project-task');
        titleProjectDom.textContent = nameProject;
    }
    static createModalEditProjectName(editProjectBtn, i) {
        const modal = document.getElementById('modal-rename-project')
        event.stopPropagation();
        modal.style.visibility = "visible";
        modal.style.opacity = "1";

        const closeModal = document.getElementById('close-modal')
        const inputRenameProject = document.getElementById('input-rename-project');
        const submitRename = document.getElementById('submit-rename-project')

        inputRenameProject.value = projectController.projectList[i].projectName;
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
                Render.changeProjectNameDom(nameProject);

            }
        }
        //When user click input, autoselect text
        inputRenameProject.onclick = function () {
            this.select();
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.visibility = "hidden";
                modal.style.opacity = "0";
            }
        }
    }
}

export { Render }
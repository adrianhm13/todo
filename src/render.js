import { Project } from "./create-project";
import { projectController } from "./handler-project";

class Render{
    static renderProjects(){

        const projectList = this.projectList
        console.log(this.projectList);
        this.clearProjectsDOM()

        for(let i = 0; i < projectList.length; i++){
            this.populateListProject(i);
        }
    }
    static clearProjectsDOM(){
        this.projectsDOM.innerHTML = "";
    }
    static get projectsDOM(){
        const divProjects = document.getElementById('listProjects')
        return divProjects;
    }
    static get projectList(){
        const projectList = projectController.infoProjectList
        return projectList
    }
    static getButtons(){
        console.log('Getting buttons and inputs');

        const btnAddProject = document.getElementById('addProject');
        btnAddProject.addEventListener('click', this.getInfoNewProject)
    }
    static getInfoNewProject(){
        const inputNameProject = document.getElementById('inputNameProject');
        const nameProject = inputNameProject.value
        inputNameProject.value = "New project's name";
        
        if (Render.checkDuplicateNameProject(nameProject) == true || nameProject == false){
            alert("This name it's being used, or it's empty");
        }else{
            const project = new Project(nameProject);
        }
    }
    static checkDuplicateNameProject(nameProject){
        const projectList = projectController.infoProjectList
        let test = projectList.some(element => element.projectName == nameProject)
        return test;
    }
    static populateListProject(i){
        const projectDiv = document.createElement('div');
        projectDiv.id = i;
        projectDiv.classList.add('project')

        this.projectsDOM.appendChild(projectDiv);

        projectDiv.addEventListener('click', () => {this.populateSingleProjectContent(i)})

        this.populateSingleProjectNav(projectDiv, i);
    }
    static populateSingleProjectNav(projectDiv, i){
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
        deleteProject.addEventListener('click', () => {projectController.removeProject(i)})


        projectDiv.appendChild(titleProject);
        projectDiv.appendChild(divButtons);
        divButtons.appendChild(circleTasks);
        circleTasks.appendChild(numberCircleTasks);
        divButtons.appendChild(deleteProject);
    }
    static populateSingleProjectContent(i) {
        const mainDivTask = document.getElementById('tasks-content');
        const taskContent = document.createElement('div');
        taskContent.classList.add('task-content')

        mainDivTask.appendChild(taskContent);
        alert(`The index of the project its: ${i}`)
    }
}

export {Render}
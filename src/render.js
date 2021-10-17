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
        inputNameProject.value = "";
        
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

        this.populateSingleProject(projectDiv, i)
    }
    static populateSingleProject(projectDiv, i){
        const projectList = this.projectList
        
        const titleProject = document.createElement('h3');
        titleProject.innerHTML = projectList[i].projectName;

        const deleteProject = document.createElement('span')
        deleteProject.setAttribute('class', 'fas fa-trash')
        deleteProject.addEventListener('click', () => {projectController.removeProject(i)})


        projectDiv.appendChild(titleProject);
        projectDiv.appendChild(deleteProject)
    }
}

export {Render}
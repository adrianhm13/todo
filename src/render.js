import { Project } from "./create-project";
import { projectController } from "./handler-project";

class Render{
    static renderProjects(){

        const projectList = projectController.infoProjectList
        console.log({projectList})
        const divProjects = document.getElementById('listProjects')
        divProjects.innerHTML = "";
        for(let i = 0; i < projectList.length; i++){
            const projectDiv = document.createElement('div');
            projectDiv.id = i;

            const deleteProject = document.createElement('button')
            deleteProject.type = "button";
            //Bind
            deleteProject.addEventListener('click', () => {projectController.removeProject(i)})
            // deleteProject = 
            const titleProject = document.createElement('h3');
            titleProject.innerHTML = projectList[i].projectName;

            projectDiv.classList.add('project')

            divProjects.appendChild(projectDiv);
            projectDiv.appendChild(deleteProject)
            projectDiv.appendChild(titleProject);
        }
    }
    static getButtons(){
        console.log('Getting buttons and inputs');

        const btnAddProject = document.getElementById('addProject');
        btnAddProject.addEventListener('click', this.getInfoNewProject)
    }
    static getInfoNewProject(){
        inputNameProject = document.getElementById('inputNameProject');
        const nameProject = inputNameProject.value
        inputNameProject.value = "";
        const project = new Project(nameProject);
    }
}

export {Render}
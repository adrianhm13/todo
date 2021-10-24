import { projectController } from "./handler-project";
import { Render } from "./render";
import { Project } from './create-project'
class Storage {
    static saveProject() {
        localStorage.setItem('Projects', JSON.stringify(projectController.projectList));
    }
    static loadProjects(){
        console.log("Projects loaded")
        const projectsInfo = JSON.parse(localStorage.getItem('Projects')) || [];
        this.populateProjectsAfterLoad(projectsInfo)
    }
    static populateProjectsAfterLoad(projectsInfo){
        for (let index = 0; index < projectsInfo.length; index++) {
            const nameProject = projectsInfo[index].projectName;
            const newProject = new Project(nameProject);

            console.log(projectsInfo[0].listTasks);
            for (let j = 0; j < projectsInfo[index].listTasks.length; j++) {
                if(projectsInfo[index].listTasks.length == 0){
                    console.log('List tasks empty')
                }else{
                    const titleTask = projectsInfo[index].listTasks[j].title;
                    const descriptionTask =  projectsInfo[index].listTasks[j].description;
                    const dueDate =  projectsInfo[index].listTasks[j].dueDate
                    const done = projectsInfo[index].listTasks[j].done
                    projectController.projectList[index].createTask(titleTask, descriptionTask, dueDate, done);
                    this.saveProject();
                }
                Render.renderProjects();
            }
        }
    }
}

export { Storage }
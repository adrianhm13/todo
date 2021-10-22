import { Project } from './create-project.js'
import { Render } from './render.js'

//Class to handle projects

class ProjectController {
    constructor() {
        this.projectList = []
    }
    get infoProjectList(){return this.projectList}

    addProject = (Project) => {
        console.log("Project added to controller")
        this.projectList.push(Project)
        Render.renderProjects();
        console.log(`"Array with all the projects: " + ${JSON.stringify(this.projectList)}`);
    }
    removeProject = (id) => {
        event.stopPropagation();
        console.log("Removing project");
        this.projectList.splice(id, 1);
        Render.renderProjects();
        Render.clearTasksDom();
        Render.clearProjectNameTitle();
    }
    removeTask(projectIndex, taskIndex) {
        console.log("Removing task");
        this.projectList[projectIndex].listTasks.splice(taskIndex, 1);
        Render.renderProjects();
        Render.renderTasks(projectIndex);
    }
    taskDone(projectIndex, taskIndex) {
        console.log('Marking task as done');
        this.projectList[projectIndex].listTasks[taskIndex].done = true
        Render.renderTasks(projectIndex);
        console.log(this.projectList)
    }
}

const projectController = new ProjectController

export { projectController }
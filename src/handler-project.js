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
        console.log("Removing project");
        this.projectList.splice(id, 1);
        Render.renderProjects();
    }
}

const projectController = new ProjectController

export { projectController }
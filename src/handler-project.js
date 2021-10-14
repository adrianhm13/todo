import { events } from './pubsub.js';
import { Project } from './create-project.js'

//Class to handle projects

class ProjectController {
    constructor() {
        this.projectList = []
    }

    addProject = (Project) => {
        console.log("Project added to controller")
        this.projectList.push(Project)
        console.log(this.projectList);
    }
}

const projectController = new ProjectController

export { projectController }
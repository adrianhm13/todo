import './style.css';
import {addTask} from './create-task.js';
import {Project} from './create-project.js'
import {events} from './pubsub.js';
import {handleTasks} from './handler-task.js';
import {projectController} from './handler-project.js';
import {Render} from './render.js'
import {Storage} from './storage'

window.addTask = addTask;
window.Project = Project;
window.projectController = projectController;
window.events = events;
window.Render = Render;

Render.getButtons();

Storage.loadProjects();
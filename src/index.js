import './style.css';
import {addTask} from './create-task.js';
import {Project} from './create-project.js'
import {events} from './pubsub.js';
import {handleTasks} from './handler-task.js';
import {projectController} from './handler-project.js';
import {Render} from './render.js'

window.addTask = addTask;
window.Project = Project;
window.projectController = projectController;
window.events = events;
window.Render = Render;

let task1 = new addTask('Arreglar ropa', 'Poner ropa en el armario y colocarla', 'Hoy', 'Alta', 'Cosas del hogar')

Render.getButtons();
task1.infoTask;
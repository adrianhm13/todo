import './style.css';
import {addTask} from './create-task.js';
import {Project} from './create-project.js'
import {events} from './pubsub.js';
import {handleTasks} from './handler-task.js';
import {ProjectController} from './handler-project.js';

window.addTask = addTask;
window.Project = Project;
window.ProjectController = ProjectController;
window.events = events;
let task1 = new addTask('Arreglar ropa', 'Poner ropa en el armario y colocarla', 'Hoy', 'Alta', 'Cosas del hogar')

task1.infoTask;
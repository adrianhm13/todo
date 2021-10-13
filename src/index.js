import './style.css';
import {addTask} from './create-task.js';
import {events} from './pubsub.js';
import {handleTasks} from './handler-task.js';

let task1 = new addTask('Arreglar ropa', 'Poner ropa en el armario y colocarla', 'Hoy', 'Alta', 'Cosas del hogar')

task1.infoTask;
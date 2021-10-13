//Module pattern for handling tasks

import { events } from "./pubsub";

const handleTasks = (() => {
    const listTasks = []
    events.on('taskAdded', addToList)

    function addToList(task) {
        listTasks.push(task)
        showArray();
    }
    function showArray() {
        console.log(listTasks);
    }

})();

export {handleTasks}
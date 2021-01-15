


// task is now an object and the functions are inside the object's state
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function () {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);// Print the state of a task to the console in a nice readable way
    },

    markCompleted: function () { // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
      task.complete = true;
    }
  };
  return task;
}





// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩  out of the litter box");
const task2 = newTask("Do laundry", "😨");
const tasks = [task1, task2];



task2.logState(); // Clean Cat Litter has not been completed
task2.markCompleted();
task2.logState(); // Clean Cat Litter has been completed

console.log(tasks)

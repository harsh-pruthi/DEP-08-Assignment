// You have an array of task objects. Each task has a taskName, a completed status (boolean), and a priority (numerical value where lower numbers indicate higher priority). Your tasks are:
// find: Identify the first task with a high priority (for example, priority less than 3).
// findIndex: Find the index of the first task that is not completed.
// reduce: Count how many tasks have been completed.
// (forEach): Print all task names.
const tasks = [   { taskName: "Write report", completed: true, priority: 2 },   { taskName: "Attend meeting", completed: false, priority: 3 },   { taskName: "Fix bug", completed: false, priority: 1 },   { taskName: "Update website", completed: true, priority: 4 } ];

// Print all task names using forEach
tasks.forEach((task) => {
    console.log(task.taskName);
});

// Count completed tasks using reduce
const completedTasksCount = tasks.reduce((acc, task) => {
    return acc + (task.completed ? 1 : 0);
}, 0);

// Find first high priority task (priority < 3)
const highPriorityTask = tasks.find(task => task.priority < 3);
console.log(highPriorityTask);

// Find index of first incomplete task
const firstIncompleteIndex = tasks.findIndex(task => !task.completed);
console.log(firstIncompleteIndex);




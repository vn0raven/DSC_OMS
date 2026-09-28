/******************************************************
 * TASK SERVICE
 *
 * Core task operations
 ******************************************************/


function getTasks(){

return getRows(
CONFIG.SHEETS.TASKS
);

}



function getTask(taskID){

return findById(
CONFIG.SHEETS.TASKS,
taskID
);

}



function createTask(task){

const user =
validateUser();

validateTaskCreation(task);


if(
!canCreateTask(
user,
task.department
)
){

throw new Error(
"No permission."
);

}


const taskID =
generateID("TASK");


insert(
CONFIG.SHEETS.TASKS,
[
taskID,
task.title,
task.department,
task.project || "",
user.id,
task.priority,
task.startDate || "",
task.deadline || "",
CONFIG.STATUS.PENDING,
0,
task.notes || "",
task.evidence || "",
new Date(),
""
]
);


if(task.members){

createTaskAssignments(
taskID,
task.members
);

}


return taskID;

}



function updateTaskProgress(
taskID,
progress
){

const user =
validateUser();


validateProgress(progress);


const task =
getTask(taskID);


if(!canManageTask(user,task)){

throw new Error(
"Access denied."
);

}


updateCell(
CONFIG.SHEETS.TASKS,
task.row,
TASK_IDX.PROGRESS+1,
progress
);


return true;

}



function completeTask(
taskID,
evidence
){

const user =
validateUser();


const task =
getTask(taskID);


if(!canManageTask(user,task)){

throw new Error(
"Access denied."
);

}


updateCell(
CONFIG.SHEETS.TASKS,
task.row,
TASK_IDX.STATUS+1,
CONFIG.STATUS.COMPLETED
);


return true;

}


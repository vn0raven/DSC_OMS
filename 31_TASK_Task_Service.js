/******************************************************
 * TASK SERVICE V2
 *
 * Handles:
 * - Task CRUD
 * - Task creation
 * - Task updates
 * - Task completion
 * - Task submission
 ******************************************************/





/******************************************************
 * GET ALL TASKS
 ******************************************************/


function getTasks(){


return getRows(
CONFIG.SHEETS.TASKS
);


}







/******************************************************
 * GET SINGLE TASK
 ******************************************************/


function getTask(taskID){


return findById(

CONFIG.SHEETS.TASKS,

taskID

);


}







/******************************************************
 * CREATE TASK
 ******************************************************/


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
"No permission to create task."
);


}






const taskID =
generateID("TASK");







insert(

CONFIG.SHEETS.TASKS,


[


/* TASK ID */

taskID,



/* TITLE */

task.title || "",



/* DEPARTMENT */

task.department || "",



/* PROJECT */

task.project || "",



/* CREATED BY */

user.id,



/* ASSIGNED TO */

task.assignedTo || "",



/* PRIORITY */

task.priority || CONFIG.PRIORITY.MEDIUM,



/* START DATE */

task.startDate || "",



/* DEADLINE */

task.deadline || "",



/* STATUS */

CONFIG.STATUS.PENDING,



/* PROGRESS */

0,



/* INSTRUCTIONS */

task.instructions || "",



/* NOTES */

task.notes || "",



/* EVIDENCE */

task.evidence || "",



/* SUBMITTED DATE */

"",



/* REVIEWED BY */

"",



/* REVIEW NOTES */

"",



/* CREATED DATE */

new Date(),



/* UPDATED DATE */

new Date()



]

);







/*
CREATE ASSIGNMENTS
*/


if(
task.members &&
task.members.length > 0
){


createTaskAssignments(

taskID,

task.members

);


}





return taskID;



}









/******************************************************
 * UPDATE TASK
 *
 * Used by:
 * - Member progress updates
 * - Executive reviews
 ******************************************************/



function updateTask(
taskID,
data
){



const user =
validateUser();





const task =
getTask(taskID);





if(!task){

throw new Error(
"Task not found."
);

}





if(
!canManageTask(
user,
task
)
){

throw new Error(
"Access denied."
);

}







const sheet =
db(
CONFIG.SHEETS.TASKS
);






if(
data.assignedTo !== undefined
){


sheet.getRange(

task.row,

TASK_IDX.ASSIGNED_TO + 1

)

.setValue(

data.assignedTo

);


}






if(
data.status !== undefined
){


sheet.getRange(

task.row,

TASK_IDX.STATUS + 1

)

.setValue(

data.status

);


}






if(
data.progress !== undefined
){


validateProgress(
data.progress
);



sheet.getRange(

task.row,

TASK_IDX.PROGRESS + 1

)

.setValue(

data.progress

);


}






if(
data.instructions !== undefined
){


sheet.getRange(

task.row,

TASK_IDX.INSTRUCTIONS + 1

)

.setValue(

data.instructions

);


}






if(
data.notes !== undefined
){


sheet.getRange(

task.row,

TASK_IDX.NOTES + 1

)

.setValue(

data.notes

);


}






if(
data.evidence !== undefined
){


sheet.getRange(

task.row,

TASK_IDX.EVIDENCE + 1

)

.setValue(

data.evidence

);


}






if(
data.reviewedBy !== undefined
){


sheet.getRange(

task.row,

TASK_IDX.REVIEWED_BY + 1

)

.setValue(

data.reviewedBy

);


}






if(
data.reviewNotes !== undefined
){


sheet.getRange(

task.row,

TASK_IDX.REVIEW_NOTES + 1

)

.setValue(

data.reviewNotes

);


}






sheet.getRange(

task.row,

TASK_IDX.UPDATED_DATE + 1

)

.setValue(

new Date()

);






return true;



}









/******************************************************
 * UPDATE PROGRESS ONLY
 ******************************************************/


function updateTaskProgress(
taskID,
progress
){



return updateTask(

taskID,

{

progress:progress

}

);



}









/******************************************************
 * COMPLETE TASK
 *
 * Member submits finished work
 ******************************************************/


function completeTask(
taskID,
evidence
){



const user =
validateUser();





const task =
getTask(taskID);





if(!task){

throw new Error(
"Task not found."
);

}





if(
!canManageTask(
user,
task
)
){

throw new Error(
"Access denied."
);

}





const sheet =
db(
CONFIG.SHEETS.TASKS
);








sheet.getRange(

task.row,

TASK_IDX.STATUS + 1

)

.setValue(

CONFIG.STATUS.COMPLETED

);






sheet.getRange(

task.row,

TASK_IDX.PROGRESS + 1

)

.setValue(

100

);






sheet.getRange(

task.row,

TASK_IDX.EVIDENCE + 1

)

.setValue(

evidence || ""

);






sheet.getRange(

task.row,

TASK_IDX.SUBMITTED_DATE + 1

)

.setValue(

new Date()

);






sheet.getRange(

task.row,

TASK_IDX.UPDATED_DATE + 1

)

.setValue(

new Date()

);






return true;



}









/******************************************************
 * ARCHIVE TASK
 *
 * Used after review approval
 ******************************************************/


function archiveTask(
taskID
){



const user =
validateUser();





const task =
getTask(taskID);





if(
!canManageTask(
user,
task
)
){

throw new Error(
"Access denied."
);

}





updateCell(

CONFIG.SHEETS.TASKS,

task.row,

TASK_IDX.STATUS + 1,

CONFIG.STATUS.ARCHIVED

);






return true;



}









/******************************************************
 * REVIEW TASK
 *
 * Executive / Lead approval
 ******************************************************/


function reviewTask(
taskID,
approved,
remarks
){



const user =
validateUser();





const task =
getTask(taskID);





if(!task){

throw new Error(
"Task not found."
);

}





const sheet =
db(
CONFIG.SHEETS.TASKS
);







sheet.getRange(

task.row,

TASK_IDX.REVIEWED_BY + 1

)

.setValue(

user.id

);






sheet.getRange(

task.row,

TASK_IDX.REVIEW_NOTES + 1

)

.setValue(

remarks || ""

);







if(approved){



sheet.getRange(

task.row,

TASK_IDX.STATUS + 1

)

.setValue(

CONFIG.STATUS.COMPLETED

);



}

else{



sheet.getRange(

task.row,

TASK_IDX.STATUS + 1

)

.setValue(

CONFIG.STATUS.ONGOING

);



}






sheet.getRange(

task.row,

TASK_IDX.UPDATED_DATE + 1

)

.setValue(

new Date()

);






return true;



}
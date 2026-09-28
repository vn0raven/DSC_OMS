/******************************************************
 * TASK VALIDATION SERVICE
 *
 * Handles:
 * - Required fields
 * - Business rules
 * - Data validation
 ******************************************************/





/******************************************************
 * VALIDATE CREATE TASK
 ******************************************************/


function validateTaskCreation(
task
){


if(!task){

throw new Error(
"Task data is required."
);

}





if(
!task.title ||
task.title.trim()===""
){

throw new Error(
"Task title is required."
);

}





if(
!task.department ||
task.department.trim()===""
){

throw new Error(
"Department is required."
);

}





if(
task.deadline &&
isNaN(
new Date(task.deadline)
)
){

throw new Error(
"Invalid deadline date."
);

}




return true;


}







/******************************************************
 * VALIDATE PROGRESS
 ******************************************************/


function validateProgress(
progress
){


const value =
Number(progress);





if(
isNaN(value)
){

throw new Error(
"Progress must be a number."
);

}





if(
value < 0 ||
value > 100
){

throw new Error(
"Progress must be between 0 and 100."
);

}





return true;


}







/******************************************************
 * VALIDATE PRIORITY
 ******************************************************/


function validatePriority(
priority
){


const allowed=[


CONFIG.PRIORITY.CRITICAL,

CONFIG.PRIORITY.HIGH,

CONFIG.PRIORITY.MEDIUM,

CONFIG.PRIORITY.LOW


];





if(
!allowed.includes(priority)
){

throw new Error(
"Invalid priority."
);

}





return true;


}







/******************************************************
 * VALIDATE TASK ID
 ******************************************************/


function validateTaskID(
taskID
){


if(
!taskID ||
taskID.trim()===""
){

throw new Error(
"Task ID is required."
);

}





return true;


}


/******************************************************
 * TASK PERMISSION SERVICE
 *
 * Handles:
 * - Task access control
 * - Assignment permissions
 * - Task management permissions
 ******************************************************/



/******************************************************
 * CHECK TASK ASSIGNMENT
 *
 * Determines if user is assigned to a task
 ******************************************************/


function canUpdateAssignedTask(
taskID,
userID
){


const assignments =
getTaskAssignmentsCached();




return assignments.some(

assignment =>


assignment[1] === taskID

&&

assignment[2] === userID


);


}







/******************************************************
 * CHECK TASK MANAGEMENT ACCESS
 *
 * Lead / Co-Lead:
 * Full access
 *
 * Executive:
 * Department tasks
 *
 * Officer / Member:
 * Assigned tasks only
 ******************************************************/


function canManageTask(
user,
task
){


if(
!user ||
!task
){

return false;

}





/*
 Lead / Co-Lead
 Full system access
*/


if(
isAdmin(user)
){

return true;

}






/*
 Normalize task data
 Supports:
 findById() result
 OR raw task array
*/


const taskData =

task.data
?
task.data
:
task;






/*
 Executive
 Department ownership
*/


if(

isExecutive(user)

&&

taskData[TASK_IDX.DEPARTMENT]

===

user.department

){

return true;

}






/*
 Officer / Member
 Assigned tasks only
*/


return canUpdateAssignedTask(

taskData[TASK_IDX.ID],

user.id

);


}


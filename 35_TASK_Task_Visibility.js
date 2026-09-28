/******************************************************
 * TASK VISIBILITY SERVICE
 *
 * Determines tasks visible to users
 ******************************************************/





function getVisibleTasks(
user
){


if(!user){

throw new Error(
"No user session found."
);

}





const tasks =
getTasks();






/*
 Lead / Co-Lead
 See all tasks
*/


if(
isAdmin(user)
){

return tasks;

}






/*
 Executive
 Department tasks
*/


if(
isExecutive(user)
){


return tasks.filter(task=>

task[TASK_IDX.DEPARTMENT]

===

user.department

);


}






/*
 Officer
 Department tasks
*/


if(
isOfficer(user)
){


return tasks.filter(task=>

task[TASK_IDX.DEPARTMENT]

===

user.department

);


}






/*
 Member
 Assigned tasks only
*/


const assignments =
getTaskAssignmentsCached();





const assignedTaskIDs =

assignments

.filter(row=>

row[2] === user.id

)

.map(row=>

row[1]

);






return tasks.filter(task=>

assignedTaskIDs.includes(

task[TASK_IDX.ID]

)

);


}


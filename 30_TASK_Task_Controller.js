/******************************************************
 * TASK CONTROLLER
 *
 * Handles:
 * - Frontend task API endpoints
 * - Request routing
 ******************************************************/



/******************************************************
 * CREATE TASK API
 ******************************************************/


function apiCreateTask(task){


return executeResponse(()=>{


return createTask(task);


});


}






/******************************************************
 * GET VISIBLE TASKS API
 ******************************************************/


function apiGetTasks(){


return executeResponse(()=>{


const user =
validateUser();



return getVisibleTasks(user);



});


}






/******************************************************
 * COMPLETE TASK API
 ******************************************************/


function apiCompleteTask(
taskID,
evidence
){


return executeResponse(()=>{


return completeTask(

taskID,

evidence

);


});


}


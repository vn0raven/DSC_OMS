/******************************************************
 * WEB APP API CONTROLLER
 ******************************************************/


/******************************************************
 * DASHBOARD
 ******************************************************/


function apiGetDashboard(){


const user =
validateUser();



return buildDashboard(

getVisibleTasks(user),

user

);


}




/******************************************************
 * TASKS
 ******************************************************/


function apiGetTasks(){


const user =
validateUser();



return getVisibleTasks(user);


}




/******************************************************
 * CREATE TASK
 ******************************************************/


function apiCreateTask(task){


try{


const user =
validateUser();



task.createdBy =
user.id;



const result =
createTask(task);



return {


success:true,


message:"Task created successfully.",


data:result


};



}

catch(error){


return {


success:false,


message:error.message


};


}


}





/******************************************************
 * USERS FOR ASSIGNMENT
 ******************************************************/


function apiGetUsers(){


try{


const users =
getRows(
CONFIG.SHEETS.USERS
);



return users.map(function(row){


return {


id:row[0],


name:row[1],


department:row[2],


position:row[3],


role:row[4],


status:row[5]


};


});



}

catch(error){


return {


success:false,


message:error.message


};


}



}






/******************************************************
 * REQUESTS
 ******************************************************/


function apiCreateRequest(request){


return createRequest(request);


}





function apiApproveRequest(requestID){


return approveRequest(requestID);


}





function apiRejectRequest(
requestID,
remarks
){


return rejectRequest(

requestID,

remarks

);


}





/******************************************************
 * NOTIFICATIONS
 ******************************************************/


function apiGetNotifications(){


const user =
validateUser();



return getNotificationsFast(
user.id
);



}




function apiMarkNotificationRead(notificationID){


const user =
validateUser();



const result =
markNotificationRead(
notificationID
);



clearNotificationCache(
user.id
);



return result;


}
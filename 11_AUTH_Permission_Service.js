/******************************************************
 * PERMISSION SERVICE
 *
 * Handles:
 * - Role checking
 * - Access control
 ******************************************************/



function hasRole(
user,
roles
){


return roles.includes(
user.role
);


}







function isAdmin(user){


return hasRole(

user,

[

CONFIG.ROLES.LEAD,

CONFIG.ROLES.COLEAD

]

);


}







function isExecutive(user){


return user.role ===
CONFIG.ROLES.EXECUTIVE;


}







function isOfficer(user){


return user.role ===
CONFIG.ROLES.OFFICER;


}







function isMember(user){


return user.role ===
CONFIG.ROLES.MEMBER;


}







function sameDepartment(
user,
department
){


return user.department === department;


}







/******************************************************
 * TASK PERMISSIONS
 ******************************************************/



function canCreateTask(
user,
department
){



if(
isAdmin(user)
){

return true;

}





if(

isExecutive(user)

&&

sameDepartment(
user,
department
)

){

return true;

}





return false;


}







function canDeleteTask(user){


return isAdmin(user);


}







/******************************************************
 * REQUEST PERMISSIONS
 ******************************************************/


function canApproveRequest(
user,
department
){



if(
isAdmin(user)
){

return true;

}





if(

isExecutive(user)

&&

sameDepartment(
user,
department
)

){

return true;

}





return false;


}


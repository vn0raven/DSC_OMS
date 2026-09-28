/******************************************************
 * USER API
 ******************************************************/



function apiGetCurrentUser(){


const user =
validateUser();



return {


id:user.id,


name:user.name,


email:user.email,


department:user.department,


position:user.position,


role:user.role,


status:user.status


};


}


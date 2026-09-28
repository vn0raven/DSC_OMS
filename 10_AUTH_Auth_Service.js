/******************************************************
 * AUTH SERVICE
 *
 * Handles:
 * - Current user retrieval
 * - User validation
 * - Session management
 ******************************************************/



/******************************************************
 * GET CURRENT USER
 ******************************************************/


function getCurrentUser(){


const cache =
getUserCache();



const cachedUser =
cache.get(
"CURRENT_USER"
);



if(cachedUser){


return JSON.parse(cachedUser);


}





const email =
Session

.getActiveUser()

.getEmail()

.toLowerCase();





if(!email){


return null;


}





const users =
getRows(
CONFIG.SHEETS.USERS
);





for(
let i = 0;
i < users.length;
i++
){



const userEmail =
String(
users[i][2]
)

.toLowerCase();





if(
userEmail === email
){



const user = {


id:users[i][0],

name:users[i][1],

email:users[i][2],

department:users[i][3],

position:users[i][4],

role:users[i][5],

status:users[i][6],

createdDate:users[i][7]


};





cache.put(

"CURRENT_USER",

JSON.stringify(user),

600

);





return user;



}


}





return null;


}







/******************************************************
 * CLEAR CURRENT USER CACHE
 ******************************************************/


function clearUserCache(){


getUserCache()

.remove(
"CURRENT_USER"
);


}







/******************************************************
 * VALIDATE USER
 ******************************************************/


function validateUser(){


const user =
getCurrentUser();





if(!user){


throw new Error(
"Unauthorized user."
);


}





if(
user.status !== "Active"
){


throw new Error(
"Inactive account."
);


}





return user;


}


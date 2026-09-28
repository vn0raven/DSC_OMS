/******************************************************
 * ACTIVITY LOG SERVICE
 *
 * Handles:
 * - Creating audit logs
 * - Task history retrieval
 * - User activity retrieval
 ******************************************************/



/******************************************************
 * CREATE ACTIVITY LOG
 ******************************************************/

function createActivityLog(
action,
referenceType,
referenceID,
oldValue,
newValue
){

const user =
getCurrentUser();



insert(

CONFIG.SHEETS.LOGS,

[

generateID("LOG"),

new Date(),

user
?
user.id
:
"SYSTEM",

user
?
user.name
:
"SYSTEM",

user
?
user.role
:
"SYSTEM",

action,

referenceType,

referenceID,

oldValue || "",

newValue || ""

]

);



clearCache(
CONFIG.SHEETS.LOGS
);



return true;

}





/******************************************************
 * GET TASK HISTORY
 ******************************************************/

function getTaskLogs(
taskID
){


const logs =
getRows(
CONFIG.SHEETS.LOGS
);



return logs.filter(

log =>

log[7] === taskID

);


}





/******************************************************
 * GET USER ACTIVITY
 ******************************************************/

function getUserLogs(
userID
){


const logs =
getRows(
CONFIG.SHEETS.LOGS
);



return logs.filter(

log =>

log[2] === userID

);


}


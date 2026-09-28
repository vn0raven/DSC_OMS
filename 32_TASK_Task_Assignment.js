/******************************************************
 * TASK ASSIGNMENT SERVICE
 *
 * Handles:
 * - Creating task assignments
 * - Removing task assignments
 * - Retrieving assignments
 ******************************************************/



/******************************************************
 * GET TASK ASSIGNMENTS CACHE
 ******************************************************/


function getTaskAssignmentsCached(){


const cached =
getModuleCache(
"TASK_ASSIGNMENTS"
);



if(cached){

return cached;

}




const assignments =
getRows(
CONFIG.SHEETS.TASK_ASSIGNMENTS
);




setModuleCache(

"TASK_ASSIGNMENTS",

assignments,

300

);



return assignments;


}







/******************************************************
 * CREATE TASK ASSIGNMENTS
 ******************************************************/


function createTaskAssignments(
taskID,
members
){


if(
!members ||
members.length === 0
){

return true;

}





const assignments =
members.map(memberID=>[

generateID("ASSIGN"),

taskID,

memberID,

new Date()

]);





const sheet =
db(
CONFIG.SHEETS.TASK_ASSIGNMENTS
);





sheet

.getRange(

sheet.getLastRow()+1,

1,

assignments.length,

assignments[0].length

)

.setValues(assignments);





clearCache(
CONFIG.SHEETS.TASK_ASSIGNMENTS
);



removeModuleCache(
"TASK_ASSIGNMENTS"
);



return true;


}







/******************************************************
 * DELETE TASK ASSIGNMENTS
 ******************************************************/


function deleteTaskAssignments(
taskID
){


const sheet =
db(
CONFIG.SHEETS.TASK_ASSIGNMENTS
);




const data =
sheet
.getDataRange()
.getValues();





for(
let i=data.length-1;
i>=1;
i--
){


if(
data[i][1] === taskID
){


sheet.deleteRow(
i+1
);


}


}





clearCache(
CONFIG.SHEETS.TASK_ASSIGNMENTS
);



removeModuleCache(
"TASK_ASSIGNMENTS"
);



return true;


}


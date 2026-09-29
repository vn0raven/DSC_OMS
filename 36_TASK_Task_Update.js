/******************************************************
 * TASK UPDATE CONTROLLER
 *
 * Handles:
 * - Updating assigned task progress
 * - Updating status
 * - Updating notes
 * - Activity logging hook
 ******************************************************/



function apiUpdateTask(taskUpdate){


try{


if(!taskUpdate){

return {

success:false,

message:"Missing task data."

};

}





const id =
taskUpdate.id;



const status =
taskUpdate.status || "Pending";



const progress =
Number(taskUpdate.progress || 0);



const notes =
taskUpdate.notes || "";






if(!id){


return {

success:false,

message:"Task ID required."

};


}





/*
 ============================
 FIND TASK SHEET
 ============================
*/


const ss =
SpreadsheetApp.getActive();



const sheet =
ss.getSheetByName(
"TASKS"
);



if(!sheet){


return {

success:false,

message:"TASKS sheet not found."

};


}






const data =
sheet.getDataRange()
.getValues();





let row = -1;





for(
let i=1;
i<data.length;
i++
){



if(
String(data[i][TASK_IDX.ID])
===
String(id)
){


row=i+1;

break;


}



}







if(row===-1){


return {

success:false,

message:"Task not found."

};


}









/*
 ============================
 UPDATE COLUMNS
 ============================
*/


sheet
.getRange(
row,
TASK_IDX.STATUS + 1
)
.setValue(
status
);




sheet
.getRange(
row,
TASK_IDX.PROGRESS + 1
)
.setValue(
progress
);




sheet
.getRange(
row,
TASK_IDX.NOTES + 1
)
.setValue(
notes
);





sheet
.getRange(
row,
TASK_IDX.UPDATED_DATE + 1
)
.setValue(
new Date()
);









/*
 ============================
 ACTIVITY LOG HOOK
 ============================
*/


try{


if(
typeof createActivityLog === "function"
){


createActivityLog({

action:
"Updated task",

taskID:
id,


details:
"Task progress/status updated."


});


}


}

catch(error){


console.warn(
"Activity log skipped:",
error
);


}









return {


success:true,


message:
"Task updated successfully."


};







}

catch(error){



console.error(
"UPDATE TASK ERROR:",
error
);



return {


success:false,


message:error.message


};



}


}
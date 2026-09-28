 /******************************************************
  * DASHBOARD SERVICE
  ******************************************************/

function buildDashboard(tasks,user){

tasks = tasks || [];


let total = tasks.length;


let ongoing = tasks.filter(
task =>
task[8] === "Ongoing"
).length;


let completed = tasks.filter(
task =>
task[8] === "Completed"
).length;


let pending = tasks.filter(
task =>
task[8] === "Pending"
).length;



return {

summary:{

total:total,

ongoing:ongoing,

completed:completed,

pending:pending

},


user:user

};


}


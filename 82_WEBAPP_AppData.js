/******************************************************
 * APPLICATION DATA SERVICE
 ******************************************************/


function cleanData(value){


if(value instanceof Date){

return Utilities.formatDate(
value,
Session.getScriptTimeZone(),
"yyyy-MM-dd"
);

}


if(Array.isArray(value)){


return value.map(function(item){

return cleanData(item);

});


}


if(value && typeof value === "object"){


let obj={};


Object.keys(value).forEach(function(key){


obj[key]=cleanData(value[key]);


});


return obj;


}


return value;


}







function getAppData(){


try{


const user =
cleanData(
validateUser()
);



const rawTasks =
getVisibleTasks(user);



const tasks =
cleanData(
rawTasks
);



const dashboard =
cleanData(
buildDashboard(
tasks,
user
)
);



const notifications =
cleanData(
getNotificationsFast(
user.id
)
);



return {


success:true,


user:user,


dashboard:dashboard,


tasks:tasks,


notifications:notifications


};



}

catch(error){


console.error(
"GET APP DATA ERROR",
error
);



return {


success:false,


message:String(error.message)


};



}



}
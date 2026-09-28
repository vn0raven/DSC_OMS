/******************************************************
 * WEB APP CACHE SERVICE
 ******************************************************/



function clearVisibleTaskCache(){


CacheService

.getUserCache()

.remove(
"VISIBLE_TASKS"
);


}




function getNotificationsFast(userID){


const cache =
CacheService
.getScriptCache();



const key =
"NOTIF_" + userID;



const cached =
cache.get(key);



if(cached){

return JSON.parse(cached);

}



const data =
getRows(
CONFIG.SHEETS.NOTIFICATIONS
);



const result =
data.filter(

row=>

row[1] === userID

);



cache.put(

key,

JSON.stringify(result),

300

);



return result;


}




function clearNotificationCache(userID){


CacheService

.getScriptCache()

.remove(
"NOTIF_"+userID
);


}


/******************************************************
 * CORE CACHE SERVICE
 *
 * Centralized Cache Management
 *
 * Handles:
 * - Sheet data cache
 * - User cache
 * - Module cache
 ******************************************************/



/******************************************************
 * GET SCRIPT CACHE
 ******************************************************/


function getScriptCache(){


return CacheService
.getScriptCache();


}





/******************************************************
 * GET USER CACHE
 ******************************************************/


function getUserCache(){


return CacheService
.getUserCache();


}





/******************************************************
 * SHEET ROW CACHE
 ******************************************************/



function getCachedRows(sheetName){


const cache =
getScriptCache();



const key =
"ROWS_" + sheetName;



const cached =
cache.get(key);



if(cached){


return JSON.parse(cached);


}




const data =
getRowsFromDatabase(
sheetName
);



cache.put(

key,

JSON.stringify(data),

300

);



return data;


}







/******************************************************
 * CLEAR SHEET CACHE
 ******************************************************/


function clearCache(sheetName){


const cache =
getScriptCache();



cache.remove(

"ROWS_" + sheetName

);


}







/******************************************************
 * CLEAR MULTIPLE CACHE
 ******************************************************/


function clearCaches(sheetNames){



const cache =
getScriptCache();



sheetNames.forEach(sheet=>{


cache.remove(
"ROWS_" + sheet
);



});


}







/******************************************************
 * USER CACHE
 ******************************************************/



function setUserCache(
key,
value,
seconds
){


getUserCache()

.put(

key,

JSON.stringify(value),

seconds || 600

);


}




function getUserCached(key){


const data =
getUserCache()
.get(key);



if(!data){

return null;

}



return JSON.parse(data);


}




function removeUserCache(key){


getUserCache()
.remove(key);


}







/******************************************************
 * MODULE CACHE
 ******************************************************/



function setModuleCache(
key,
data,
seconds
){


getScriptCache()

.put(

key,

JSON.stringify(data),

seconds || 300

);


}





function getModuleCache(key){


const data =
getScriptCache()
.get(key);



if(!data){

return null;

}



return JSON.parse(data);


}





function removeModuleCache(key){


getScriptCache()
.remove(key);


}


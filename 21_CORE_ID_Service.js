/******************************************************
 * CORE ID SERVICE
 *
 * Handles system unique identifiers
 ******************************************************/



/******************************************************
 * GENERATE ID
 *
 * Format:
 * PREFIX-TIMESTAMP-RANDOM
 *
 * Example:
 * TASK-1727458392012-A7K9
 *
 ******************************************************/


function generateID(prefix){


const timestamp =
new Date()
.getTime();



const random =
Math.random()

.toString(36)

.substring(2,6)

.toUpperCase();




return (

prefix

+

"-"

+

timestamp

+

"-"

+

random

);


}







/******************************************************
 * GENERATE MULTIPLE IDS
 ******************************************************/


function generateIDs(
prefix,
count
){


const ids = [];



for(
let i=0;
i<count;
i++
){


ids.push(
generateID(prefix)
);


}



return ids;


}


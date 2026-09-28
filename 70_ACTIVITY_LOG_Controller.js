/******************************************************
 * ACTIVITY LOG CONTROLLER
 *
 * Handles:
 * - Admin activity monitoring
 ******************************************************/



/******************************************************
 * GET ACTIVITY LOGS
 *
 * Lead / Co-Lead only
 ******************************************************/

function getActivityLogs(){

const user =
validateUser();



if(
!isAdmin(user)
){

throw new Error(
"Access denied."
);

}



const logs =
getRows(
CONFIG.SHEETS.LOGS
);



return logs

.sort(

(a,b)=>

new Date(b[1])

-

new Date(a[1])

)

.slice(
0,
100
);


}


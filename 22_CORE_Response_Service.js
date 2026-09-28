/******************************************************
 * CORE RESPONSE SERVICE
 *
 * Standard API Response Format
 *
 * Used by:
 * - WEBAPP
 * - Controllers
 * - Frontend APIs
 ******************************************************/





/******************************************************
 * SUCCESS RESPONSE
 ******************************************************/


function successResponse(
data,
message
){


return {


success:true,


data:data || null,


message:message || "Success."


};


}







/******************************************************
 * ERROR RESPONSE
 ******************************************************/


function errorResponse(
message,
errorCode
){


return {


success:false,


data:null,


message:
message || "An error occurred.",


errorCode:
errorCode || "GENERAL_ERROR"


};


}







/******************************************************
 * TRY RESPONSE WRAPPER
 *
 * Prevents repeated try/catch
 ******************************************************/


function executeResponse(
callback
){


try{


return successResponse(
callback()
);


}

catch(error){


return errorResponse(
error.message
);


}


}


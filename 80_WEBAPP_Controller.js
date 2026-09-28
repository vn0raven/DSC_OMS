/******************************************************
 * WEB APP CONTROLLER
 *
 * System entry point
 ******************************************************/


function doGet(){


return HtmlService

.createTemplateFromFile(
"100_INDEX"
)

.evaluate()

.setTitle(
CONFIG.SYSTEM.NAME
)

.setXFrameOptionsMode(
HtmlService
.XFrameOptionsMode
.ALLOWALL
);


}


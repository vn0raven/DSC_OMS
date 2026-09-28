/******************************************************
 * ACTIVITY LOG CACHE SERVICE
 *
 * Handles:
 * - Cache clearing
 ******************************************************/


function clearActivityLogCache(){


const cache =
CacheService
.getScriptCache();



cache.remove(
"ROWS_" + CONFIG.SHEETS.LOGS
);


}


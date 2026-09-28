/******************************************************
 * DATABASE SERVICE
 *
 * Google Sheets CRUD layer
 ******************************************************/


function db(sheetName){


const ss =
SpreadsheetApp
.getActive();



const sheet =
ss.getSheetByName(sheetName);



if(!sheet){

throw new Error(
"Database sheet missing: "
+sheetName
);

}


return sheet;


}





function getAll(sheetName){


const sheet =
db(sheetName);



const lastRow =
sheet.getLastRow();


const lastColumn =
sheet.getLastColumn();



if(
lastRow===0 ||
lastColumn===0
){

return [];

}



return sheet

.getRange(
1,
1,
lastRow,
lastColumn
)

.getValues();


}





function getRows(sheetName){


return getAll(sheetName)
.slice(1);


}





function insert(sheetName,row){


db(sheetName)

.appendRow(row);


clearCache(sheetName);


return true;


}





function findById(sheetName,id){


const data =
getAll(sheetName);



for(
let i=1;
i<data.length;
i++
){


if(
data[i][0]===id
){


return {


row:i+1,


data:data[i]


};


}


}



return null;


}





function updateRow(
sheetName,
rowNumber,
values
){


db(sheetName)

.getRange(

rowNumber,

1,

1,

values.length

)

.setValues([
values
]);


clearCache(sheetName);


return true;


}





function updateCell(
sheetName,
rowNumber,
column,
value
){


db(sheetName)

.getRange(
rowNumber,
column
)

.setValue(value);



clearCache(sheetName);



return true;


}





function deleteRow(
sheetName,
rowNumber
){


db(sheetName)

.deleteRow(rowNumber);



clearCache(sheetName);



return true;


}


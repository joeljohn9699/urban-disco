var dummy = `{ 
    "name" : "Json",
    "type" : "Exchange format",
    "similarTypes" : [
        "XML",
        "YML",
        "CSV"
    ],
    "rating" : 10
}` // below tilde aka backtick. it enables us to write a string in multiple lines.

var jsonObj = JSON.parse ( dummy ); //recieves from browser and converts to an array of objects
console.log ( jsonObj ); 

var jsonSendBack = JSON.stringify ( jsonObj ); //sends back to the browser as string converted from array
console.log( jsonSendBack );
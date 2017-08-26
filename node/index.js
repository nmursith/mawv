var Excel = require('exceljs');
var HashTable = require('hashtable');
var hashtable = new HashTable();

var express = require('express');
var app = express();

app.get('/getMarks', function (req, res) {

  var workbook = new Excel.Workbook();

  workbook.xlsx.readFile("marks.xlsx").then(function () {

    var mathSheet=workbook.getWorksheet('maths');
    var bioSheet=workbook.getWorksheet('bio');
    var physicsSheet=workbook.getWorksheet('physics');
    var chemSheet=workbook.getWorksheet('chemistry');


    var list = [];





    workbook.eachSheet(function(worksheet, sheetId) {
        var row = worksheet.actualRowCount;
        var col = worksheet.actualColumnCount;

        var r,c;
          for(r=2; r<=row; r++  ){
                var ROW = worksheet.getRow(r);

                var student = new Object();
                var physics = [];
                var chemistry = [];
                var biology  = [];
                var maths = [];

              var index = ROW.getCell(1).value;
              var stu = hashtable.get(index);
                if(stu ==null){
                  stu = student;
                  hashtable.put(index, stu);
                }

              //console.log(stu);

              var marks  = [];
                stu.name =ROW.getCell(2).value;
                stu.id = ROW.getCell(1).value;
                stu.attendace  = ROW.getCell(3).value;
                stu.total = ROW.getCell(4).value;

              for(c=5; c<=col ; c++){

                  var CELL = ROW.getCell(c);
                  var val = CELL.value;
                  if ( typeof val != 'number')
                      val =0;
                  marks.push(val);

              }

              if(sheetId ==1 ){
                  stu.maths = marks;

              }
              else if(sheetId ==2 ){
                  stu.bio = marks;
              }
              else if(sheetId ==3 ){
                  stu.chemistry = marks;
              }
              else if(sheetId ==4 ){
                  stu.physics = marks;
              }

          }


                // ...
    });
    console.log();
    var respose = JSON.stringify(hashtable);
    res.send(respose);



//res.send("Hello world");
  });


})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("app listening at http://%s:%s", host, port)
})




// worksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
//       //if(rowNumber!=0)
//         //console.log("Row " + rowNumber + " = " + row.values);
//
//
//         response = response + "Row " + rowNumber + " = " + row.values;
//         row.eachCell({ includeEmpty: true }, function(cell, colNumber) {
//
//
//               // if(colNumber!=0)
//               // console.log('Cell ' + colNumber + ' = ' + cell.value);
//
//         });
//
//
//
//
//       });

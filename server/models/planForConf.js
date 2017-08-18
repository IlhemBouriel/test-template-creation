"use strict";
var rethinkdb = require('rethinkdb');
var db = require('../utils/db')
var async = require('async');
var express = require('express');
var fs = require('fs');
//Fro executing script shell from nodejs
var exec = require('child_process').exec;

var path_files = "/home/ubuntu/Desktop/sofrecom_qualif2/sofrecom_qualif/uploads/";

class planForConf {

    
    uploadedFileContent(file,callback){
        var i = 1;
        var testCaseArray = [];
        ;
        var testPlan = {
            'name':'',
            'testCases':[]
        };
        var array = fs.readFileSync(path_files+file).toString().split('\r');
        var testPlanName = array[0].split('=')[1];
        console.log("testPlanName = "+testPlanName);
        testPlan.name=testPlanName;
        //console.log(array[1].match(/(#)*/));
        while (i< array.length)
        {
            if (array[i][0]=='#'&&array[i][1]=='#')
            {
                i++;
                var steps = [];
                var testCase = {
                    'name':'',
                    'description':'',
                    'steps':steps
                };

                console.log("new testCase ****");
            }
            else
            {
               testCase.name = array[i].split('=')[1];
                i++;
                console.log("Name = "+testCase.name);
                var description = array[i].split('=')[1];
                i++;
                while (array[i].indexOf('Step') == -1)
                {
                    description = description+array[i];
                    i++;
                }
                testCase.description = description;
                console.log("description = "+testCase.description);
                
                    while(array[i].split("==").length == 3)
                {
                    var step = {
                        'sn':'',
                        'dn':'',
                        'ed':''
                    };
                    step.sn = array[i].split("==")[0];
                    step.dn = array[i].split("==")[1];
                    step.ed = array[i].split("==")[2];
                    console.log("Step : "+step.sn+" = "+step.dn+" = "+step.ed);
                    steps.push(step);
                    i++;
                }

                
                i++;
                testCase.steps = steps;
                testCaseArray.push(testCase);
             
            }
            
        }
        testPlan.testCases = testCaseArray;
       // console.log(testPlan);
        console.log(testPlan.testCases[0].steps);

        callback(testPlan.testCases[0].steps);
       /* async.waterfall([
        function (callback) {
          fs.readFile(path_files+file, function(err, data) {
            if (err) {
              console.log("err ocurred", err);
              }
            else {
                console.log(data);
                callback(data);
            }
            
        });
      }

    ]);*/
}
    

}

module.exports = planForConf;


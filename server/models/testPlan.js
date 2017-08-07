"use strict";
var rethinkdb = require('rethinkdb');
var db = require('../utils/db')
var async = require('async');
var fs = require('fs');
//Fro executing script shell from nodejs
var exec = require('child_process').exec;
var path_tag_files = "/home/ubuntu/Desktop/sofrecom_qualif/toRemove/script/testplan.sh";

var outlook = require("node-outlook");

class testPlan {
    



	execute(command, callback){
        exec(command, function(error, stdout, stderr){ callback(stdout); });
    };
    pushTestPlan(data,callback)
    {
        /*var docName = data.fileName;
        var content = data.content;
               this.execute(path_tag_files+' '+docName+' '+content, function(stdout){
                  callback(stdout);
      
    });*/
    const USER = 'ilhem.bouriel94@gmail.com';
    const PASS = 'Laahmech2015';
    const REPO = 'github.com/IlhemBouriel/test_push';

    const git = require('simple-git/promise');
    const remote = `https://${USER}:${PASS}@${REPO}`;

    git().silent(true)
  .clone(remote)
  .then(() => console.log('finished'))
  .catch((err) => console.error('failed: ', err));



   require('simple-git')()
         .init()
         .add('./*')
         .commit("first commit!")
         .addRemote('origin', 'https://github.com/IlhemBouriel/test_push.git')
         .push('origin', 'master');
  callback('done');

    }

    sendAndSaveFile(data,callback)
    {
      var docName = data.fileName;
      var content = data.content;

      var queryParams = {
  '$select': 'Subject,ReceivedDateTime,From',
  '$orderby': 'ReceivedDateTime desc',
  '$top': 10
};

// Set the API endpoint to use the v2.0 endpoint
outlook.base.setApiEndpoint('https://outlook.office.com/api/v2.0');
// Set the anchor mailbox to the user's SMTP address
outlook.base.setAnchorMailbox(email);

outlook.mail.getMessages({token: token, odataParams: queryParams},
  function(error, result){
    if (error) {
      console.log('getMessages returned an error: ' + error);
    }
    else if (result) {
      console.log('getMessages returned ' + result.value.length + ' messages.');
      result.value.forEach(function(message) {
        console.log('  Subject: ' + message.Subject);
        var from = message.From ? message.From.EmailAddress.Name : "NONE";
        console.log('  From: ' + from);
        console.log('  Received: ' + message.ReceivedDateTime.toString());
      });
    }
  });

    }
    

}

module.exports = testPlan;

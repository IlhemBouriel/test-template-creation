"use strict";
var rethinkdb = require('rethinkdb');
var db = require('../utils/db')
var async = require('async');
var fs = require('fs');
//Fro executing script shell from nodejs
var exec = require('child_process').exec;

var nodemailer = require('nodemailer');
var directTransport = require('nodemailer-direct-transport');
var config = require('../config.json');


class testPlan {
    



	execute(command, callback){
        exec(command, function(error, stdout, stderr){ callback(stdout); });
  };

  pushTestPlan(data,callback)
    {

    var docName = data.fileName;
    var content = data.content;
    this.execute(config[0].scriptTestPlan+' '+docName+'.txt '+content+' '+config[0].folderTestPlan, function(e, stdout)
          {
            callback(stdout);
          });

    }

    sendAndSaveFile(data,callback)
    {
      var docName = data.fileName;
      var content = data.content;
      
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
    //host: 'smtp.sofrecom.com',
    service: 'Gmail',
    tls: {
        rejectUnauthorized: false
    },
    auth: {
        user: config[1].senderTestPlan,
        pass: config[1].senderPassword
    }
    });
    
    let mailOptions = {
    from: 'testPlan@gmail.com',
    to: config[1].receiverTestPlan, // list of receivers
    subject: 'TestPlan : '+docName, // Subject line
    text: 'vous trouverez ci-joint le testplan '+docName, // plain text body
     attachments: [{'filename': docName+'.txt', 'content': content}] // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
        callback("error ==> "+error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    callback( info.messageId);
    });

    }
    

}

module.exports = testPlan;

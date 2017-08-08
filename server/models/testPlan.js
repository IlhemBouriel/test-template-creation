"use strict";
var rethinkdb = require('rethinkdb');
var db = require('../utils/db')
var async = require('async');
var fs = require('fs');
//Fro executing script shell from nodejs
var exec = require('child_process').exec;
var path_tag_files = "/home/ubuntu/Desktop/sofrecom_qualif/toRemove/script/testplan.sh";

var nodemailer = require('nodemailer');
var directTransport = require('nodemailer-direct-transport');

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
      
      // create reusable transporter object using the default SMTP transport
   let transporter = nodemailer.createTransport({
    //host: 'smtp.sofrecom.com',
    service: 'Gmail',
    tls: {
        rejectUnauthorized: false
    },
    auth: {
       // user: 'ilhem.bouriel@sofrecom.com',
       // pass: 'yguK8exAFj'
        user: 'ilhem.bouriel94@gmail.com',
        pass: 'Laahmech2015'
    }
});

   // let transporter = nodemailer.createTransport('smtps://ilhem.bouriel@sofrecom.com:yguK8exAFj@smtp.outlook.com');

    // setup email data with unicode symbols
    let mailOptions = {
    //from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
    from: 'ilhem@gmail.com',
    to: 'ilhem.bouriel@sofrecom.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
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

    


    console.log('done');
    }
    

}

module.exports = testPlan;

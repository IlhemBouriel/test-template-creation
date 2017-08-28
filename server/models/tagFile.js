"use strict";
var rethinkdb = require('rethinkdb');
var db = require('../utils/db')
var async = require('async');
var fs = require('fs');
//Fro executing script shell from nodejs
var exec = require('child_process').exec;


var config = require('../config.json');

class tagFile {
    getAllTagFiles(callback) {

            async.waterfall([
            function(callback) {
                var db_instance = new db();
                db_instance.connectToDb(function(err, connection) {
                    if (err) {
                        return callback(true, "Error connecting to database");
                    }
                    callback(null, connection);
                });
            },
            function(connection, callback) {
                rethinkdb.table('tags_files').run(connection, function(err, cursor) {
                    connection.close();
                    if (err) {
                        return callback(true, "Error fetching variables to database");
                    }
                    cursor.toArray(function(err, result) {
                        if (err) {
                            return callback(true, "Error reading cursor");
                        }
                        callback(null, result);
                    });
                });
            }
        ], function(err, data) {
            callback(err === null ? false : true, data);
        });

        
    }

    execute(command, callback){
        exec(command, function(error, stdout, stderr){ callback(stdout); });
    };

    getFileTagContent(file,callback)
    {
        console.log(config[2].pullTagFileScript);
        console.log(config[2].folderTagFiles);
        this.execute(config[2].pullTagFileScript+' '+config[2].folderTagFiles, function(e, stdout)
        {
            fs.readFile(config[2].folderTagFiles+file, 'utf8', function(err, data) {
            callback(data);
            });
        });
    }


   reloadFileTagContent(file,callback)
    {
        fs.readFile(config[2].folderTagFiles+file, 'utf8', function(err, data) 
        {
            callback(data);
        });
    }

        changeTagContent(data,callback)
    {
        var docName = data.fileName;
        var content = data.content;
        fs.writeFile(config[2].folderTagFiles+docName, content, function(error) {
           callback(content);
        });

    }


    pushTagContent(data,callback)
    {
        this.execute(config[2].pushTagFileScript+' '+config[2].folderTagFiles, function(e, stdout)
        {
            fs.readFile(config[2].folderTagFiles+data.fileName, 'utf8', function(err, data) {
            callback(data);
            });
        });
    }


}

module.exports = tagFile;


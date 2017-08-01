"use strict";
var rethinkdb = require('rethinkdb');
var db = require('../utils/db')
var async = require('async');
var fs = require('fs');
//Fro executing script shell from nodejs
var exec = require('child_process').exec;
//To modify with the real path of TAG files
var path_tag_files = "/home/ubuntu/Desktop/sofrecom_qualif/toRemove/tags/";


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



    getFileTagContent(file,callback)
    {
            fs.readFile(path_tag_files+file, 'utf8', function(err, data) {
            callback(data);
            });
    }


    changeTagContent(data,callback)
    {
        var docName = data.fileName;
        var content = data.content;

        fs.writeFile(path_tag_files+docName, content, function(error) {
        fs.readFile(path_tag_files+docName, 'utf8', function(err, data) {
            callback(data);
        });
    });
    }




}

module.exports = tagFile;

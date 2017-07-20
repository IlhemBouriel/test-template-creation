"use strict";

var rethinkdb = require('rethinkdb');
var db = require('../utils/db')
var async = require('async');

class undefVar {
    addNewUnDef(varData, callback) {
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
                rethinkdb.table('undefined_variables').insert({
                    "name": varData.name
                }).run(connection, function(err, result) {
                    connection.close();
                    if (err) {
                        return callback(true, "Error happens while adding new variables");
                    }
                    callback(null, result);
                });
            }
        ], function(err, data) {
            callback(err === null ? false : true, data);
        });
    }


    getAllUnDef(callback) {
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
                rethinkdb.table('undefined_variables').run(connection, function(err, cursor) {
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

    DeleteOneUnDef(id, callback) {
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
                console.log(id);
                rethinkdb.table('undefined_variables').get(id).delete().run(connection, function(err, result) {
                    connection.close();
                    if (err) {
                        return callback(true, "Error happens while deleting variables");
                    }
                    callback(null, result);
                });
            }
        ], function(err, data) {
            callback(err === null ? false : true, data);
        });
    }
}

module.exports = undefVar;

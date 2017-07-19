"use strict";
var rethinkdb = require('rethinkdb');
var db = require('../utils/db');
var async = require('async');

class servers {


    addNewServer(varData, callback) {
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
                rethinkdb.table('servers').insert({
                    "server": varData.server,
                    "variables": varData.variables
                }).run(connection, function(err, result) {
                    connection.close();
                    if (err) {
                        return callback(true, "Error happens while adding new polls");
                    }
                    callback(null, result);
                });
            }
        ], function(err, data) {
            callback(err === null ? false : true, data);
        });
    }


    getAllServer(callback) {
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
                rethinkdb.table('servers').run(connection, function(err, cursor) {
                    connection.close();
                    if (err) {
                        return callback(true, "Error fetching polls to database");
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


    getVarsOfServer(id, callback) {
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
                rethinkdb.table('servers').get(id).run(connection, function(err, result) {
                    connection.close();
                    if (err) {
                        return callback(true, "Error happens while adding new polls");
                    }

                    callback(null, result);
                });
            }
        ], function(err, data) {
            callback(err === null ? false : true, data);
        });
    }

}

module.exports = servers;

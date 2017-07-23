"use strict";
var rethinkdb = require('rethinkdb');
var db = require('../utils/db')
var async = require('async');

class defVar {
    addNewDef(varData, callback) {
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
                rethinkdb.table('defined_variables').insert({
                    "name": varData.name,
                    "values": varData.values
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

    getAllDef(callback) {
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
                rethinkdb.table('defined_variables').run(connection, function(err, cursor) {
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

    DeleteOneDef(id, callback) {
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
                rethinkdb.table('defined_variables').get(id).delete().run(connection, function(err, result) {
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

    AddOneValueToDef(id, newVal, callback) {
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
                rethinkdb.table('defined_variables').get(id).update({
                    "values": rethinkdb.row('values').append(newVal)
                }).run(connection, function(err, result) {
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

    getAllValuesOfOneDef(id, callback) {
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
                rethinkdb.table('defined_variables').get(id).values().run(connection, function(err, result) {
                    connection.close();
                    if (err) {
                        return callback(true, "Error happens while getting variables");
                    }
                    callback(null, result);
                });
            }
        ], function(err, data) {
            callback(err === null ? false : true, data);
        });
    }



    getOneDefVar(name, callback) {
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
                rethinkdb.table('defined_variables').filter(
                        {
                            "name":name
                        }
                    ).run(connection, function(err, cursor) {
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

}

module.exports = defVar;

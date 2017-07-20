// require model file.
var varModel = require('../models/unDefVar');

module.exports.get = function(req, res) {
    var varsObject = new varModel();
    // Calling our model function.
    varsObject.getAllUnDef(function(err, varResponse) {
        if (err) {
            return res.json({
                "responseCode": 500,
                "responseDesc": varResponse
            });
        }
        res.json({
            "responseCode": 200,
            "responseDesc": "Success",
            "data": varResponse
        });
    });
};

module.exports.post = function(req, res) {
    var varsObject = new varModel();
    // Calling our model function.
    // We nee to validate our payload here.
    varsObject.addNewUnDef(req.body, function(err, varResponse) {
        if (err) {
            return res.json({
                "responseCode": 500,
                "responseDesc": varResponse
            });
        }
        res.json({
            "responseCode": 200,
            "responseDesc": "Success",
            "data": varResponse
        });
    });
};

module.exports.delete = function(req, res) {
    var varsObject = new varModel();
    // Calling our model function.
    // We nee to validate our payload here.
    varsObject.DeleteOneUnDef(req.params.id, function(err, varResponse) {
        if (err) {
            return res.json({
                "responseCode": 500,
                "responseDesc": varResponse
            });
        }
        res.json({
            "responseCode": 204,
            "responseDesc": "Success",
            "data": varResponse
        });
    });
};

// require model file.
var varModel = require('../models/testPlan');

module.exports.pushTestPlan = function(req, res) {
    var varsObject = new varModel();
   
    varsObject.pushTestPlan(req.body,function(varResponse) {

        res.json({
            "responseCode": 200,
            "responseDesc": "Success",
            "data": varResponse
        });
    });
};


module.exports.sendAndSaveFile = function(req, res) {
    var varsObject = new varModel();
   console.log('controller');
    varsObject.sendAndSaveFile(req.body,function(varResponse) {

        res.json({
            "responseCode": 200,
            "responseDesc": "Success",
            "data": varResponse
        });
    });
};


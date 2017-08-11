// require model file.
var varModel = require('../models/tagFile');

module.exports.getAllTagFiles = function(req, res) {

    var varsObject = new varModel();
    // Calling our model function.
    varsObject.getAllTagFiles(function(err, varResponse) {
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


module.exports.getFileContent = function(req, res) {

    var varsObject = new varModel();
    // Calling our model function.
    varsObject.getFileTagContent(req.params.file,function(varResponse) {
        res.json({
            "responseCode": 200,
            "responseDesc": "Success",
            "data": varResponse
        });
    });
};


module.exports.changeTagFileContent = function(req, res) {

     var varsObject = new varModel();
   
    varsObject.changeTagContent(req.body,function(varResponse) {

        //push to git
    varsObject.pushTagContent(req.body,function(varResponse)
    {
         res.json({
            "responseCode": 200,
            "responseDesc": "Success",
            "data": varResponse
        });
   });
       
    });
};

module.exports.reloadTagFileContent = function(req, res) {

    var varsObject = new varModel();
    // Calling our model function.
    varsObject.reloadFileTagContent(req.params.file,function(varResponse) {
        res.json({
            "responseCode": 200,
            "responseDesc": "Success",
            "data": varResponse
        });
    });
};
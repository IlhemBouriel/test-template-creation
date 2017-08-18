// require model file.
var varModel = require('../models/planForConf');

module.exports.get = function(req, res) {
        res.json({
            "responseCode": 200,
            "responseDesc": "Success",
            "data": "file catcher example"
        });
};



module.exports.getUploadedContent = function(req,res)
{
    var varsObject = new varModel();
    varsObject.uploadedFileContent(req.params.file,function(varResponse) {
        res.json({
            "responseCode": 200,
            "responseDesc": "Success",
            "data": varResponse
        });
    });
};
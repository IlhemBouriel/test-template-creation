// require model file.
var varModel = require('../models/defVar');

module.exports.get = function(req, res) {
    var varsObject = new varModel();
    // Calling our model function.
    varsObject.getAllDef(function(err,varResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : varResponse});
      }
     return res.status(200).json(varResponse);
    });
};

module.exports.post = function(req, res) {
    var varsObject = new varModel();
    // Calling our model function.
    // We nee to validate our payload here.
    varsObject.addNewDef(req.body,function(err,varResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : varResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success","data" : varResponse});
    });
};

module.exports.put = function(req, res) {
    var varsObject = new varModel();
    varsObject.AddOneValueToDef(req.params.id,req.body.value,function(err,varResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : varResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success","data" : varResponse});
    });
};

module.exports.delete = function(req, res) {
    var varsObject = new varModel();
    // Calling our model function.
    // We nee to validate our payload here.
    varsObject.DeleteOneDef(req.params.id,function(err,varResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : varResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success","data" : varResponse});
    });
};


module.exports.getById = function(req, res) {
     var varsObject = new varModel();
    // Calling our model function.
    // We nee to validate our payload here.
    varsObject.getAllValuesOfOneDef(req.params.id,function(err,varResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : varResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success","data" : varResponse});
    });
};

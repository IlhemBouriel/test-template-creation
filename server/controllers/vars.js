// require model file.
var varModel = require('../models/vars');

module.exports.get = function(req, res) {
    // Code to fetch the polls.
    var varsObject = new varModel();
    // Calling our model function.
    varsObject.getAllVars(function(err, varResponse) {
        if (err) {
            return res.json({"responseCode": 1, "responseDesc": varResponse});
        }
        res.json({"responseCode": 0, "responseDesc": "Success", "data": varResponse});
    });
};

module.exports.post = function(req, res) {
    // Code to add new polls.
    var varsObject = new varModel();
    // Calling our model function.
    // We nee to validate our payload here.
    varsObject.addNewVars(req.body, function(err, varResponse) {
        if (err) {
            return res.json({"responseCode": 1, "responseDesc": varResponse});
        }
        res.json({"responseCode": 0, "responseDesc": "Success", "data": varResponse});
    });
};

module.exports.put = function(req, res) {
    // Code to update votes of poll.
    var varsObject = new varModel();
    console.log('not yet ');
    // Calling our model function.
    // We need to validate our payload here.
    /* varsObject.votePollOption(req.body,function(err,varResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : varResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success", "data" : varResponse});
    });*/
};

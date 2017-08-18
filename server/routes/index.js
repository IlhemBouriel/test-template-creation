var express = require('express');
var router = express.Router();

var defVarController = require('../controllers/defVar');
var unDefVarController = require('../controllers/unDefVar');
var indexController = require('../controllers/index');
var tagController = require('../controllers/tags');
var testPlanController = require('../controllers/testplan');
var planUploadController = require('../controllers/planUploadForConf');


var multer = require('multer');
var fs = require('fs');

var DIR = '../../uploads/';

 
var upload = multer({dest: DIR});
 

router.get('/', indexController.index);

router.get('/def', defVarController.get)
    .post('/def', defVarController.post)
    .put('/def/:id', defVarController.put)
    .delete('/def/:id', defVarController.delete);


  
router.get('/def/one/:name',defVarController.getByName);
router.post('/def/template',defVarController.createTemplate);
router.get('/def/:id', defVarController.getById);
router.post('/def/launch',defVarController.launchTest);
router.get('/edit/tags',tagController.getAllTagFiles);
router.get('/edit/tag/:file',tagController.getFileContent);
router.get('/reload/tag/:file',tagController.reloadTagFileContent);
router.post('/change/tag',tagController.changeTagFileContent);
router.post('/testplan/push',testPlanController.pushTestPlan);
router.post('/testplan/send',testPlanController.sendAndSaveFile);

router.get("/content/:file",planUploadController.getUploadedContent);


var storage = multer.diskStorage({
  // destino del fichero
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  // renombrar fichero
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });

router.post("/upload", upload.array("uploads[]", 12), function (req, res) {
   console.log('files', req.files);
  res.send(req.files);
});




module.exports = router;
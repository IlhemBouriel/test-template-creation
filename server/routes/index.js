var express = require('express');
var router = express.Router();

var defVarController = require('../controllers/defVar');
var unDefVarController = require('../controllers/unDefVar');
var indexController = require('../controllers/index');
var tagController = require('../controllers/tags');

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
router.post('/change/tag',tagController.changeTagFileContent);

router.get('/undef', unDefVarController.get)
    .post('/undef', unDefVarController.post)
    .delete('/undef/:id', unDefVarController.delete);

module.exports = router;

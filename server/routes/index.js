var express = require('express');
var router = express.Router();

var defVarController = require('../controllers/defVar');
var unDefVarController = require('../controllers/unDefVar');
var varsController = require('../controllers/vars');
var indexController = require('../controllers/index');
var taskController = require('../controllers/task');

router.get('/', indexController.index);

router.get('/def', defVarController.get)
    .post('/def', defVarController.post)
    .put('/def/:id', defVarController.put)
    .delete('/def/:id', defVarController.delete);
router.get('/def/:id', defVarController.getById);

router.get('/undef', unDefVarController.get)
    .post('/undef', unDefVarController.post)
    .delete('/undef/:id', unDefVarController.delete);

router.get('/vars', varsController.get)
    .post('/vars', varsController.post)
    .put('/vars', varsController.put);

router.get('/api/tasks', taskController.get)
    .post('/api/task', taskController.post);
module.exports = router;

const express = require('express');
//const authService = require('../services/auth');
const router = express.Router();
const userCtrl = require('../controllers/user');

//router.post('', authService.checkJWT, authService.checkRole('siteOwner'), userCtrl.saveUser);

router.post('', userCtrl.saveUser);

router.get('', userCtrl.getUsers);

router.get('/:id', userCtrl.getUserById);

//router.patch('/:id', authService.checkJWT, authService.checkRole('siteOwner'), userCtrl.updateUser);

router.patch('/:id', userCtrl.updateUser);

//router.delete('/:id', authService.checkJWT, authService.checkRole('siteOwner'), userCtrl.deleteUser);

router.delete('/:id', userCtrl.deleteUser);

module.exports = router;



const express = require('express');
const router = express.Router();
const userAction = require('../action/userAction');

router.get('/user-list', userAction.getAllUsers);
router.post('/user', userAction.newUserData);
router.get('/user-id/:id', userAction.getUserById);
router.put('/user/:id', userAction.updateUserById);
router.delete('/user/:id', userAction.deleteUserById);

module.exports = router;

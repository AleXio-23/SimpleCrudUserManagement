const express = require('express');
const { getUsers, getUser, createUser, deleteuser, banUser, updateUser } = require('../controllers/usersController');
const router = express.Router();


router
    .route('/')
    .get(getUsers);

router
    .route('/getUser/:id')
    .get(getUser);

router
    .route('/createUser')
    .post(createUser);

router
    .route('/deleteUser/:id')
    .delete(deleteuser);

router
    .route('/banUser/:id')
    .put(banUser);

router
    .route('/updateUser/:id')
    .put(updateUser);

module.exports = router;
const express = require('express')
const { addUser } = require('../controller/userController')
const router = express.Router()

router.post('/user',addUser)

module.exports = router;
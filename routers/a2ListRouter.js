const express = require('express')
const router = express.Router()

const { a2ListController } = require('../controllers/a2ListController')

router.get('/', a2ListController)

module.exports = router
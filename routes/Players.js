const express = require('express')
const router = express.Router()

router.get('/', (req, res )=> {
    res.send('player table')
})

module.exports = router
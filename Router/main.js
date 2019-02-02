var express = require('express')
var router = express.Router()

// middlewear
router.use(function visitLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

// home page
router.get('/', function (req, res) {
    res.send('homepage')
})

router.post('/touchbase', function(req, res) {
    
})

module.exports = router
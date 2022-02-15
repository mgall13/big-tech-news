const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('This is a test!')
});

module.exports = router;
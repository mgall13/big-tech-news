const router = require('express').Router();

const homepageRoutes = require('./homepage');

router.use('/homepage', homepageRoutes);

module.exports = router;
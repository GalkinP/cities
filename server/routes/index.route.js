const router = require('express').Router();


const citiesRouter = require('./api/cities.route')
const listsRouter = require('./api/lists.route')
const rowsRouter = require('./api/rows.route')



router.use('/api/cities', citiesRouter)
router.use('/api/lists', listsRouter)
router.use('/api/rows', rowsRouter)

module.exports = router;

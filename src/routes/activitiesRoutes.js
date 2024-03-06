const {Router} = require('express')

const router = Router()

const {
    getActivitiesHandler,
    createActivityHandler,
} = require('../handlers/activitiesHandlers')


router.get('/', getActivitiesHandler)


router.post('/', createActivityHandler)


module.exports = router

 
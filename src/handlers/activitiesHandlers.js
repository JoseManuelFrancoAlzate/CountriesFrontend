const {findAllActivities, createActivities} = require('../controllers/activitiesControllers')

const getActivitiesHandler = async(req,res)=>{
try {
    const activities = await findAllActivities()
    
res.status(201).json(activities)
} catch (error) {
    res.status(500).json({error: error.message}) 

}}




const createActivityHandler = async (req,res)=>{
try {
const {name,difficulty,duration,season, countryId} = req.body
const newActivity = await createActivities({name,difficulty,duration,season, countryId})

res.status(201).json(newActivity)

} catch (error) {
    res.status(500).json({error: error.message})

}
    }

   


    module.exports = {
        getActivitiesHandler,
        createActivityHandler,
    }
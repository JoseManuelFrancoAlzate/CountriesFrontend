const {Activity} = require('../db')

const findAllActivities= async()=>{
    const activities = await Activity.findAll()
    return activities
}

const createActivities = async({name,difficulty,duration,season,countryId})=>{
const newActivity = await Activity.create({name,difficulty,duration,season})
await newActivity.addCountries(countryId)

return newActivity
}

module.exports = {findAllActivities, createActivities}



/*
	{
		"name": "futbol",
		"difficulty": 3,
		"duration": "00:01:30",
		"season": "Spring",
        "countryId": ["ARG","COL","ESP","FRA"]
	},
	{
		"name": "archery",
		"difficulty": 5,
		"duration": "00:01:00",
		"season": "Summer",
		  "countryId": ["KOR", "MEX","USA"]

	},
	
	{
		"name": "skiing",
		"difficulty": 5,
		"duration": "00:02:00",
		"season": "Winter",
  "countryId": ["JPN", "FRA","CAN"]

	}
		{
				"name": "sightseeing tours",
				"difficulty": 2,
				"duration": "00:02:00",
				"season": "autumn",
				 "countryId": ["ARG","ATF"]
				}*/
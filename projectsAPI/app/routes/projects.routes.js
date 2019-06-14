var express = require('express')
var router = express.Router()

var ProjectModel = require('../models/projects.model')
var model = new ProjectModel()

function defaultCallback(error, data) {
	if (error) {
		response.json(error)
	} else if (data) {
		
		response.json(data)
	} else {
		response.send('jaja')
	}
}

router.get('/', (_, response) => { model.getProjects(defaultCallback) })

router.get('/featured', (_, response) => {
	model.getFeaturedProjects(
		defaultCallback
	)
})

router.get('/minor', (_, response) => {
	model.getMinorProjects(
		defaultCallback
	)
})

module.exports = router
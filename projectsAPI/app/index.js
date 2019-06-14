var express = require('express');
var projectRoutes = require('./routes/projects.routes')

var app = express()

var port = process.env.PORT || 420
var cors = require('cors')
app.use(cors({credentials: true, origin: true}))
app.use('/api/projects', projectRoutes)

app.listen(port, function() {
    console.log('app is listening on port ' + port)
})
class ProjectModel {
    constructor() { 
        this._connection = require('../config/dbConnection.config')()()
    }

    getFeaturedProjects(callback) {
        this._connection.query('SELECT * FROM tb_projetos WHERE destaque = TRUE', callback)
    }

    getMinorProjects(callback) {
        this._connection.query('SELECT * FROM tb_projetos WHERE destaque = FALSE', callback)
    }

    getProjects(callback) {
        this._connection.query('SELECT * FROM tb_projetos', callback)
    }
}

module.exports = ProjectModel
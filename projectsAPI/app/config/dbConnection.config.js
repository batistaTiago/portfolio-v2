let mysql = require('mysql')

let wrapper = () => {
    console.log('######################## CREATING CONNECTION ########################')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'db_portfolio'
    })
}

module.exports = () => {
    return wrapper
}

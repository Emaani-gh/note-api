require('dotenv').config()

module.exports = {

  "development": {
    "username": "root",
    "password": "Salmaseidu123",
    "database": "notes",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port":"3306"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST ,
    "dialect": process.env.DB_DIALET
  }
}

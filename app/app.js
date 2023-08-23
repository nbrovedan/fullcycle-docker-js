const express = require('express')
const mysql = require('mysql')
const random_name = require('node-random-name')
const app = express()
const port = 3000

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'qwe123',
  database: 'fullcycle'
})

connection.connect((err) => {
    if (err) {
        return console.error('error: ' + err.message);
      }
      console.log('Connected to the MySQL server.');
})

app.get('/', (req, res) => {
    connection.query('SELECT NAME FROM PEOPLE', (err, rows, fields) => {
        if (err) throw err
        names = rows.map(r  => r.NAME);
        res.send(`<p><h1>Full Cycle Rocks!</h1></p><p><ul><li>${names.join('</li><li>')}</li>`)
      })
})

app.get('/add', (req, res) => {
    connection.query(`INSERT INTO PEOPLE VALUES ('${random_name()}')`, () => {
        res.redirect('/')
    })
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
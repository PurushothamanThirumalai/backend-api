const express = require('express')
const users = require('./data/users.json')

const app = express()

app.get('/api/users', (req, res) => {
    res.send(JSON.stringify(users))
})

app.post('/api/users', (req, res) => {

    users.push(req.body)

    res.send('User saved in json file')
})


app.listen('3000', function () {
    console.log('listening on port!')
})


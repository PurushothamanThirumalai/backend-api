const express = require('express')
const users = require('./data/users.json')
const fs = require('fs')


const app = express()

app.use(express.json())

//GET https://localhost:3000/api/users
app.get('/api/users', (req, res) => {

    fs.readFile('./data/users.json', 'utf8', (err,data) => {

        if (err) return res.status(500).send('something went wrong, try again! Details:'+err.message)
        res.send(data)
    })

})

//POST https://localhost:3000/api/users
app.post('/api/users', (req, res) => {

let temp_users=[...users]

    let data =req.body
    temp_users.push(data)
    
    fs.writeFile('./data/users.json', JSON.stringify(temp_users), 'utf8', (err) => {

        if (err) return res.status(500).send('something went wrong, try again! Details:'+err.message)
        res.send('User saved in json file')
    })

})


app.listen('3000', function () {
    console.log('listening on port!')
})


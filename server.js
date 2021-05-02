const express = require('express')
const playerRouter = require('./routes/Players')
const app = express()

app.set('view engine', 'ejs')

app.use('/players', playerRouter)

app.get('/', (req, res) =>{
    const players =[{
        title: 'Cricket Players List 2021',
        name: 'name',
        ranking: 'number',
        country: 'name'

    }]
res.render('index', {players: players})
})


app.listen(5000)
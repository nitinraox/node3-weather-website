const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app =  express()
const publicDirectoryPath = path.join(__dirname, '../public')

const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title:'Weather',
        name: 'Nitin'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Nitin B '    
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        msg: 'Any Help required',
        title: 'help',
        name: 'Nitin B '    
    })
})


app.get('/weather', (req, res) => {
    res.send({
        title: 'wether',
        when: 'now'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: ' help',
        name: 'Nitin',
        errorMsg: 'help article not found '

    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 404,
        name: 'Nitin',
        errorMsg: 'Page Not found '

    })
})


app.listen(3000, () => {
    console.log('server is Up! on 3000')
})


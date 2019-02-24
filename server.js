const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')


const app = express()
const port = 3000

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ exntended: true}))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let url = 'https://api.kanye.rest'

    request(url, (err, response, body) => {
        let quote = JSON.parse(body)
        let quoteText = `“${quote.quote}”`
        res.render('index', {quote: quoteText})
    })
})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
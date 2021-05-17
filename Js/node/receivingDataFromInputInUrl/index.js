const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'ejs')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
  res.render('form')
})

app.post('/user', urlencodedParser, (req, res) => {
  res.render('userInfo', { data: req.body })
})

app.listen(3000, () => {
  console.log('Server start at 3000...')
})

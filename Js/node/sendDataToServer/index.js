const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const peopleListRouter = require('./routes/peoleList')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(peopleListRouter)

async function start() {
    try {
        await mongoose.connect('mongodb+srv://anton:24681357@cluster0.cm3fv.mongodb.net/peopleList', {
            useNewUrlParser: true,
            useFindAndModify: false
        })

        app.listen(PORT, () => {
            console.log('Server start...')
        })

        express
  .get(':x/:y', (req,res) => {
    const {x, y} = req.params
    res.send(parseInt(x) + parseIntx(y) )
    console.log(x, y)
  })
        
    } catch (err) {
        console.log(err)
    }
}

start()
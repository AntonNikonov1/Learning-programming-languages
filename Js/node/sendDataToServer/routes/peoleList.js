const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'people list',
        isIndex: true
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'create people list',
        isCreate: true
    })
})

module.exports = router
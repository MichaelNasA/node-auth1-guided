const express = require ('express')

const router = express.Router()


router.post('/register', async(req, res, next) => {
res.json({message: 'register working'})
})
router.method('/login', async(req, res, next) => {
res.json({message: 'login working'})
})
router.method('/logout', async(req, res, next) => {
res.json({message: 'logout working'})
})





module.exports = router
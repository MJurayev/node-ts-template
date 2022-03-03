import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {res.json({succes:true})})

export default router
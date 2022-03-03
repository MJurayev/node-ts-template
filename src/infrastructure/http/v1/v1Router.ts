import express from 'express'
import videosRouter from './routes/videosRoute'
const v1Router = express.Router()

v1Router.use('/video', videosRouter)

export default v1Router
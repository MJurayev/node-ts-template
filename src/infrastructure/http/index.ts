import express,{ Application, Request, Response } from 'express'
import v1Router from './v1/v1Router'

const app:Application = express()

app.get('/', (req, res) => {
    return res.send("Api is working...")
})

app.use('/api/v1', v1Router)

app.listen(3000, () => {
    console.log("Server started in 3000 port");
})
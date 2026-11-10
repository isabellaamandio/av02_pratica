import express from 'express'
import { jogoRouter } from './routes/jogo.route.js'

const app = express()
const port = 3000

app.use(express.json())
app.use("/jogo", jogoRouter)
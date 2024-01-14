import express from 'express'
import diaryRouter from './routes/diaries'
import bodyParser from 'body-parser'
import morgan from 'morgan'
const app = express()

// middleware transforma req.body a json
app.use(express.json())
app.use(bodyParser.json())

app.use(morgan('dev'))

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Consulta Realizada')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto:  ${PORT}`)
})

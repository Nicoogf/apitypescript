import express from 'express'
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithOutSensitiveInfo())
})

router.post('/', (_req, res) => {
  res.send('Entrada enviada')
})

export default router

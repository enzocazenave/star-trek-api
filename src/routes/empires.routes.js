import { Router } from 'express'
import { getEmpires, getEmpiresName } from '../controllers/empires.js'

const router = Router()

router.get('/empires', [], getEmpires)

router.get('/empires/id', [], getEmpiresName)

export default router 
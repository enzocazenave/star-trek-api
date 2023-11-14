import { Router } from 'express'
import { getEmpires } from '../controllers/empires.js'

const router = Router()

router.get('/empires', [], getEmpires)

export default router 
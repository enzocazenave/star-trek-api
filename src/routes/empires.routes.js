import { Router } from 'express'
import { getEmpireById, getEmpires } from '../controllers/empires.js'

const router = Router()

router.get('/empires', [], getEmpires)
router.get('/empires/:id', [], getEmpireById)

export default router 
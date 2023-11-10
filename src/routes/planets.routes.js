import { Router } from 'express'
import { getPlanets, updatePlanetMountain } from '../controllers/planets.js'

const router = Router()

router.get('/planets', [], getPlanets)

router.put('/planets/mountain', [], updatePlanetMountain)

export default router
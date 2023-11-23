import { Router } from 'express';
import { getFleetShips, getFleets, updateFleetCoordinate, getFleetsByCoordinate } from '../controllers/fleets.js';

const router = Router()

router.get('/fleets', [], getFleets)
router.get('/fleets/:coordinate', [], getFleetsByCoordinate)
router.get('/fleets/:id/ships', [], getFleetShips)
router.put('/fleets/:id/coordinate', [], updateFleetCoordinate)

export default router
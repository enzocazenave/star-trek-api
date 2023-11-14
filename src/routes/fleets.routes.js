import { Router } from "express";
import { getFleets } from "../controllers/fleets.js";

const router = Router()

router.get('/fleets',[],getFleets)

export default router
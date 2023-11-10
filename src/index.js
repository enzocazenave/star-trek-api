import { configDotenv } from 'dotenv'
import express  from 'express'
import logger from 'morgan'
import cors from 'cors'

import planetsRoutes from './routes/planets.routes.js'
import empiresRoutes from './routes/empires.routes.js'

configDotenv()

const expressServer = express()

expressServer.use(cors())
expressServer.use(express.json())
expressServer.use(logger('dev'))

expressServer.use('/api', planetsRoutes)
expressServer.use('/api', empiresRoutes)

const { EXPRESS_SERVER_PORT } = process.env

expressServer.listen(EXPRESS_SERVER_PORT, () => {
  console.log('Server running on:')
  console.log(`✅ http://localhost:${EXPRESS_SERVER_PORT}`)
})
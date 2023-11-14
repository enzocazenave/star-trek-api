import { response } from 'express'
import { getConnection } from '../database/sql.js'
import sendResponse from '../helpers/sendResponse.js'
import planetsRequests from '../requests/planets.js'
import planetsErrors from '../errors/planets.js'
import serverErrors from '../errors/server.js'

const getPlanets = async(req, res = response) => {
  try {
    const connection = await getConnection()
    const result = await connection.request().query(planetsRequests.getPlanets)
  
    sendResponse(res, 200, result.recordset, null)
  } catch(error) {
    console.error(error)
    sendResponse(res, 500, null, serverErrors.INTERNAL_SERVER_ERROR)
  }
}

const updatePlanetMountain = async(req, res = response) => {
  const { mountainHeight } = req.body
  const { planetName } = req.params

  try {
    const connection = await getConnection()
    const result = await connection
      .request()
      .input('Nombre', planetName)
      .input('AlturaMontania', mountainHeight)
      .query(planetsRequests.updatePlanetMountain)

    if (result.rowsAffected > 0) return sendResponse(res, 201, null, null)
    sendResponse(res, 404, null, planetsErrors.PLANET_NOT_FOUND)
  } catch(error) {
    console.error(error)
    sendResponse(res, 500, null, serverErrors.INTERNAL_SERVER_ERROR)
  }
}

export {
  getPlanets,
  updatePlanetMountain
}
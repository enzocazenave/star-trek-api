import { response } from 'express'
import { getConnection } from '../database/sql.js'
import sendResponse from '../helpers/sendResponse.js'
import fleetsRequests from '../requests/fleets.js'
import fleetsErrors from '../errors/fleets.js'
import serverErrors from '../errors/server.js'

const getFleets = async (req, res = response) => {
  try {
    const connection = await getConnection()
    const result = await connection.request().query(fleetsRequests.getFleets)

    sendResponse(res, 200, result.recordset, { query: fleetsRequests.getFleets }, null)
  } catch(error){
    console.error(error)
    sendResponse(res, 500, null, {}, serverErrors.INTERNAL_SERVER_ERROR)
  }
}

const getFleetShips = async(req, res = response) => {
  const { id } = req.params

  try {
    const connection = await getConnection()
    const result = await connection
      .request()
      .input('id_flota', id)
      .query(fleetsRequests.getFleetShips)

    if (result.recordset.length) return sendResponse(res, 200, result.recordset, { query: fleetsRequests.getFleetShips, queryData: [id] }, null)
    sendResponse(res, 404, null, { query: fleetsRequests.getFleetShips, queryData: [id] }, fleetsErrors.FLEET_NOT_FOUND)
  } catch (error){
    console.error(error)
    sendResponse(res, 500, null, {}, serverErrors.INTERNAL_SERVER_ERROR)
  }
}

const updateFleetCoordinate = async(req, res = response) => {
  const { coordinate } = req.body
  const { id } = req.params

  try {
    const connection = await getConnection()
    const result = await connection
      .request()
      .input('coordenadas', coordinate)
      .input('id_flota', id)
      .query(fleetsRequests.updateFleetCoordinate)

    if (result.rowsAffected > 0) return sendResponse(res, 201, null, { query: fleetsRequests.updateFleetCoordinate, queryData: [coordinate, id] }, null)
    sendResponse(res, 404, null, { query: fleetsRequests.updateFleetCoordinate, queryData: [coordinate, id] }, fleetsErrors.FLEET_NOT_FOUND)
  } catch(error) {
    console.error(error)
    sendResponse(res, 500, null, {}, serverErrors.INTERNAL_SERVER_ERROR)
  }
}

const getFleetsByCoordinate = async(req, res = response) => {
  const { coordinate } = req.params

  try {
    const connection = await getConnection()
    const result = await connection
      .request()
      .input('coordenadas', coordinate)
      .query(fleetsRequests.getFleetsByCoordinate)
    
    if (result.recordset.length) return sendResponse(res, 200, result.recordset, { query: fleetsRequests.getFleetsByCoordinate, queryData: [coordinate] })
    sendResponse(res, 404, null, { query: fleetsRequests.getFleetsByCoordinate, queryData: [coordinate] }, fleetsErrors.FLEET_NOT_FOUND)
  } catch(error) {
    console.error(error)
    sendResponse(res, 500, null, {}, serverErrors.INTERNAL_SERVER_ERROR)
  }
}

export {
  getFleets,
  getFleetShips,
  updateFleetCoordinate,
  getFleetsByCoordinate
}
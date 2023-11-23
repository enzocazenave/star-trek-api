import { response } from 'express'
import { getConnection } from '../database/sql.js'
import sendResponse from '../helpers/sendResponse.js'
import empiresRequests from '../requests/empires.js'
import serverErrors from '../errors/server.js'
import empiresErrors from '../errors/empires.js'

const getEmpires = async(req, res = response) => {
  try {
    const connection = await getConnection()
    const result = await connection.request().query(empiresRequests.getEmpires)

    sendResponse(res, 200, result.recordset, { query: empiresRequests.getEmpires }, null)
  }catch(error) {
    console.error(error)
    sendResponse(res, 500, null, {}, serverErrors.INTERNAL_SERVER_ERROR)
  }
}

const getEmpireById = async(req, res = response) => {
  const { id } = req.params

  try {
    const connection = await getConnection()
    const result = await connection
      .request()
      .input('id_imperio', id)
      .query(empiresRequests.getEmpireById)

    if (result.recordset.length) return sendResponse(res, 200, result.recordset[0], { query: empiresRequests.getEmpireById, queryData: id }, null)
    sendResponse(res, 404, null, { query: empiresRequests.getEmpireById, queryData: [id] }, empiresErrors.EMPIRE_NOT_FOUND)
  } catch (error){
    console.error(error)
    sendResponse(res, 500, null, {}, serverErrors.INTERNAL_SERVER_ERROR)
  }
}

export {
  getEmpires,
  getEmpireById   
}
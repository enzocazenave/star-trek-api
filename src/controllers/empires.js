import { response } from 'express'
import { getConnection } from '../database/sql.js'
import sendResponse from '../helpers/sendResponse.js'
import empiresRequests from '../requests/empires.js'
import serverErrors from '../errors/server.js'

const getEmpires = async(req, res = response) => {
  try {
    const connection = await getConnection()
    const result = await connection.request().query(empiresRequests.getEmpires)

    sendResponse(res, 200, result.recordset, null)
  }catch(error) {
    console.error(error)
    sendResponse(res, 500, null, serverErrors.INTERNAL_SERVER_ERROR)
  }
}

export {
  getEmpires    
}
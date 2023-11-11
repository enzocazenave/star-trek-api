import { response } from "express"
import { getConnection } from "../database/sql.js"
import sendResponse from "../helpers/sendResponse.js"
import empiresRequests from '../requests/empires.js'
import empiresErrors from '../errors/empires.js'

 

const getEmpires = async(req, res = response) => {
  try {
    const connection = await getConnection()
    const result = await connection.request().query(empiresRequests.getImperios)

    sendResponse(res, 200, result.recordset, null)
  }catch(error) {
    console.error(error)
    sendResponse(res, 500, null, empiresErrors.EMPIRE_NOT_FOUND)
  }
}

export {
  getEmpires    
}
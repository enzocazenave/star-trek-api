import { response } from "express"
import { getConnection } from "../database/sql.js"
import sendResponse from "../helpers/sendResponse.js"
import fleetsRequests from '../requests/fleets.js'
import fleetError from '../errors/fleets.js'
import serverErrors from '../errors/server.js'

const getFleets = async (req, res = response) => {
    try{
        const connection = await getConnection()
        const result = await connection.request().query(fleetsRequests.getFleets)

        sendResponse(res, 200,result.recordset, null)
    } catch(error){
        console.error(error)
        sendResponse(res, 500,null , fleetError.FLEET_NOT_FOUND)
    }
}

export {
    getFleets
}
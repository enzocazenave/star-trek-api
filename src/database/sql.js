import { configDotenv } from 'dotenv'
import sql from 'mssql'

configDotenv()

const dbSettings = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  server: process.env.SQL_SERVER,
  database: process.env.SQL_DATABASE,
  options: {
    trustServerCertificate: true
  }
}

const getConnection = async() => {
  try {
    const pool = await sql.connect(dbSettings)
    return pool
  } catch(error) {
    console.error(error)
  }
}

export {
  getConnection,
  sql
}
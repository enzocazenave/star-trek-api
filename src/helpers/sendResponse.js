import { response } from 'express';

export default (res = response, statusCode, data, { query = null, queryData = null }, error) => {
  if (error) console.error(error)

  res.status(statusCode).json({
    ok: !error ?? true,
    data,
    executedQuery: { query, data: queryData },
    error
  })
}
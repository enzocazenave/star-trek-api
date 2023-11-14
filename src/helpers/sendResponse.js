import { response } from 'express';

export default (res = response, statusCode, data, error) => {
  if (error) console.error(error)

  res.status(statusCode).json({
    ok: !error ?? true,
    data,
    error
  })
}
import { responseHandler } from '../../handlers/ResponseHandler'
import { NextFunction, Request, Response } from 'express'

export const authorize = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-access-token']
  if (!token) {
    return res.status(403).json(
      responseHandler({
        message: 'Não foi informado um token'
      })
    )
  }
  return next()
}

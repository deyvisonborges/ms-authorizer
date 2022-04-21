/* eslint-disable @typescript-eslint/no-unused-vars */
import { responseHandler } from '../../handlers/ResponseHandler'
import { NextFunction, Request, Response } from 'express'

export const jwtAuthorizate = (req: Request, res: Response) => {
  const token = req.headers['x-access-token']
  console.log('meu ovo', token)
  if (!token) {
    res.json('nao existe')
    return
  }
  console.log('passou')
}

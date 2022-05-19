import { PrismaClient } from '../../clients/PrismaClient'
import { Request, Response } from 'express'

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const user = PrismaClient.user.create({
        data: {
          id: 1,
          access_token: '',
          created_at: new Date(),
          email: '',
          password: '',
          refresh_token: '',
          updated_at: new Date()
        }
      })
      res.json(user)
    } catch (err: any) {
      console.log(err)
      return
    }
  }

  async getUser(req: Request, res: Response) {
    const data = await PrismaClient.user.findMany()
    return res.json(data)
  }
}

export default new UserController()

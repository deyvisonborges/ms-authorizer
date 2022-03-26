import { PrismaClient } from '../../clients/PrismaClient'
import { CustomRequest } from '../../interfaces/CustomRequest'
import { Response } from 'express'
import { ConfirmEmailRequest } from './SignInControllerTypes'

class SignInController {
  async confirmEmail(req: CustomRequest<ConfirmEmailRequest>, res: Response) {
    try {
      const { email } = req.body

      const user = await PrismaClient.user.findFirst({
        where: {
          email
        }
      })

      if (!user?.email) {
        return res.json({
          message: 'e-mail não encontrado'
        })
      }

      return res.status(200).json({
        message: 'your receive a email',
        value: {
          id: user?.id,
          email: user?.email
        }
      })
    } catch (err) {
      throw new Error('could not confirm email')
    }
  }
}

export default new SignInController()

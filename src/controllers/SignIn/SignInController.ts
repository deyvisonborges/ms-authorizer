import { PrismaClient } from '../../clients/PrismaClient'
import { CustomRequest } from '../../interfaces/CustomRequest'
import { Response } from 'express'
import { ConfirmEmailRequest } from './SignInControllerTypes'
import { responseHandler } from '../../handlers/ResponseHandler'

class SignInController {
  async confirmEmail(req: CustomRequest<ConfirmEmailRequest>, res: Response) {
    try {
      const { email } = req.body

      /**
       * verifica se foi informado um email
       */
      if (typeof email !== 'string' || [null, ''].includes(email))
        return responseHandler({
          message: 'Você precisa informar um e-mail'
        })

      /**
       * se o e-mail foi informado, é realizado uma
       * busca para encontrar o dono do e-mail
       */
      const user = await PrismaClient.user.findFirst({
        where: {
          email
        }
      })

      // cenário em que o usuário nao existe
      if (!user?.email) {
        return responseHandler({
          message: 'usuário não encontrado'
        })
      }

      // cenário em que o e-mail existe
      return res.status(200).json(
        responseHandler<{
          message: string
          value: Record<string, unknown>
        }>({
          message: 'your receive a email',
          value: {
            id: user?.id,
            email: user?.email
          }
        })
      )
    } catch (err) {
      throw new Error('could not confirm email')
    }
  }
}

export default new SignInController()

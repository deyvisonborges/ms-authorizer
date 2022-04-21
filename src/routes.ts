import { Router } from 'express'
import SignInController from './controllers/SignIn/SignInController'
import { jwtAuthorizate } from './middlewares/auth/jwt'

const router = Router()

router.get(
  '/sign-in/confirm-email',
  jwtAuthorizate,
  SignInController.confirmEmail
)

export default router

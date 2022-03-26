import { Router } from 'express'
import SignInController from './controllers/SignIn/SignInController'

const router = Router()

router.get('/sign-in/confirm-email', SignInController.confirmEmail)

export default router

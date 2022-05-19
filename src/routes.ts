import { Router } from 'express'
// import { awsSNS } from './clients/AwsClient'
import SignInController from './controllers/SignIn/SignInController'
import UserController from './controllers/user/UserController'
// import { authorize } from './middlewares/auth/jwt'

const router = Router()

// router.get('/', (req, res) => {
//   return res.send({
//     awsSNS
//   })
// })

// router.post('/send-sms', (req, res) => {
//   const params = {
//     Protocol: 'EMAIL',
//     TopicArn: 'arn:aws:sns:us-east-1:974682151874:ms-authorizer',
//     Endpoint: req.body.email
//   }
//   awsSNS.subscribe(params, (err, data) => {
//     if (err) console.log(err)
//     console.log(data)
//   })
// })

// router.get(
//   '/sign-in/email-confirmation',
//   authorize,
//   SignInController.confirmEmail
// )
router.get('/sign-in/email-confirmation', SignInController.confirmEmail)
router.get('/user', UserController.createUser)
router.get('/user/get', UserController.getUser)
export default router

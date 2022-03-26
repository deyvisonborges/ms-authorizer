import ApplicationListener from './clients/ExpressClient'

ApplicationListener.listen(4000, () => {
  console.log('server listening in http://localhost:4000')
})

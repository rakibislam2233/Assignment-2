import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { userRoute } from './app/modules/User/user.routes'
const app: Application = express()
//parser
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/users', userRoute)
app.all('*', (req, res) => {
  res.status(400).json({
    success: false,
    message: 'Route not found!',
  })
})
app.use('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Welcome to my server',
  })
})
export default app

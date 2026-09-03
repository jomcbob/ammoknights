import 'dotenv/config'
import express from 'express'
import cors from "cors"
import indexRouter from './routes/indexRoute.js'

export function createApp() {
  const app = express()

  app.use(express.urlencoded({ extended: true }))
  app.use(cors())
  app.use(express.json())

  app.use("/", indexRouter)

  app.get('/{*splat}', (req, res, next) => {
    const err = new Error(`Page not found: ${req.originalUrl}`)
    err.statusCode = 404
    next(err)
  })

  app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({ error: err.message })
  })

  return app
}

if (process.env.NODE_ENV !== 'test') {
  const app = createApp()
  const PORT = process.env.PORT || 3000

  app.listen(PORT, () => {
    console.log(`My Express app - listening on port ${PORT}!`)
  })
}

export default createApp
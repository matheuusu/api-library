import express from 'express'
import db from './config/dbConnect.js'
import routes from './routes/index.js'

db.on('Error', console.log.bind(console, 'Connection Error'))
db.once('open', () => {
  console.log('Connection Established Successfully')
})

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app)

export default app

import mongoose from 'mongoose'

mongoose.connect(
  'mongodb+srv://mattusz:adlc8459.@cluster0.0zl2xjv.mongodb.net/alura-node'
)

const db = mongoose.connection

export default db

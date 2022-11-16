import mongoose from 'mongoose'

mongoose.connect(
  'mongodb+srv://mattusz:123@cluster0.adqgfzv.mongodb.net/alura-node'
)

const db = mongoose.connection

export default db

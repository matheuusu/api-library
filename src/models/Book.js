import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishingCompany: { type: String, required: true },
  pagesNumber: { type: Number }
})

const books = mongoose.model('Books', bookSchema)

export default books

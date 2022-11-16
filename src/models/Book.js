import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Authors',
    required: true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Companies',
    required: true
  },
  pagesNumber: { type: Number }
})

const books = mongoose.model('Books', bookSchema)

export default books

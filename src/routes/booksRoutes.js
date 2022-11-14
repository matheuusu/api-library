import express from 'express'
import bookController from '../controllers/booksController.js'

const router = express.Router()

router
  .get('/books', bookController.listBook)
  .get('/books/:id', bookController.listBookById)
  .post('/books', bookController.createBook)
  .put('/books/:id', bookController.updateBook)
  .delete('/books', bookController.deleteBook)

export default router

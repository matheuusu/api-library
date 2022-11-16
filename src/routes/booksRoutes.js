import express from 'express'
import BookController from '../controllers/booksController.js'

const router = express.Router()

router
  .get('/books', BookController.listBook)
  .get('/books/:id', BookController.listBookById)
  .post('/books', BookController.createBook)
  .put('/books/:id', BookController.updateBook)
  .delete('/books', BookController.deleteBook)

export default router

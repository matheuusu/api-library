import books from '../models/Book.js'

class BookController {
  static listBook = (req, res) => {
    books
      .find()
      .populate('author', 'name')
      .populate('company', 'name')
      .exec((err, book) => {
        res.status(200).json(book)
      })
  }

  static listBookById = (req, res) => {
    const id = req.params.id

    books
      .findById(id)
      .populate('author')
      .populate('company')
      .exec((err, book) => {
        if (err) {
          res
            .status(400)
            .json({ message: `${err.message} - book id not found` })
        } else {
          res.status(200).json(book)
        }
      })
  }

  static createBook = (req, res) => {
    const book = new books(req.body)

    book.save(err => {
      if (err) {
        res
          .status(500)
          .json({ message: `${err.message} - failed to create book` })
      } else {
        res.status(201).json(book)
      }
    })
  }

  static updateBook = (req, res) => {
    const id = req.params.id

    books.findByIdAndUpdate(id, { $set: req.body }, err => {
      if (!err) {
        res.status(200).json({ message: 'the update was successful' })
      } else {
        res
          .status(500)
          .json({ message: `${err.message} - failed to update the book` })
      }
    })
  }

  static deleteBook = (req, res) => {
    const id = req.body.id

    books.findByIdAndDelete(id, err => {
      if (!err) {
        res.status(200).json({ message: 'the book has deleted' })
      } else {
        res
          .status(500)
          .json({ message: `${err.message} - failed to delete the book` })
      }
    })
  }
}

export default BookController

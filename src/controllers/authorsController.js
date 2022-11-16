import authors from '../models/Author.js'

class AuthorController {
  static listAuthor = (req, res) => {
    authors.find((err, author) => {
      res.status(200).json(author)
    })
  }

  static listAuthorById = (req, res) => {
    const id = req.params.id

    authors.findById(id, (err, author) => {
      if (err) {
        res
          .status(400)
          .json({ message: `${err.message} - author id not found` })
      } else {
        res.status(200).json(author)
      }
    })
  }

  static createAuthor = (req, res) => {
    const author = new authors(req.body)

    author.save(err => {
      if (err) {
        res
          .status(400)
          .json({ message: `${err.message} - failed to create author` })
      } else {
        res.status(201).json(author)
      }
    })
  }

  static updateAuthor = (req, res) => {
    const id = req.params.id

    authors.findByIdAndUpdate(id, { $set: req.body }, err => {
      if (err) {
        res
          .status(500)
          .json({ message: `${err.message} - failed to update author` })
      } else {
        res.status(200).json({ message: 'the update was successful' })
      }
    })
  }

  static deleteAuthor = (req, res) => {
    const id = req.params.id

    authors.findByIdAndDelete(id, err => {
      if (err) {
        res
          .status(400)
          .json({ message: `${err.message} - failed to delete author` })
      } else {
        res.status(200).json({ message: 'the author was successfully deleted' })
      }
    })
  }
}

export default AuthorController

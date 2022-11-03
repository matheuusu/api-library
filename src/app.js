import express from 'express'
import db from './config/dbConnect.js'

db.on('Error', console.log.bind(console, 'Connection Error'))
db.once('open', () => {
  console.log('Connection Established Successfully')
})

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const books = [
  { id: 1, title: 'Senhor dos Anéis' },
  { id: 2, title: 'O Hobbit' },
  { id: 3, title: 'Anéis do Poder' }
]

function findBook(id) {
  return books.findIndex(book => book.id === id)
}

app.get('/', (req, res) => {
  res.status(200).json('Curso de Node')
})

app.get('/books', (req, res) => {
  res.status(200).json(books)
})

app.post('/books', (req, res) => {
  const book = req.body
  books.push(book)

  res.status(201).json(book)
})

app.get('/book/:id', (req, res) => {
  const indexBook = findBook(parseInt(req.params.id))

  res.status(200).json(books[indexBook])
})

app.put('/book/:id', (req, res) => {
  const indexBook = findBook(parseInt(req.params.id))

  books[indexBook].title = req.body.title

  res.status(200).json(books[indexBook])
})

app.delete('/book/:id', (req, res) => {
  const { id } = req.params
  const indexBook = findBook(parseInt(id))

  books.splice(indexBook, 1)

  res.status(200).json(books)
})

export default app

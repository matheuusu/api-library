import express from 'express'
import books from './booksRoutes.js'
import authors from './authorsRoutes.js'
import companies from './companiesRoutes.js'

const routes = app => {
  app.route('/').get((req, res) => {
    res.status(200).json({ message: 'Curso de Node' })
  })

  app.use(express.json(), books, authors, companies)
}

export default routes

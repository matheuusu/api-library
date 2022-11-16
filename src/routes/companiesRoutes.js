import express from 'express'
import CompanyController from '../controllers/companiesController.js'

const router = express.Router()

router
  .get('/companies', CompanyController.listCompanies)
  .get('/companies/:id', CompanyController.listCompanyById)
  .post('/companies', CompanyController.createCompany)
  .put('/companies/:id', CompanyController.updateCompany)
  .delete('companies/:id', CompanyController.deleteCompany)

export default router

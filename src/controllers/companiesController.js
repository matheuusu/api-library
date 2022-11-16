import companies from '../models/Company.js'

class CompanyController {
  static listCompanies = (req, res) => {
    companies.find((err, company) => {
      res.status(200).json(company)
    })
  }

  static listCompanyById = (req, res) => {
    const id = req.params.id

    companies.findById(id, (err, company) => {
      if (err) {
        res
          .status(400)
          .json({ message: `${err.message} - company id not found` })
      } else {
        res.status(200).json(company)
      }
    })
  }

  static createCompany = (req, res) => {
    const company = new companies(req.body)

    company.save(err => {
      if (err) {
        res
          .status(500)
          .json({ message: `${err.message} - failed to create company` })
      } else {
        res.status(201).json(company)
      }
    })
  }

  static updateCompany = (req, res) => {
    const id = req.params.id

    companies.findByIdAndUpdate(id, { $set: req.body }, err => {
      if (err) {
        res
          .status(500)
          .json({ message: `${err.message} - company was not updated` })
      } else {
        res.status(200).json('company updated successfully')
      }
    })
  }

  static deleteCompany = (req, res) => {
    const id = req.params.id

    companies.findByIdAndDelete(id, err => {
      if (err) {
        res
          .status(500)
          .json({ message: `${err.message} - company was not found` })
      } else {
        res.status(200).json({ message: 'the company has deleted' })
      }
    })
  }
}

export default CompanyController

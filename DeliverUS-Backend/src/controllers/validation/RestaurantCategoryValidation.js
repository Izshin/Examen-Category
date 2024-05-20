import { check } from 'express-validator'
const create = [
  check('name').exists().isString().isLength({ min: 1, max: 50 }).trim()
]

export { create }

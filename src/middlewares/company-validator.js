import {body, param} from "express-validator"
import { validateFields } from './validate-fields.js'
import { handleErrors } from './handle-errors.js'
import { validateJWT } from './validate-jwt.js'
import { hasRoles } from './validate-roles.js'
import { categoryExists, companyExists, numberExists, usernameExists } from "../helpers/db-validator.js"

export const createCompanyValidator =[
    validateJWT,
    hasRoles("ADMIN"),
    body("name").notEmpty().withMessage("Name is required"),
    body("name").custom(companyExists),
    body("category").notEmpty().withMessage("Category is required"),
    body("category").isMongoId().withMessage("It is not a valid Category MongoID"),
    body("category").custom(categoryExists),
    body("representative").notEmpty().withMessage("Representative is required"),
    body("representative").isMongoId().withMessage("It is not a valid User MongoID"),
    body("representative").custom(usernameExists),
    body("phone").isMobilePhone().withMessage("It is not a valid phone format"),
    body("phone").custom(numberExists),
    validateFields,
    handleErrors
]

export const updateCompanyValidator = [
    validateJWT,
    hasRoles("ADMIN"),
    body("name").notEmpty().withMessage("Name is required"),
    body("name").custom(companyExists),
    body("category").notEmpty().withMessage("Category is required"),
    body("category").isMongoId().withMessage("It is not a valid Category MongoID"),
    body("category").custom(categoryExists),
    body("representative").notEmpty().withMessage("Representative is required"),
    body("representative").isMongoId().withMessage("It is not a valid User MongoID"),
    body("representative").custom(usernameExists),
    body("phone").isMobilePhone().withMessage("It is not a valid phone format"),
    body("phone").custom(numberExists),
    validateFields,
    handleErrors
]
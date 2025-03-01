import { body } from "express-validator"
import { validateFields } from "./validate-fields.js"
import { categoryExists } from "../helpers/db-validator.js"
import { handleErrors } from "./handle-errors.js"
import { hasRoles } from "./validate-roles.js"
import { validateJWT } from "./validate-jwt.js"

export const addCategoryValidator = [
    validateJWT,
    hasRoles("ADMIN"),
    body("name").notEmpty().withMessage("The field name is required"),
    body("description").notEmpty().withMessage("The field description is required"),
    body("name").custom(categoryExists),
    validateFields,
    handleErrors,
]

export const updateCategoryValidator = [
    validateJWT,
    hasRoles('ADMIN'),
    body("name").custom(categoryExists),
    validateFields,
    handleErrors
]

export const deleteCategoryValidator = [
    validateJWT,
    hasRoles('ADMIN'),
    validateFields,
    handleErrors
]
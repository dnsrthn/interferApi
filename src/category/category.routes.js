import { addCategoryValidator, updateCategoryValidator, deleteCategoryValidator} from "../middlewares/category-validator.js"
import { addCategory, updateCategory,deleteCategory } from "./category.controller.js"
import { Router } from "express"
import swaggerJsDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

const router = Router()

/**
 * @swagger
 * /addcategory:
 *   post:
 *     summary: Add a new category
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "New Category"
 *     responses:
 *       200:
 *         description: Category added successfully
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /updtcategory/{cid}:
 *   put:
 *     summary: Update an existing category
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: cid
 *         schema:
 *           type: string
 *         required: true
 *         description: Category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Category"
 *     responses:
 *       200:
 *         description: Category updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Category not found
 */

/**
 * @swagger
 * /deletecategory/{cid}:
 *   delete:
 *     summary: Delete a category
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: cid
 *         schema:
 *           type: string
 *         required: true
 *         description: Category ID
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 */
router.post("/addcategory", addCategoryValidator, addCategory)
router.put("/updtcategory/:cid", updateCategoryValidator, updateCategory)
router.delete("/deletecategory/:cid", deleteCategoryValidator, deleteCategory)

export default router
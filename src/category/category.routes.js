import { addCategoryValidator, updateCategoryValidator, deleteCategoryValidator} from "../middlewares/category-validator.js"
import { addCategory, updateCategory,deleteCategory } from "./category.controller.js"
import { Router } from "express"
import swaggerJsDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

const router = Router()


router.post("/addCategory", addCategoryValidator, addCategory)
/**
 * @swagger
 * /addCategory:
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
 *                 description: The name of the category
 *                 example: Electronics
 *     responses:
 *       200:
 *         description: Category added successfully
 *       400:
 *         description: Invalid input
 */
router.put("/updtCategory/:cid", updateCategoryValidator, updateCategory)
/**
 * @swagger
 * /updtCategory/{cid}:
 *   put:
 *     summary: Update an existing category
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: cid
 *         schema:
 *           type: string
 *         required: true
 *         description: The category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The new name of the category
 *                 example: Gadgets
 *     responses:
 *       200:
 *         description: Category updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Category not found
 */

router.delete("/deleteCategory/:cid", deleteCategoryValidator, deleteCategory)
/**
 * @swagger
 * /deleteCategory/{cid}:
 *   delete:
 *     summary: Delete a category
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: cid
 *         schema:
 *           type: string
 *         required: true
 *         description: The category ID
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Category not found
 */
export default router
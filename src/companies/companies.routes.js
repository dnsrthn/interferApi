import express from "express";

import { addCompany, generateReports, updateCompany } from "./companies.controller.js"
import { createCompanyValidator, updateCompanyValidator } from "../middlewares/company-validator.js";

const router = express.Router();

router.post("/addCompany", createCompanyValidator, addCompany)
/**
 * @swagger
 * /addCompany:
 *   post:
 *     summary: Add a new company
 *     tags: [Companies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the company
 *                 example: "Example Company"
 *               address:
 *                 type: string
 *                 description: The address of the company
 *                 example: "123 Example Street"
 *               phone:
 *                 type: string
 *                 description: The phone number of the company
 *                 example: "123-456-7890"
 *     responses:
 *       200:
 *         description: Company added successfully
 *       400:
 *         description: Invalid input
 */
router.put("/updateCmpany", updateCompanyValidator, updateCompany)
/**
 * @swagger
 * /updateCmpany:
 *   put:
 *     summary: Update an existing company
 *     tags: [Companies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The ID of the company
 *                 example: "12345"
 *               name:
 *                 type: string
 *                 description: The name of the company
 *                 example: "Updated Company"
 *               address:
 *                 type: string
 *                 description: The address of the company
 *                 example: "456 Updated Street"
 *               phone:
 *                 type: string
 *                 description: The phone number of the company
 *                 example: "987-654-3210"
 *     responses:
 *       200:
 *         description: Company updated successfully
 *       400:
 *         description: Invalid input
 */
router.post("/createReports", generateReports)
/**
 * @swagger
 * /createReports:
 *   post:
 *     summary: Generate reports for companies
 *     tags: [Companies]
 *     responses:
 *       200:
 *         description: Reports generated successfully
 *       400:
 *         description: Error generating reports
 */
export default router;
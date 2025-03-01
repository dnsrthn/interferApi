import express from "express";

import { addCompany, generateReports, updateCompany } from "./companies.controller.js"
import { createCompanyValidator, updateCompanyValidator } from "../middlewares/company-validator.js";

const router = express.Router();
/**
 * @swagger
 * /registerCompany:
 *   post:
 *     summary: Register a new company
 *     tags: [Companies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Company'
 *     responses:
 *       200:
 *         description: Company registered successfully
 *       400:
 *         description: Bad request
 * 
 * /updateCompany:
 *   put:
 *     summary: Update an existing company
 *     tags: [Companies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Company'
 *     responses:
 *       200:
 *         description: Company updated successfully
 *       400:
 *         description: Bad request
 * 
 * /report:
 *   post:
 *     summary: Generate a report of companies
 *     tags: [Companies]
 *     responses:
 *       200:
 *         description: Report generated successfully
 *       400:
 *         description: Bad request
 */
router.post("/registerCompany", createCompanyValidator, addCompany)
router.put("/updateCompany", updateCompanyValidator, updateCompany)
router.post("/report", generateReports)

export default router;
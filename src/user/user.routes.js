import express from 'express'
import { updateUser, updatePassword, deleteUser, updateAdmin, deleteAdmin } from './user.controller.js'
import {  updatePasswordValidator, updateUserValidator, deleteUserValidator  } from "../middlewares/user-validator.js"
import router from '../auth/auth.routes.js'
/**
 * @swagger
 * /updatePassword:
 *   patch:
 *     summary: Update user password
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password updated successfully
 *       400:
 *         description: Invalid request
 * 
 * /updatedAdmin:
 *   put:
 *     summary: Update admin details
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Admin updated successfully
 *       400:
 *         description: Invalid request
 * 
 * /updateUser/{uid}:
 *   put:
 *     summary: Update user details
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Invalid request
 * 
 * /deleteAdmin:
 *   delete:
 *     summary: Delete admin
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: Admin deleted successfully
 *       400:
 *         description: Invalid request
 * 
 * /deleteUser/{uid}:
 *   delete:
 *     summary: Delete user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       400:
 *         description: Invalid request
 */
router.patch('/updatePassword', updatePasswordValidator, updatePassword)
router.put('/updatedAdmin', updateUserValidator, updateAdmin)
router.put('/updateUser/:uid', updateUserValidator, updateUser)
router.delete('/deleteAdmin', deleteUserValidator, deleteAdmin )
router.delete('/deleteUser/:uid',deleteUserValidator, deleteUser)

export default router
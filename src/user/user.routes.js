import express from 'express'
import { updateUser, updatePassword, deleteUser, updateAdmin, deleteAdmin } from './user.controller.js'
import { updateUserValidator, updatePasswordValidator, deleteUserValidator } from '../middlewares/user-validator.js'

const router = express.Router()

router.patch('/updatePassword', updatePasswordValidator, updatePassword)
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
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.put('/updatedAdministrator', updateUserValidator, updateAdmin)
/**
 * @swagger
 * /updatedAdministrator:
 *   put:
 *     summary: Update administrator details
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
 *         description: Administrator updated successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.put('/updateUser/:uid', updateUserValidator, updateUser)
/**
 * @swagger
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
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.delete('/deleteAdministrator', deleteUserValidator, deleteAdmin )
/**
 * @swagger
 * /deleteAdministrator:
 *   delete:
 *     summary: Delete administrator
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               adminId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Administrator deleted successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.delete('/deleteUser/:uid',deleteUserValidator, deleteUser)
/**
 * @swagger
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
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */

export default router
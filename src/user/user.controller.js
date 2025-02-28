import User from "../user/user.model.js"
import { hash, verify } from "argon2"


export const updatePassword = async (req, res) => {
    try{
        const { usuario } = req
        const { password } = req.body
        const { newPassword } = req.body
        const oldPassword = await verify(usuario.password, password)

        if(!oldPassword){
            return res.status(400).json({
                success: false, msg: "Password does not match previous one"
            })
        }
        const user = await User.findById(usuario._id)
        const comparePassword = await verify(user.password, newPassword)

        if(comparePassword){
            return res.status(400).json({
                success: false, msg: "New password cannot be the same as old one"
            })
        }

        const encryptedPassword = await hash(newPassword)
        await User.findByIdAndUpdate(usuario._id, {password: encryptedPassword}, {new: true})
        return res.status(200).json({
            success: true, msg: "Password Was Succesfully Updated",
        })
    }catch(err){
        return res.status(500).json({
            success: false, msg: "Error updating password", error: err.message
        })
    }
}

export const updateAdmin = async (req, res) => {
    try {
        const { usuario } = req
        const data = req.body

        const user = await User.findByIdAndUpdate(usuario._id, data, { new: true })

        res.status(200).json({
            success: true, msg: "User Updated Succesfully", user: user
        })
        console.log(user)
    }catch(err){
        res.status(500).json({
            success: false, msg: "An errror ocurred while updating user", error: err.message
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { uid } = req.params 
        const data = req.body 
        const user = await User.findById(uid)

        if (!user) {
            return res.status(400).json({
                success: false, msg: "User not found"
            })
        }
        if (user.role === "ADMIN") {
            return res.status(403).json({
                success: false, msg: "You cannot modify another admin"
            })
        }
        const updatedUser = await User.findByIdAndUpdate(uid, data, { new: true })
        res.status(200).json({
            success: true, msg: "user was updated", user: updatedUser
        })
    } catch (err) {
        res.status(500).json({
            success: false, msg: "An error ocurred while updating user", error: err.message,
        })
    }
}

export const deleteAdmin = async (req, res) => {
    try{
        const { usuario } = req

        await User.findByIdAndUpdate(usuario, {status: false}, {new: true})
        return res.status(200).json({
            success: true, message: "User was deleted Succesfully"
        })
    }catch(err){
        return res.status(500).json({
            success: false, message: "An error whuledeleting User", error: err.message
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { uid } = req.params
        const user = await User.findById(uid)
        
        if (!user) {
            return res.status(400).json({
                success: false, msg: "User was not found"
            })
        }
        if (user.role === "ADMIN") {
            return res.status(403).json({
                success: false, msg: "Aaction forbiden: You cannot delete an Administrator"
            })
        }
        await User.findByIdAndUpdate(uid, { status: false }, { new: true })
        return res.status(200).json({
            success: true, msg: "User succesfully deleted from all registries"
        })
    } catch (err) {
        return res.status(500).json({
            success: false, msg: "An error ocurred while deleting user", error: err.message
        })
    }
}
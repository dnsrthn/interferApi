import User from '../src/user/user.model.js'
import Category from '../src/category/category.model.js'    
import {hash} from 'argon2'

export const defaultAdmin = async () => {
    try {
        const existingAdmin = await User.findOne({ role: 'ADMIN' })

        if (!existingAdmin) {
            const aEmail = 'admin@gmail.com'
            const aPassword = 'Admin123!'

            const encryptedPassword = await hash(aPassword)

            const aUser = new User({
                name: 'Admin',
                username: 'administrator1',
                email: aEmail,
                password: encryptedPassword,
                role: 'ADMIN',
            })

            await aUser.save()
            console.log('The default admin has been created successfully')
        } else {
            console.log('There is already an admin in the system, another one will not be created')
        }
    } catch (err) {
        console.error('Error creating default admin:', err)
    }
}


export const defaultCategory = async () => {
    try {
        const name = "Default"
        const description = "This is the default category"

        const existingCategory = await Category.findOne({ name })
        if (!existingCategory) {
        const newCategory = new Category({
            name, description
        })

        await newCategory.save()
        console.log("The default category has been created successfully")

        }else{
        console.log("Default Category already exists in the system, another one will not be created")
        }
    } catch (err) {
        console.error("An error ocurred while creating categories:", err)
    }

}
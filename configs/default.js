import User from '../src/user/user.model.js'
import {hash} from 'argon2'

export const createDefaultAdmin = async () => {
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

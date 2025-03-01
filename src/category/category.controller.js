import Category from './category.model.js'

export const addCategory = async (req, res) => {
    try {
        const data=req.body
        const category = await Category.create(data)

        return res.status(201).json({
            success: true, message: "Category was created successfully", category
        })

    }catch(err){
        return res.status(400).json({
            success: false, message: "An error ocurred while creating the Category", error: err.message
        })
    }
}

export const updateCategory = async (req, res) => {
    try{
        const { cid } = req.params
        const data = req.body
        const category = await Category.findByIdAndUpdate(cid, data, { new: true })

        return res.status(200).json({
            success: true, message: 'Category was sucessfully updated', category
        })
    }
    catch(err){
        return res.status(500).json({
            success: false, message: 'Error updating category', error: err.message
        })
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const { cid } = req.params;
        
        const category = await Category.findByIdAndUpdate(cid, { status: false }, { new: true })

        return res.status(200).json({
            success: true,  message: 'Category was Succesfully deleted', category
        })

    } catch (err) {
        return res.status(500).json({
            success: false, message: 'An error ocurred while deleting category', error: err.message
        })
    }
}
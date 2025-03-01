import { Schema, model } from "mongoose"

const companiesSchema = new Schema(
{
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    established: {
        type: Number,
        required: true,
        min: 1900,
        max: 2025
        },
    impactScale: {
        type: String,
        enum: ["Low", "Medium", "High"],
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    phone:{
        type: String,
        minLength: 8,
        maxLength: 8,
        required: [true, "Phone number is required"]

    },
    rep: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    address: {
        type: String,
        maxLength: 100,
        default: "Not specified",
    },
    status: {
        type: Boolean,
        default: true
    }
},
{
    versionKey: false,
    timestamps: true,
}
)

companiesSchema.pre("save", function(next) {
    const currentYear = new Date().getFullYear()
    this.experienceYears = currentYear - this.established
    next()
})

companiesSchema.methods.toJSON = function () {
    const { __v, _id, ...company } = this.toObject()
    company.cid = _id
    return company
}

export default model("Company", companiesSchema)

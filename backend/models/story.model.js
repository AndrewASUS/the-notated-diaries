import mongoose from "mongoose"


const strotySchema = new mongoose.Schema(
    {
        consultant: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        entry: {
            type: String,
            required: true
        }
    }, { timestamps: true }
)


export const Story = mongoose.model("Story", strotySchema)

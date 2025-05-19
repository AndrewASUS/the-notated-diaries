import mongoose from "mongoose"
import { Story } from "../models/story.model.js"



// CREATE
export const createStory = async (req, res) => {
    const story = req.body

    if (!story.entry || !story.title || !story.consultant) {
        return res.status(400).json({ success: false, message: "Please provide all fields" })
    }

    const newStory = new Story(story)

    try {
        await newStory.save()
        res.status(201).json({ success: true, data: newStory })
    } catch (error) {
        console.error("Error in Create product function:", error.message)
        res.status(500).json({ success: false, message: "Server error" })
    }
}



// READ (ALL)
export const getAllStories = async (req, res) => {
    try {
        const stories = await Story.find({}) // Empty object fetches all stories
        res.status(200).json({ success: true, data: stories })
    } catch (error) {
        console.log("Errorin fetching stories", error.message)
        res.status(500).json({ success: false, message: "Server error" })
    }
}



// UPDATE
export const updateStory = async (req, res) => {
    const { id } = req.params
    const story = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Story Id" })
    }

    try {
        const updatedStory = await Story.findByIdAndUpdate(id, story, { new: true }) // {new:true} will give you the updated story
        res.status(200).json({ success: true, data: updatedStory })
    } catch (error) {
        res.status(500).json({ success: false, message: "Server orror" })
    }
}



// DELETE
export const deleteStory = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Story Id" })
    }

    try {
        await Story.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Story deleted" })
    } catch (error) {
        console.log("Error in deleting story", error.message)
        res.status(500).json({ success: false, message: "Server error" })
    }
}

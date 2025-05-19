import express from "express"
import { createStory, deleteStory, getAllStories, updateStory } from "../controller/strory.controller.js"


const router = express.Router()


router.post("/", createStory) // CREATE
router.get("/", getAllStories) // READ
router.put("/:id", updateStory) // UPDATE
router.delete("/:id", deleteStory) // DELETE


export default router

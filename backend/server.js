import express from "express" // Update package.json to: "type": "module",
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import storyRoutes from "./routes/story.route.js"
import path from "path" // const __dirname = path.resolve()

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

const __dirname = path.resolve()


app.use(express.json()) // Allows to accept JSON data in the body


app.use("/api/stories", storyRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")))

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server stareted at http://localhost:" + PORT)
    })
})

import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./database/connectDB.js"
import nodeRouter from "./routes/node.route.js"
import edgeRouter from "./routes/edge.route.js"
const app = express()
dotenv.config()
connectDb()

app.use(cors())
app.use(express.json())
app.use("/api", nodeRouter)
app.use("/api", edgeRouter)

app.listen(process.env.PORT || 4000, () => {
    console.log("your app is running in the port", process.env.PORT )
})


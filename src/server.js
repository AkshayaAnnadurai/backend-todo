const express=require("express")
const cors=require("cors")
const dbConnect=require("../db")
const userRouter=require("./features/user.router")
let PORT=8000

const app=express()
app.use(express.json())
app.use(cors())
app.use("/users", userRouter);
app.listen(PORT,async()=>{
await dbConnect()
console.log(`Listening on http://localhost:${PORT}`);
})
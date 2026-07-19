import express from "express";
import router from"./routes/route.js"
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));


app.use(express.json());
app.use(cookieParser())
app.use("/api",router)
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
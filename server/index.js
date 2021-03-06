const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
const port = process.env.PORT || 9000


dotenv.config({path: "./config/.env"});
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public/images")));


connectDB()


const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/images");
	},

	filename: (req, file, cb) => {
		cb(null, req.body.name);
	},
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
	try{
		return res.status(200).json("File has been uploaded");
	}catch(err) {
		console.error(err)
	}
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(port, () => {
	console.log(`Backend is running on port ${port}`);
});



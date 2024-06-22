const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// 환경변수 로드
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// MongoDB 연결 설정
mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

// json 형식의 데이터를 파싱할 수 있도록 설정
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

import express, { json, urlencoded } from "express";
import morgan from "morgan";
import sendEmail from "./mailer.js";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.post("/sendmail", async (req, res) => {
	try {
		const { body } = req;
		const info = await sendEmail(body);
		res.status(200).send({ info });
	} catch (error) {
		console.log(error);
	}
});

app.use(express.static(resolve(__dirname, "../frontend/build")));

const server = app.listen(PORT, () =>
	console.log(`Serve on http://localhost:${PORT}`)
);
server.on("error", (error) => console.log(error));

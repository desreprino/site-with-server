import express, { json, urlencoded } from "express";
import morgan from "morgan";
import sendEmail from "./mailer.js";

const app = express();
const PORT = process.env.PORT || 5000;

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

const server = app.listen(PORT, () =>
	console.log(`Serve on http://localhost:${PORT}`)
);
server.on("error", (error) => console.log(error));

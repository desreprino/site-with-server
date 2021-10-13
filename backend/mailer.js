import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "desarrollorepuestosrino@gmail.com",
		pass: "desrr2021",
	},
});

const sendEmail = async ({
	from = "desarrollorepuestosrino@gmail.com",
	to = "desarrollorepuestosrino@gmail.com",
	subject,
	text = "",
	html = "",
}) => {
	const mailOptions = {
		from,
		to,
		subject,
		text,
		html,
	};
	const info = transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});

	return info;
};

export default sendEmail;

const express = require("express");
const app = express();

// app.use(logger);

app.get("/", logger, (req, res) => {
	console.log("Home Page");
	res.send("<h1>Home Page</h1>");
});

app.get("/users", auth, (req, res) => {
	console.log(`User is admin = ${req.admin}`);
	console.log("Users Page");
	res.send("<h1>Users Page</h1>");
});

app.listen(5000);

function logger(req, res, next) {
	console.log("log");
	next();
}
function auth(req, res, next) {
	req.admin = true;
	if (req.query.admin === "true") {
		next();
	} else {
		console.log("No Auth");
	}
	next();
}

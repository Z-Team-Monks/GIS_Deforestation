const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const monogoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// importing routes
const authRoute = require("./routes/authRoute");
// const uploadRoute = require("./routes/uploadRoute");
const forestsRoute = require("./routes/forestsRoute");
const protectRoute =
  require("./routeControllers/authentication/auth").protectRoute;
const usersRoute = require("./routes/usersRoute");
const discussionsRoute = require("./routes/discussionsRoute");
const donationsRoute = require("./routes/donationsRoute");
const errorHandler = require("./routeControllers/error/errorHandler");
const AppError = require("./utils/appError");

app = express();

// MIDDLEWARES

// header sender helmet for security | security http headers
app.use(helmet());

// configure cors for development
// const corsOptions = {
//     origin: "http://127.0.0.1:3000/",
//     optionsSuccessStatus: 200
// }
app.use(cors());
// rate limit
const limiter = rateLimit({
  max: 200,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP! please try again later in an hour.",
});
app.use("/api", limiter);

// logging for development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); //for logging
}

// use cookie parser to get nicely formatted cookie
app.use(cookieParser());

// read and parse json data from request body & limit size of request data
app.use(express.json({ limit: "10kb" }));

// sanitize request body for NoSql injection attacks
app.use(monogoSanitize());

// sanitize request body for NoSql injection attacks
app.use(xssClean());

// prevent parameter pollution attacks
app.use(hpp());

// app.use(express.static(`${__dirname}/public`));  //to serve static contents

app.use("/api/v1/areas", forestsRoute);
app.use("/api/v1/users", protectRoute, usersRoute);
app.use("/api/v1/discussion", discussionsRoute);
app.use("/api/v1/donation", donationsRoute);
app.use("/api/v1/auth", authRoute);
// app.use("/api/v1/upload", uploadRoute);
app.all("*", (req, resp, next) => {
  next(new AppError(`couldn't find ${req.originalUrl} page`, 404));
});

app.use(errorHandler);

module.exports = app;

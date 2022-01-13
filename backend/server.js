const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("uncaughtException: shutting down....");
  console.error(err.name, err);
  process.exit(1);
});

const app = require("./app");
dotenv.config({ path: "./config.env" });

const DB_LOCAL = process.env.DATABASE_LOCAL;
mongoose
  .connect(DB_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => {
    // console.log(conn.connection);
    console.log("Database Connected Successfully!");
  })
  .catch((err) => {
    console.error("DB connection error: \n", err.name, err.message);
  });

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`server is listening on ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("unhandledRejection: shutting down....");
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

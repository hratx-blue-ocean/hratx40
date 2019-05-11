const createError = require("http-errors");
const logger = require("morgan");
const express = require("express");
const app = express();

app.use(express.static('../client/public'));

// open up CORS
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(logger("dev"));
app.use(express.json({ urlencoded: true }));
// You can place your routes here, feel free to refactor:
const {
  example,
  seedTopics,
  search,
  addFavorite,
  deleteFavorite,
  getAllTopics,
  news,
  charity,
  login,
  signup,
  volunteering,
  getFavorites,
  newsCache
} = require("./routes");
app.use("/api/example", example);
app.use("/api/seedTopics", seedTopics);
app.use("/api/searchTopics", search);
app.use("/api/addFavorites", addFavorite);
app.use("/api/logins", login);
app.use("/api/deleteFavorites", deleteFavorite);
app.use("/api/getAllTopics", getAllTopics);
app.use("/api/news", news);
app.use(`/api/charities`, charity);
app.use(`/api/signups`, signup);
app.use(`/api/volunteers`, volunteering);
app.use(`/api/getFavorites`, getFavorites);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Uncomment when server is stable, this will run 37 API calls 10 times per day
// newsCache();

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.json({
    message: err.message,
    err: err
  });
});

module.exports = app;

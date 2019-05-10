<<<<<<< HEAD
const example = require('./example');
const charity = require('./charity');
const seedTopics = require('./seedTopics');
const search = require('./search');
const addFavorite = require('./favorites');
const login = require('./login')
const news = require("./newsfeed");
const deleteFavorite = require('./deleteFave');
const getAllTopics = require('./getAllTopics');

module.exports = { example, seedTopics, search, addFavorite, deleteFavorite, charity, getAllTopics, news, login }
=======
const example = require("./example");
const charity = require("./charity");
const seedTopics = require("./seedTopics");
const search = require("./search");
const addFavorite = require("./favorites");
const login = require("./login");
const news = require("./newsfeed");
const deleteFavorite = require("./deleteFave");
const getAllTopics = require("./getAllTopics");
const signup = require("./signup");
const volunteering = require("./volunteer.js");

module.exports = {
  example,
  seedTopics,
  search,
  addFavorite,
  deleteFavorite,
  charity,
  getAllTopics,
  news,
  login,
  signup,
  volunteering
};
>>>>>>> 8fdd2aecc2c5834643500b038aba9e8200b4d78e

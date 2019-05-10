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
>>>>>>> 2478f37bb4e9d03c1714d4c44fde55665a461b6a

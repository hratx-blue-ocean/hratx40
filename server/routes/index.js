const example = require("./example");
const charity = require("./charity");
const seedTopics = require("./seedTopics");
const search = require("./search");
const addFavorite = require("./favorites");
const login = require("./login");
const news = require("./newsfeed");
<<<<<<< HEAD
const deleteFavorite = require("./deleteFave");
const getAllTopics = require("./getAllTopics");

module.exports = {
  example,
  seedTopics,
  search,
  addFavorite,
  deleteFavorite,
  charity,
  getAllTopics,
  news,
  login
};
=======
const deleteFavorite = require('./deleteFave');
const getAllTopics = require('./getAllTopics');
const signup = require('./signup');
const volunteering = require('./volunteer.js');

module.exports = { example, seedTopics, search, addFavorite, deleteFavorite, charity, getAllTopics, news, login, signup, volunteering }
>>>>>>> 9ed0dd512e8f7b3499447899fda5a1f9a382c070

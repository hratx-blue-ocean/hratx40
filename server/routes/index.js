const example = require('./example');
const seedTopics = require('./seedTopics');
const search = require('./search');
const addFavorite = require('./favorites');
const news = require("./newsfeed");
const deleteFavorite = require('./deleteFave');
const getAllTopics = require('./getAllTopics');

module.exports = { example, seedTopics, search, addFavorite, deleteFavorite, getAllTopics, news  }
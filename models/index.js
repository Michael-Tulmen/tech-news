// import all models
const Post = require("./Post");
const User = require("./User");
const Vote = require("./Vote");

// create associations
User.hasMany(Post, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "user_id",
});

module.exports = { User, Post };

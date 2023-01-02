//TODO: seeds script should come here, so we'll be able to put some data in our local env
const { faker } = require("@faker-js/faker");

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// mongoose.set("debug", true);

require("../models/User");
require("../models/Item");
require("../models/Comment");

const Item = mongoose.model("Item");
const Comment = mongoose.model("Comment");
const User = mongoose.model("User");

//100 users, 100 products, and 100 comments.
const createRandomUser = () => {
  return {
    username: faker.name.firstName() + faker.random.word(),
    email: faker.internet.email(),
  };
};

const createRandomItem = () => {
  const randomWords = faker.random.words(4);

  return {
    title: randomWords,
    description: faker.lorem.sentence(),
    tagList: randomWords,
  };
};

const seedData = async () => {
  let user = new User(createRandomUser());
  user.setPassword(user.username);
  await user.save();
  console.log("user created");

  let item = new Item(createRandomItem());
  item.seller = user;
  await item.save();
  console.log("item created");

  let comment = new Comment({ body: faker.lorem.sentence() });
  comment.item = item;
  comment.seller = user;
  await comment.save();
  console.log("comment created");
};

const seeds = async () => {
  for (let i = 0; i < 100; i++) {
    await seedData();
  }
  mongoose.connection.close();
};

seeds();

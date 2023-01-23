require("dotenv").config();

const Twitter = require("twitter-v2");

const client = new Twitter({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_KEY_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

client
  .get("tweets", { ids: "1617633094055624705" })
  .then((data) => console.log(data.data[0]));

// client
//   .post("tweets", {
//     text: "Hows that? 44.3%",
//     reply: { in_reply_to_tweet_id: "1617633094055624705" },
//   })
//   .then((data) => console.log(data));

// tweet id 1617633094055624705

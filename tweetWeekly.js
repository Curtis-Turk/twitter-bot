import Twit from "twit";
import * as dotenv from "dotenv";
dotenv.config();

console.log(process.env.API_KEY);

let T = new Twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_KEY_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
  strictSSL: true,
});

T.post(
  "statuses/update",
  { status: "hello world!" },
  function (err, data, response) {
    console.log(data);
  }
);

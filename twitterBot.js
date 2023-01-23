import puppeteer from "puppeteer";
import * as dotenv from "dotenv";
dotenv.config();

let browser = null;
let page = null;

(async () => {
  browser = await puppeteer.launch({ headless: false });
})();

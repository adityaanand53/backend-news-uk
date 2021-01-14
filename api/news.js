const express = require('express');
const router = express.Router();

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.newsAPIKey);

router.get("/headlines", (req, res, next) => {
  getNews("")
    .then((newsResults) => {
      res.json({ data: newsResults, success: true });
    })
    .catch(next);
});

router.get("/news", (req, res, next) => {
  getNews(req.query.q)
    .then((newsResults) => {
      res.json({ data: newsResults, success: true });
    })
    .catch(next);
});

const getNews = async (query) => {
  try {
    if (query) {
      return await newsapi.v2.everything({
        q: query,
      });
    } else {
      return await newsapi.v2.topHeadlines({
        country: "gb",
      });
    }
  } catch (err) {
    throw err;
  }
};

module.exports = router;
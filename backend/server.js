const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 3000;

app.use(cors());

app.get("/api/tweets", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.twitter.com/2/tweets/search/recent",
      {
        params: {
          query: "from:XpressSoftball",
          "tweet.fields": "created_at,public_metrics",
          expansions: "author_id,attachments.media_keys",
          "user.fields": "profile_image_url",
          "media.fields": "url,preview_image_url",
        },
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching tweets" });
  }
});

app.listen(port, () => {
  console.log(`Twitter proxy server listening at http://localhost:${port}`);
});

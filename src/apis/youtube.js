import axios from "axios";

const KEY = "AIzaSyBtq3oBZo4kWF0__lE0D0zMqFO2etWpAVM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 9,
    key: KEY
  }
});

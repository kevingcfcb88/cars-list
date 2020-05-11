import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID fbZa3ih00ojZ68VJBYQ8g4j4SAGg-Tp-drnX8si9-TM",
  },
});

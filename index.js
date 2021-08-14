const axios = require("axios");

class Vibie {
  constructor() {
    this.BASE_URL = "https://api.vibie.live";
    this.headers = {
      Host: "api.vibie.live",
      Connection: "close",
      "Accept-Encoding": "gzip, deflate",
      "User-Agent": "okhttp/4.2.1",
    };
  }

  getLives() {
    var config = {
      method: "get",
      url: this.BASE_URL + "/v1/lives",
      headers: this.headers,
    };
    return axios(config).then((item) => item.data.items);
  }

  getRankDaily() {
    var config = {
      method: "get",
      url: this.BASE_URL + "/v1/users/ranking/candy?period=daily",
      headers: this.headers,
    };
    return axios(config).then((item) => item.data.items);
  }

  getRankWeekly() {
    var config = {
      method: "get",
      url: this.BASE_URL + "/v1/users/ranking/candy?period=weekly",
      headers: this.headers,
    };
    return axios(config).then((item) => item.data.items);
  }

  getRankMonthly() {
    var config = {
      method: "get",
      url: this.BASE_URL + "/v1/users/ranking/candy?period=monthly",
      headers: this.headers,
    };
    return axios(config).then((item) => item.data.items);
  }

  getUser(userUuid) {
    var config = {
      method: "get",
      url: this.BASE_URL + "/v3/users/" + userUuid,
      headers: this.headers,
    };
    return axios(config).then((item) => item.data);
  }

  getLive(token, slug) {
    var config = {
      method: "get",
      url: this.BASE_URL + "/v1/lives/" + slug,
      headers: {
        Authorization: "Bearer " + token,
        Host: "api.vibie.live",
        Connection: "close",
        "Accept-Encoding": "gzip, deflate",
        "User-Agent": "okhttp/4.2.1",
      },
    };
    return axios(config).then((item) => item.data);
  }
}

module.exports = { Vibie };

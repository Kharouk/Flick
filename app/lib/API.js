export default class API {
  constructor() {
    this.API_URL = "https://flick-api.now.sh";
  }

  getFilms() {
    return fetch(this.API_URL).then(res => res.json());
  }
}

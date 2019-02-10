export default class API {
  constructor() {
    this.API_URL = "https://flick-api.now.sh";
  }

  getFilms() {
    return fetch(this.API_URL).then(res => res.json());
  }

  getFilm(id) {
    return fetch(`${this.API_URL}`)
      .then(res => {
        return res.json();
      })
      .then(result => {
        return result.films[id];
      });
  }
}

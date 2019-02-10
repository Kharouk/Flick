import App from "./lib/App";
import API from "./lib/API";
import Router from "./lib/Router";
import { filmTemplate } from "./views/film";
const app = new App("#app");
const api = new API();

app.addComponent({
  name: "films",
  model: {
    films: []
  },
  view(model) {
    const filmsHTML = model.films.reduce(
      (html, film) => html + `<li>${filmTemplate(film)}</li>`,
      ""
    );
    return `
    <ul class="films">
      ${filmsHTML}
    </ul>
    `;
  },
  controller(model) {
    api.getFilms().then(result => {
      model.films = result.films;
    });
  }
});

// Routes in App:
const router = new Router(app);
router.addRoute("films", `^#/films$`);
router.addRoute("shows", `^#/shows$`);

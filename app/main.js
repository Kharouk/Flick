import App from "./lib/App";
import API from "./lib/API";
import Router from "./lib/Router";
// Templates: TODO refactor into Components
import { filmTemplate } from "./views/templates";

// Components that have MVC attached:
import Root from "./components/Root";

// Middleware:
const app = new App("#app");
const api = new API();

/*
 * Creates a Component, This example is going to be for Films.
 * It takes in a model, what view you need, as well as the controller
 */
// TODO refactor these components into separate file like Root
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

app.addComponent({
  name: "film",
  model: {
    film: {}
  },
  view(model) {
    return filmTemplate(model.film);
  },
  controller(model) {
    api.getFilm(router.params[1]).then(result => {
      model.film = result;
    });
  }
});

app.addComponent(Root);

// Routes in App:
const router = new Router(app);
router.addRoute("films", `^#/films$`);
router.addRoute("film", `^#/film/([0-9]*)$`);
router.addRoute("root", "");

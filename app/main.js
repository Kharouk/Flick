import App from "./lib/App";
import API from "./lib/API";
import Router from "./lib/Router";

const app = new App("#app");
const api = new API();

app.addComponent({
  name: "films",
  model: {
    films: []
  },
  view(model) {
    return `There are ${model.films.length} films.`;
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

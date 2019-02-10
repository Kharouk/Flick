import App from "./lib/App";
import Router from "./lib/Router";

const app = new App("#app");

app.addComponent({
  name: "films",
  model: {
    films: []
  },
  view(model) {
    return `There are ${model.films.length} films.`;
  }
});

app.addComponent({
  name: "shows",
  model: {
    shows: []
  },
  view(model) {
    return `There are ${model.shows.length} shows.`;
  }
});

const router = new Router(app);

router.addRoute("films", `^#/films$`);
router.addRoute("shows", `^#/shows$`);

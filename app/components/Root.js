import { rootTemplate } from "../views/templates";

export default {
  name: "root",
  model: {
    root: {}
  },
  view(model) {
    return rootTemplate();
  }
};

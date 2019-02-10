export const filmTemplate = film => `
<section class="film-listing">
  <a href="#/film/${film.id}">
    <h3 class="name">${film.title}</h3>
    <section>
      <figure>
        <img src="${film.poster}" alt="${film.title}" />
        <figcaption>${film.tagline}</figcaption>
      </figure>
      <p>${film.description}</p>
    </section>
  </a>
</section>
`;

export const rootTemplate = () => `
<section>
  <h1>Welcome to Flick, a developing MVC Framework.</h1>
  <p>This framework is currently being written by Alex Kharouk.</p>
  <p>Big shoutout to Coding Garden with CJ for the inspo.</p>
  <p>See an example of the framework interacting with a film API   <a style="color: red;" href="#/films">here</a>.</p>
</section>
`;

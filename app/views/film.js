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

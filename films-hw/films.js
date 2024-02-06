const initialFilms = [
  {
    id: '1',
    title: 'Поводир',
    category: 'Драма, Історичний',
    imageUrl: 'https://usfa.gov.ua/upload/media/2021/02/03/6019ce4e30e00-5f69f58acd0458090e285747.jpg',
    plot: 'Україна, тридцяті роки. Американський інженер Майкл Шемрок разом із сином приїздить до Харкова допомагати будувати соціалізм. Тут він закохується в актрису Ольгу Левицьку (Джамала), на яку давно має плани червоний комісар. За трагічних обставин американець гине, а його сина рятує від переслідувачів сліпий кобзар.'
  },
  {
    id: '2',
    title: 'Мавка. Лісова пісня.',
    category: 'Мультфільм',
    imageUrl: 'https://usfa.gov.ua/upload/movie-catalog/2021/12/20/61c08c9b95cf5-mavka-lisova-pisnya-1_145x211.jpg',
    plot: '"Мавка. Лісова пісня" – найочікуваніший український мультфільм останніх років. Проєкт створено за мотивами "Лісової пісні" Лесі Українки та адаптовано під жанр сімейної анімації. Також в основі мультфільму – образи зі слов’янських міфів і легенд.'
  },
  {
    id: '3',
    title: 'Борщ. Секретний інгредієнт',
    category: 'Документальний, Тревел, Кулінарний',
    imageUrl: 'https://usfa.gov.ua/upload/media/2021/02/03/6019d3c979927-5fbd34a7dcbce200118649f5.jpg',
    plot: 'Який український борщ справжній? На свинині, птиці, яловичині, чи може, таки на грибах? А як щодо квашеної капусти, а не свіжої, і соленого томатного розсолу замість пасти? Буряк варити, запікати чи квасити? Куштували рибний борщ?'
  }
]

// create main static div
const mainElement = document.querySelector('div');
const staticElementWrapper = document.createElement('div');
staticElementWrapper.classList.add('static-element-wrap');
mainElement.appendChild(staticElementWrapper);

// create wrapper div for films list
const filmsListWrapper = document.createElement('div');
filmsListWrapper.classList.add('films-list-wrap');
staticElementWrapper.appendChild(filmsListWrapper);

// add films to list from initialFilms
filmsList(initialFilms);
function filmsList(filmsArray) {
  filmsArray.forEach((film, id) => {
    const filmElement = document.createElement('div');
    filmElement.classList.add('film-element');

    const filmTittle = document.createElement('h2');
    filmTittle.textContent = film.title;
    filmElement.appendChild(filmTittle);

    // create edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit film';
    filmElement.appendChild(editButton);

    editButton.addEventListener("click", (el) => {
      el.preventDefault();
      editFilm(film);
    });

    filmTittle.addEventListener("click", (el) => {
      el.preventDefault();
      showDetails(film);
    });

    filmsListWrapper.appendChild(filmElement);
  });
}

// create button for adding new films
const addButton = document.createElement('button');
addButton.textContent = 'Add new film';
staticElementWrapper.appendChild(addButton);

addButton.addEventListener("click", (el) => {
  el.preventDefault();
  addFilm();
});
// add dynamic element
const mainDiv = document.querySelector('div');
const dynamicElementWrapper = document.createElement('div');
dynamicElementWrapper.classList.add('dynamic-wrap');
mainDiv.appendChild(dynamicElementWrapper);

// event fo clicked on arrow back/forward
window.addEventListener('popstate', function (event) {
  if (event.state && event.state.action === 'edit') {
    editFilm(event.state.movie);
  } else if (event.state && event.state.action === 'preview') {
    showDetails(event.state.movie);
  } else if (event.state && event.state.action === 'add') {
    addFilm();
  } else {
    dynamicElementWrapper.innerHTML = '';
  }
});

// event for change url hash manually
window.addEventListener('hashchange', function () {
  let filmId;
  let film;

  switch ('hashchange') {
    case '#edit':
      filmId = location.search.substring(4, location.search.length);
      film = initialFilms.find((film) => film.id === filmId);
      editFilm(film);
      break;
    case '#preview':
      filmId = location.search.substring(4, location.search.length);
      film = initialFilms.find((film) => film.id === filmId);
      showDetails(film);
      break;
    case '#add':
      addFilm();
      break;
    default:
      dynamicElementWrapper.innerHTML = '';
      break;
  }
});

// function for click on button 'Edit'
function editFilm(film) {
  history.pushState({ action: 'edit', movie: film }, null, `?id=${film.id}#edit`);
  dynamicElementWrapper.innerHTML = '';

  let editForm = document.createElement("form");
  editForm.setAttribute('id', 'edit');

  let editTitle = document.createElement("input");
  editTitle.placeholder = `New title for: ${film.title}`;
  editTitle.setAttribute('type', 'text');
  editTitle.setAttribute('required', 'true');
  editTitle.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      editCategory.focus();
    }
  });

  let editCategory = document.createElement("input");
  editCategory.placeholder = `New category for: ${film.title}`;
  editCategory.setAttribute('type', 'text');
  editCategory.setAttribute('required', 'true');
  editCategory.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      editImageURL.focus();
    }
  });

  let editImageURL = document.createElement("input");
  editImageURL.placeholder = `New image URL for: ${film.title}`;
  editImageURL.setAttribute('type', 'text');
  editImageURL.setAttribute('required', 'true');
  editImageURL.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      editPlot.focus();
    }
  });

  let editPlot = document.createElement("input");
  editPlot.placeholder = `New plot for: ${film.title}`;
  editPlot.setAttribute('type', 'text');
  editPlot.setAttribute('required', 'true');
  editPlot.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      saveButton.focus();
    }
  });

  let saveButton = document.createElement('button');
  saveButton.innerText = 'Save';
  let cancelButton = document.createElement('button');
  cancelButton.innerText = 'Cancel';
  editForm.append(editTitle, editCategory, editImageURL, editPlot, saveButton, cancelButton);
  dynamicElementWrapper.appendChild(editForm);

  saveButton.onclick = function (ev) {
    ev.preventDefault();

    film.title = editTitle.value;
    film.category = editCategory.value;
    film.imageUrl = editImageURL.value;
    film.plot = editPlot.value;

    editTitle.value = '';
    editCategory.value = '';
    editImageURL.value = '';
    editPlot.value = '';

    localStorage.setItem('films', JSON.stringify(initialFilms));

    showDetails(film);
    filmsListWrapper.innerHTML = '';
    filmsList(initialFilms);

    const tempEditSave = document.createElement('div');
    const closeTempEditSave = document.createElement('button');

    tempEditSave.classList.add('temporary');
    closeTempEditSave.classList.add('close-temporary');

    tempEditSave.innerHTML = 'Changes saved successfully!';
    closeTempEditSave.innerHTML = 'Ok';

    tempEditSave.appendChild(closeTempEditSave);
    dynamicElementWrapper.appendChild(tempEditSave);

    tempEditSave.style.display = 'block';
    closeTempEditSave.onclick = () => tempEditSave.style.display = 'none';
  }

  cancelButton.onclick = function (ev) {
    const tempEditCancel = document.createElement('div');
    const closeTempEditCancel = document.createElement('button');
    const noTempEditCancel = document.createElement('button');

    tempEditCancel.classList.add('temporary');
    closeTempEditCancel.classList.add('close-temporary');

    tempEditCancel.innerHTML = 'Cancel your changes?';
    closeTempEditCancel.innerHTML = 'Yes';
    noTempEditCancel.innerHTML = 'No';

    tempEditCancel.append(closeTempEditCancel, noTempEditCancel);
    dynamicElementWrapper.appendChild(tempEditCancel);

    tempEditCancel.style.display = 'block';
    closeTempEditCancel.onclick = () => {
      window.history.back();
      tempEditCancel.style.display = 'none';
    };
    noTempEditCancel.onclick = () => tempEditCancel.style.display = 'none';
  }
}

// function for click on title
function showDetails(film) {
  history.pushState({ action: 'show', movie: film }, null, `?id=${film.id}#preview`);
  dynamicElementWrapper.innerHTML = '';

  const wrapperDiv = document.createElement('div');
  wrapperDiv.setAttribute('id', 'show');

  const title = document.createElement("h2");
  title.innerText = film.title;

  const category = document.createElement("h4");
  category.innerText = film.category;

  const img = document.createElement("img");
  img['src'] = film.imageUrl;

  const plot = document.createElement("p");
  plot.innerText = film.plot;

  wrapperDiv.append(title, category, img);
  dynamicElementWrapper.appendChild(wrapperDiv);
}

// function for click on button 'Add'
function addFilm() {
  history.pushState({ action: 'edit', movieArr: initialFilms }, null, 'index.html#add');
  dynamicElementWrapper.innerHTML = '';

  let addFilmForm = document.createElement("form");
  addFilmForm.setAttribute('id', 'add');

  let newfilmTittle = document.createElement("input");
  newfilmTittle.placeholder = "Film title:";
  newfilmTittle.setAttribute('type', 'text');
  newfilmTittle.setAttribute('required', 'true');
  newfilmTittle.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      newCategoryAdd.focus();
    }
  });

  let newCategoryAdd = document.createElement("input");
  newCategoryAdd.placeholder = "Film category:";
  newCategoryAdd.setAttribute('type', 'text');
  newCategoryAdd.setAttribute('required', 'true');
  newCategoryAdd.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      newImgURL.focus();
    }
  });

  let newImgURL = document.createElement("input");
  newImgURL.placeholder = "Image url for film:";
  newImgURL.setAttribute('type', 'text');
  newImgURL.setAttribute('required', 'true');
  newImgURL.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      newPlotAdd.focus();
    }
  });

  let newPlotAdd = document.createElement("input");
  newPlotAdd.placeholder = "Write plot about film:";
  newPlotAdd.setAttribute('type', 'text');
  newPlotAdd.setAttribute('required', 'true');
  newPlotAdd.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addButton.focus();
    }
  });

  let addButton = document.createElement('button');
  addButton.innerText = 'Add new film';
  let cancelButton = document.createElement('button');
  cancelButton.innerText = 'Cancel';
  addFilmForm.append(newfilmTittle, newCategoryAdd, newImgURL, newPlotAdd, addButton, cancelButton);
  dynamicElementWrapper.appendChild(addFilmForm);

  addButton.onclick = function (ev) {
    ev.preventDefault();
    let num = initialFilms.length + 1;

    let newFilm = {
      id: num.toString(),
      title: newfilmTittle.value,
      category: newCategoryAdd.value,
      imageUrl: newImgURL.value,
      plot: newPlotAdd.value
    };
    initialFilms.push(newFilm);
    localStorage.setItem('films', JSON.stringify(initialFilms));
    filmsListWrapper.innerHTML = '';
    filmsList(initialFilms);
    showDetails(newFilm);

    newfilmTittle.value = '';
    newCategoryAdd.value = '';
    newImgURL.value = '';
    newPlotAdd.value = '';

    const tempAddSave = document.createElement('div');
    const closeTempAddSave = document.createElement('button');

    tempAddSave.classList.add('temporary');
    closeTempAddSave.classList.add('close-temporary');

    tempAddSave.innerHTML = 'Film successfully added!';
    closeTempAddSave.innerHTML = 'Ok';

    tempAddSave.appendChild(closeTempAddSave);
    dynamicElementWrapper.appendChild(tempAddSave);

    tempAddSave.style.display = 'block';
    closeTempAddSave.onclick = () => tempAddSave.style.display = 'none';
  }

  cancelButton.onclick = function (ev) {
    const tempAddCancel = document.createElement('div');
    const closeTempAddCancel = document.createElement('button');
    const notTempAddCancel = document.createElement('button');

    tempAddCancel.classList.add('temporary');
    closeTempAddCancel.classList.add('close-temporary');

    tempAddCancel.innerHTML = 'Do you want cancel adding?';
    closeTempAddCancel.innerHTML = 'Yes';
    notTempAddCancel.innerHTML = 'No';

    tempAddCancel.append(closeTempAddCancel, notTempAddCancel);
    dynamicElementWrapper.appendChild(tempAddCancel);

    tempAddCancel.style.display = 'block';
    closeTempAddCancel.onclick = () => {
      window.history.back();
      tempAddCancel.style.display = 'none';
    };
    notTempAddCancel.onclick = () => tempAddCancel.style.display = 'none';
  }
}

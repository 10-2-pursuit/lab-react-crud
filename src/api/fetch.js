// Shows
const URL = import.meta.env.VITE_BASE_API_URL;
// Create
export function createShow(show) {
  return;
}

// Delete
export function destroyShow(id) {
  return;
}

// Index/Get all
export function getAllShows() {
  return;
}

// Show/Get one
export function getOneShow(id) {
  return;
}

// Update
export function updateShow(id, show) {
  return;
}

// Movies
export function createMovie(movie) {
  const options = {
    method: "POST",
    body: JSON.stringify(movie),
    headers: {"Content-Type": "application/json"}
  }
  return fetch(`${URL}/movies`, options).then(res => res.json());
}

// Delete
export function destroyMovie(id) {
  const options = { method: "DELETE"}
  return fetch(`${URL}/movies/${id}`, options);
}

export function getAllMovies() {
  return fetch(`${URL}/movies`).then(res => res.json());
}

// Movie/Get one
export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then(res => res.json());
}

// Update
export function updateMovie(id, movie) {
  const options = {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: {"Content-Type": "application/json"}
  }
  return fetch(`${URL}/movies/${id}`, options).then(res => res.json());
}
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

export function getallMovies() {
  return fetch(`${URL}/movies`).then(res => res.json());
}

export function getMovies() {
  return fetch(`${URL}/movies/${id}`).then(res => res.json());

}

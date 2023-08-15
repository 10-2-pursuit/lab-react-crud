const URL = import.meta.env.VITE_BASE_API_URL;
// Shows

// Create
export function createShow(show) {
  return fetch(`${URL}/shows/`, { 
                                        method: "POST", 
                                        headers: {
                                                    'Accept': 'application/json', 
                                                    'Content-Type': 'application/json'
                                                  }, 
                                        body: JSON.stringify(show),
                                      });
}

// Delete
export function destroyShow(id) {
  return; 
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then(res => res.json());
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then(res => res.json());
}

// Update
export function updateShow(id, show) {
  return;
}

// Movies
export function getAllMovies() {
  return fetch(`${URL}/movies`).then(res => res.json());
}

export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then(res => res.json());
}

export function createMovie(movie) {
  return fetch(`${URL}/movies/`, { 
                                        method: "POST", 
                                        headers: {
                                                    'Accept': 'application/json', 
                                                    'Content-Type': 'application/json'
                                                  }, 
                                        body: JSON.stringify(movie),
                                      });
}
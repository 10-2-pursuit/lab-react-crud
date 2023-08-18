const URL = import.meta.env.VITE_BASE_API_URL;
// Shows

// Create
export function createShow(show, type) {
  console.log(type);
  return fetch(`${URL}/${type}/`, { 
                                        method: "POST", 
                                        headers: {
                                                    'Accept': 'application/json', 
                                                    'Content-Type': 'application/json'
                                                  }, 
                                        body: JSON.stringify(show),
                                      });
}

// Delete
export function destroyShow(id,type) {
  return fetch(`${URL}/${type}/${id}`, { 
                                  method: "DELETE", 
                                  headers: {
                                              'Accept': 'application/json', 
                                              'Content-Type': 'application/json'
                                            },
  });
}

// Index/Get all
export function getAllShows(type) {
  return fetch(`${URL}/${type}`).then(res => res.json());
}

// Show/Get one
export function getOneShow(id,type) {
  return fetch(`${URL}/${type}/${id}`).then(res => res.json());
}

// Update
export function updateShow(id, show, type) {
  return fetch(`${URL}/${type}/${id}`, { 
                                  method: "PUT", 
                                  headers: {
                                              'Accept': 'application/json', 
                                              'Content-Type': 'application/json'
                                            }, 
                                  body: JSON.stringify(show),
  });
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

export function updateMovie(id, movie) {
  return fetch(`${URL}/movies/${id}`, { 
                                  method: "PUT", 
                                  headers: {
                                              'Accept': 'application/json', 
                                              'Content-Type': 'application/json'
                                            }, 
                                  body: JSON.stringify(movie),
  });
}

export function destroyMovie(id) {
  return fetch(`${URL}/movies/${id}`, { 
                                  method: "DELETE", 
                                  headers: {
                                              'Accept': 'application/json', 
                                              'Content-Type': 'application/json'
                                            },
  });
}
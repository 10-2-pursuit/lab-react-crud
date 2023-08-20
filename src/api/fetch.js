const URL = import.meta.env.VITE_BASE_API_URL;
// Shows

// Create
export async function createShow(show) {
  return await fetch(`${URL}/shows/`, { 
                                        method: "POST", 
                                        headers: {
                                                    'Accept': 'application/json', 
                                                    'Content-Type': 'application/json'
                                                  }, 
                                        body: JSON.stringify(show),
                                      });
}

// Delete
export async function destroyShow(id) {
  return await fetch(`${URL}/shows/${id}`, { 
                                  method: "DELETE", 
                                  headers: {
                                              'Accept': 'application/json', 
                                              'Content-Type': 'application/json'
                                            },
  });
}

// Index/Get all
export async function getAllShows() {
  return await fetch(`${URL}/shows`).then(res => res.json());
}

// Show/Get one
export async function getOneShow(id) {
  return await fetch(`${URL}/shows/${id}`).then(res => res.json());
}

// Update
export async function updateShow(id, show) {
  return await fetch(`${URL}/shows/${id}`, { 
                                  method: "PUT", 
                                  headers: {
                                              'Accept': 'application/json', 
                                              'Content-Type': 'application/json'
                                            }, 
                                  body: JSON.stringify(show),
  });
}

// Movies
export async function getAllMovies() {
  return await fetch(`${URL}/movies`).then(res => res.json());
}

export async function getOneMovie(id) {
  return await fetch(`${URL}/movies/${id}`).then(res => res.json());
}

export async function createMovie(movie) {
  return await fetch(`${URL}/movies/`, { 
                                        method: "POST", 
                                        headers: {
                                                    'Accept': 'application/json', 
                                                    'Content-Type': 'application/json'
                                                  }, 
                                        body: JSON.stringify(movie),
                                      });
}

export async function updateMovie(id, movie) {
  return await fetch(`${URL}/movies/${id}`, { 
                                  method: "PUT", 
                                  headers: {
                                              'Accept': 'application/json', 
                                              'Content-Type': 'application/json'
                                            }, 
                                  body: JSON.stringify(movie),
  });
}

export async function destroyMovie(id) {
  return await fetch(`${URL}/movies/${id}`, { 
                                  method: "DELETE", 
                                  headers: {
                                              'Accept': 'application/json', 
                                              'Content-Type': 'application/json'
                                            },
  });
}
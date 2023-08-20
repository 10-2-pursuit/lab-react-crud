// Shows
const URL = 'http://localhost:5001/api'
// Create
export function createShow(show) {
  // we need to specify what type of request we're making in fetch
  const options = {

    method: "POST",
    // body is a JSON version of our show object we got from state
    body: JSON.stringify(show),
    // tell the server that this is JSON
    headers: {"Content-Type": "application/json"}
  }
  return fetch(`${URL}/shows`, options).then(res => res.json())
}

// Delete
export function destroyShow(id) {
  // options object
  const options = { method: "DELETE" }
  return fetch(`${URL}/shows/${id}`, options)
}

// Index/Get all
export function getAllShows() {
  // this function hjits our Server at the /shows endpoint
  // and returns a PROMISE with some JSON inside
  return fetch(`${URL}/shows`).then(res => res.json())
}

// Show/Get one
export function getOneShow(id) {
  // gets data from the shows/:id route
  // beause we are getting one resource we need to tell the serve
  // WHICH ONE WE WANT
  return fetch(`${URL}/shows/${id}`).then(res => res.json())
}

// Update
export function updateShow(id, show) {
  const options = {
    method: "PUT",
    // body is a JSON version of our show object we got from state
    body: JSON.stringify(show),
    // tell the server that this is JSON
    headers: {"Content-Type": "application/json"}
  }
  return fetch(`${URL}/shows/${id}`, options).then(res => res.json())
}


// Movies


  export function destroyMovie(id) {
    return fetch(`${URL}/movies/${id}`, {
      method: 'DELETE'
    });
  }
  
  // Index/Get all
export function getAllMovies() {
  // this function hjits our Server at the /movies endpoint
  // and returns a PROMISE with some JSON inside
  return fetch(`${URL}/movies`).then(res => res.json())
}

// movie/Get one
export function getOneMovie(id) {
  // gets data from the movies/:id route
  // beause we are getting one resource we need to tell the serve
  // WHICH ONE WE WANT
  return fetch(`${URL}/movies/${id}`).then(res => res.json())
}

  export function updateMovie(id, movie) {
    return fetch(`${URL}/movies/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    });
  }

  export function createMovie(movie) {
    const options = {
      method: "POST",
      // body is a JSON version of our show object we got from state
      body: JSON.stringify(movie),
      // tell the server that this is JSON
      headers: {"Content-Type": "application/json"}
    }
    return fetch(`${URL}/movies`, options)
      .then(res => res.json())
  }
     
 
    

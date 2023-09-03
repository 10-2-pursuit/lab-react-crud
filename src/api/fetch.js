// Shows
const URL = import.meta.env.VITE_BASE_API_URL;

// Create
export function createShow(id, show) {
  const options ={ 
    method: "PUT", 
    body: JSON.stringify(shows),
    headers: {"Content-Type": "application/json"}
  }
  return;


// Delete
export function destroyShow(id) {
  const options = {method: "DELETE"}
  return fetch(`${URL}/shows/${id}`, options)
}

// Index/Get all
export function getAllShows(id) {

  return fetch(`${URL}/shows`)
  .then (res) => res.json())
  .then 
  
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/show/${id}`)
}

// Update
export function updateShow(id, show) {

    const options ={ 
      method: "PUT", 
      body: JSON.stringify{shows}
      headers: {"Content-Type", "application/json"}
      
  
    }
    return;
  }
  

// Movies

export function getallMovies() {
  fetch

export function getMovies() {
  return fetch(`${URL}/movies/${id}`)
  .then(res => res.json());

}

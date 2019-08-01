const URL = "https://api.themoviedb.org/3/movie/popular?api_key=096380028b3c557f024e4f1d8f6faa1e&language=en-US&page=1";

export function apiRequest() {
    return fetch(URL).then(response => response.json())
}

export function apiRequestMovieDetails(movie_id) {
    let movieURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=096380028b3c557f024e4f1d8f6faa1e&language=en-US`
    
    return fetch(movieURL).then(response => response.json())
}
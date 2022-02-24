import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      const transformedFilms = data.results.map(film => {
        return {
          id: film.episode_id,
          title: film.title,
          openingText: film.opening_crawl,
          releaseDate: film.release_date
        }
      })
      setFilms(transformedFilms);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  }, [])

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && films.length > 0 && < MoviesList movies={films} />}
        {!isLoading && films.length === 0 && !error && <p>No films yet.</p>}
        {!isLoading && error && <p>{error.message}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

import type { Movie } from '../../types/movie';
import { useState } from 'react';
import Tabs from '../../components/tabs/tabs';
import Tab from '../../components/tabs/tab';
import { Link } from 'react-router-dom';
import { MovieItem } from '../../components/movie-item/movie-item';
import { getMovieLink } from '../../utils/links';

interface MoviesListProps {
  movies: Movie[];
}

export default function MoviesList({movies}: MoviesListProps) {
  const allGenresTab = 'All genres';
  const tabs = [allGenresTab, ...new Set(movies.map((movie) => movie.genre))].slice(0, 10);
  const [selectedTab, setSelectedTab] = useState(allGenresTab);

  return (
    <>
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className='catalog__genres-list'
        activeTabClassName='catalog__genres-item--active'
      >
        {tabs.map((tab) => (
          <Tab
            key={tab}
            id={tab}
            className='catalog__genres-item'
          >
            <Link to='#' className='catalog__genres-link'>{tab}</Link>
          </Tab>
        ))}
      </Tabs>

      <div className='catalog__films-list'>
        {movies
          .filter((movie) => selectedTab === allGenresTab || movie.genre === selectedTab)
          .map((movie) => (
            <MovieItem
              key={movie.id}
              videoLink={movie.videoLink}
              posterImage={movie.posterImage}
              width='280'
              height='175'
              name={movie.name}
              href={getMovieLink(movie.id)}
            />
          ))}
      </div>
    </>
  );
}

import { AllGenresTab } from '../../components/genre-list/genre-list';
import { useAppSelector } from '../../hooks/store-helpers';
import { Movie } from '../../types/movie';

interface MoviesListProps {
  movies: Movie[];
}

export default function MoviesList({movies}: MoviesListProps) {
  const { activeTab } = useAppSelector((state) => state);

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

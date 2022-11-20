import { AllGenresTab } from '../../components/genre-list/genre-list';
import { useAppSelector } from '../../hooks/store-helpers';
import { FilteredMovieItems } from '../../components/filtered-movie-items/filtered-movie-items';
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

      <FilteredMovieItems
        movies={movies}
        filter={(movie) => activeTab === AllGenresTab || movie.genre === activeTab}
      />
    </>
  );
}

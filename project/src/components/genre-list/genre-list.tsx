import { Movie } from '../../types/movie';
import Tab from '../tabs/tab';
import { Link } from 'react-router-dom';
import Tabs from '../tabs/tabs';
import { useAppDispatch, useAppSelector } from '../../hooks/store-helpers';
import { ALL_GENRES_TAB, setActiveTab } from '../../store/slices/active-tab-slice';
import { resetMoviesToViewCount } from '../../store/slices/movies-slice';

interface GenreListProps {
  movies: Movie[];
}

export function GenreList({movies}: GenreListProps) {
  const tabs = [ALL_GENRES_TAB, ...new Set(movies.map((movie) => movie.genre))].slice(0, 10);
  const { activeTab } = useAppSelector((state) => state.activeTab);
  const dispatch = useAppDispatch();

  const handleChangeActiveGenre = (genre: string) => {
    dispatch(setActiveTab(genre));
    dispatch(resetMoviesToViewCount());
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={handleChangeActiveGenre}
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
  );
}

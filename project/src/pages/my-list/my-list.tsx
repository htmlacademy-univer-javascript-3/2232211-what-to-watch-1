import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserAvatar from '../../components/user/user-avatar';
import SignOut from '../../components/sign-out/sign-out';
import { PageLink } from '../../utils/links';
import { getFilteredMovieItems } from '../../utils/functions';
import { useAppDispatch, useAppSelector } from '../../hooks/store-helpers';
import Spinner from '../../components/spinner/spinner';
import { useEffect } from 'react';
import { getFavoriteMoviesAction } from '../../store/slices/favorite-movies-slice';

export default function MyListPage() {
  const { favoriteMovies, favoriteMoviesLoading } = useAppSelector((state) => state.favoriteMovies);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavoriteMoviesAction());
  }, [dispatch]);

  if (favoriteMoviesLoading) {
    return <Spinner>Movies are loading..</Spinner>;
  }

  if (favoriteMovies === undefined) {
    return <Spinner>Not found</Spinner>;
  }

  const favoriteMoviesItem = getFilteredMovieItems({
    movies: favoriteMovies,
    filter: (_) => true
  });

  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <Logo href={PageLink.Main} />

        <h1 className='page-title user-page__title'>My list <span className='user-page__film-count'>{favoriteMovies.length}</span></h1>
        <ul className='user-block'>
          <li className='user-block__item'>
            <UserAvatar imageSource='img/avatar.jpg' />
          </li>
          <li className='user-block__item'>
            <SignOut />
          </li>
        </ul>
      </header>

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

        <div className='catalog__films-list'>
          {favoriteMoviesItem}
        </div>
      </section>

      <Footer logoHref={PageLink.Main} />
    </div>
  );
}

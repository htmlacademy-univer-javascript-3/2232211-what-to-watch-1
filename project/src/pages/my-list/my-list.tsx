import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserAvatar from '../../components/user/user-avatar';
import SignOut from '../../components/sign-out/sign-out';
import { PageLink } from '../../utils/links';
import { getFilteredMovieItems } from '../../utils/functions';
import { useAppSelector } from '../../hooks/store-helpers';

export default function MyListPage() {
  const { movies } = useAppSelector((state) => state);
  const favoriteMovies = getFilteredMovieItems({
    movies,
    filter: (movie) => movie.isFavorite
  });

  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <Logo href={PageLink.Main} />

        <h1 className='page-title user-page__title'>My list <span className='user-page__film-count'>9</span></h1>
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
          {favoriteMovies}
        </div>
      </section>

      <Footer logoHref={PageLink.Main} />
    </div>
  );
}

import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserAvatar from '../../components/user/user-avatar';
import SignOut from '../../components/sign-out/sign-out';
import { movies } from '../../mocks/movies';
import { getMovieLink, PageLink } from '../../utils/links';
import { MovieItem } from '../../components/movie-item/movie-item';

export default function MyListPage() {
  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <Logo href={PageLink.main} />

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
          {movies
            .filter((movie) => movie.isFavorite)
            .map((movie) => (
              <MovieItem
                key={movie.id}
                imageProps={{
                  source: movie.backgroundImage,
                  alt: movie.name,
                  width: '280',
                  height: '175'
                }}
                name={movie.name}
                href={getMovieLink(movie.id)}
              />
            ))}
        </div>
      </section>

      <Footer logoHref={PageLink.main} />
    </div>
  );
}

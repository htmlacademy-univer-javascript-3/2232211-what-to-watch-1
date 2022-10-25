import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import type { Movie } from '../../types/movie';
import PromoMovieInfo from './promo-movie-info';
import MoviesList from './movies-list';

interface MainProps {
  promoMovie: Movie;
  movies: Movie[];
}

export default function Main({promoMovie, movies}: MainProps) {
  return (
    <>
      <section className='film-card'>
        <h1 className='visually-hidden'>WTW</h1>
        <Header userAvatarImageSource='img/avatar.jpg' />
        <PromoMovieInfo promoMovie={promoMovie} movies={movies} />
      </section>
      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <MoviesList movies={movies} />

          <div className='catalog__more'>
            <button className='catalog__button' type='button'>Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

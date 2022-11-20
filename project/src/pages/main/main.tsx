import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PromoMovieInfo from './promo-movie-info';
import MoviesList from './movies-list';
import { useAppSelector } from '../../hooks/store-helpers';

export default function Main() {
  const { movies, promoMovie } = useAppSelector((state) => state);

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

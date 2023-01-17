import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PromoMovieInfo from './promo-movie-info';
import MoviesList from './movies-list';
import { useAppSelector } from '../../hooks/store-helpers';
import Spinner from '../../components/spinner/spinner';

export default function Main() {
  const { movies, moviesLoading } = useAppSelector((state) => state.movies);
  const { promoMovie, promoMovieLoading } = useAppSelector((state) => state.promoMovie);

  return (
    <>
      <section className='film-card'>
        <h1 className='visually-hidden'>WTW</h1>
        <Header userAvatarImageSource='img/avatar.jpg' />
        {promoMovieLoading || !promoMovie
          ? <Spinner>Promo movie is loading..</Spinner>
          : <PromoMovieInfo promoMovie={promoMovie} />}
      </section>
      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          {moviesLoading
            ? <Spinner>Movies are loading..</Spinner>
            : <MoviesList movies={movies}/>}
        </section>

        <Footer />
      </div>
    </>
  );
}

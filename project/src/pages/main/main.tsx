import { mainPageMovieItems } from '../../mocks/movie-items';
import { catalogGenreItems } from '../../mocks/catalog-genre-items';
import PlayIcon from '../../components/icons/play-icon';
import MovieButton from '../../components/buttons/movie-button';
import AddIcon from '../../components/icons/add-icon';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

interface SelectedMovieInfoProps {
  movieBackgroundSource: string;
  moviePosterSource: string;
  movieName: string;
  movieGenre: string;
  movieReleaseYear: number;
  moviesListCount: number;
}

function SelectedMovieInfo({
  movieBackgroundSource,
  moviePosterSource,
  movieName,
  movieGenre,
  movieReleaseYear,
  moviesListCount
}: SelectedMovieInfoProps) {
  return (
    <>
      <div className='film-card__bg'>
        <img src={movieBackgroundSource} alt={movieName}/>
      </div>

      <div className='film-card__wrap'>
        <div className='film-card__info'>
          <div className='film-card__poster'>
            <img src={moviePosterSource} alt={`${movieName} poster`} width='218' height='327'/>
          </div>

          <div className='film-card__desc'>
            <h2 className='film-card__title'>{movieName}</h2>
            <p className='film-card__meta'>
              <span className='film-card__genre'>{movieGenre}</span>
              <span className='film-card__year'>{movieReleaseYear}</span>
            </p>

            <div className='film-card__buttons'>
              <MovieButton icon={<PlayIcon/>}>
                Play
              </MovieButton>
              <MovieButton icon={<AddIcon/>} moviesListCount={moviesListCount}>
                My list
              </MovieButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Main(props: SelectedMovieInfoProps) {
  return (
    <>
      <section className='film-card'>
        <h1 className='visually-hidden'>WTW</h1>
        <Header userAvatarImageSource='img/avatar.jpg' />
        <SelectedMovieInfo {...props} />
      </section>

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <ul className='catalog__genres-list'>
            {catalogGenreItems}
          </ul>

          <div className='catalog__films-list'>
            {mainPageMovieItems}
          </div>

          <div className='catalog__more'>
            <button className='catalog__button' type='button'>Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

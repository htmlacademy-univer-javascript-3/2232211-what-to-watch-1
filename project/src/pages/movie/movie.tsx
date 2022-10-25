import Logo from '../../components/logo/logo';
import Header from '../../components/header/header';
import MovieButton from '../../components/buttons/movie-button';
import PlayIcon from '../../components/icons/play-icon';
import AddIcon from '../../components/icons/add-icon';
import Copyright from '../../components/copyright/copyright';
import { firstColumnReviews, secondColumnReviews } from '../../mocks/reviews';
import { Link, useParams } from 'react-router-dom';
import type { Movie } from '../../types/movie';
import { useState } from 'react';
import Tabs from '../../components/tabs/tabs';
import Tab from '../../components/tabs/tab';
import { toHourAndMinute } from '../../utils/formatted-time';
import { getAddReviewLink, getMovieLink, PageLink } from '../../utils/links';
import { Review } from '../../components/review/review';
import { movies } from '../../mocks/movies';
import NotFoundPage from '../not-found/not-found';
import { MovieItem } from '../../components/movie-item/movie-item';

enum TabId {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export default function MoviePage() {
  const [tabId, setTabId] = useState(TabId.Overview);
  const movieId = useParams().id;
  const movie = movies.find((m) => m.id.toString() === movieId);

  if (!movie) {
    return <NotFoundPage />;
  }

  const moviesSameGenre = movies
    .filter((m) => m.genre === movie.genre && m.id !== movie.id)
    .slice(0, 4)
    .map((m) => (
      <MovieItem
        key={m.id}
        imageProps={{
          source: m.backgroundImage,
          alt: m.name,
          width: '280',
          height: '175'
        }}
        name={m.name}
        href={getMovieLink(m.id)}
      />
    ));

  return (
    <>
      <section className='film-card film-card--full'>
        <div className='film-card__hero'>

          <h1 className='visually-hidden'>WTW</h1>

          <Header userAvatarImageSource='img/avatar.jpg' logoHref={PageLink.main} />

          <div className='film-card__bg'>
            <img src={movie.backgroundImage} alt={movie.name}/>
          </div>

          <div className='film-card__wrap'>
            <div className='film-card__desc'>
              <h2 className='film-card__title'>{movie.name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{movie.genre}</span>
                <span className='film-card__year'>{movie.released}</span>
              </p>

              <div className='film-card__buttons'>
                <MovieButton icon={<PlayIcon/>}>
                  Play
                </MovieButton>
                <MovieButton icon={<AddIcon/>} moviesListCount={9}>
                  My list
                </MovieButton>
                <Link to={getAddReviewLink(movie.id)} className='btn film-card__button'>
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <div className='film-card__poster film-card__poster--big'>
              <img src={movie.posterImage} alt={`${movie.name} poster`} width='218' height='327'/>
            </div>

            <div className='film-card__desc'>
              <nav className='film-nav film-card__nav'>
                <Tabs
                  value={tabId}
                  onValueChange={(id) => setTabId(id as TabId)}
                  className='film-nav__list'
                  activeTabClassName='film-nav__item--active'
                >
                  {getTab(TabId.Overview)}
                  {getTab(TabId.Details)}
                  {getTab(TabId.Reviews)}
                </Tabs>
              </nav>

              {tabId === TabId.Overview && OverviewInfo(movie)}
              {tabId === TabId.Details && DetailsInfo(movie)}
              {tabId === TabId.Reviews && <ReviewsInfo />}
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        {moviesSameGenre.length > 0 && (
          <section className='catalog catalog--like-this'>
            <h2 className='catalog__title'>More like this</h2>

            <div className='catalog__films-list'>
              {moviesSameGenre}
            </div>
          </section>
        )}

        <footer className='page-footer'>
          <Logo href={PageLink.main} light />
          <Copyright />
        </footer>
      </div>
    </>
  );
}

function getTab(tabId: TabId) {
  return (
    <Tab id={tabId} className='film-nav__item'>
      <Link to='#' className='film-nav__link'>{tabId}</Link>
    </Tab>
  );
}

function OverviewInfo(movie: Movie) {
  return (
    <>
      <div className='film-rating'>
        <div className='film-rating__score'>{movie.rating}</div>
        <p className='film-rating__meta'>
          <span className='film-rating__level'>{getRatingLevel(movie.rating)}</span>
          <span className='film-rating__count'>{movie.scoresCount} ratings</span>
        </p>
      </div>

      <div className='film-card__text'>
        {formatMovieDescription(movie.description)}
        <p className='film-card__director'>
          <strong>Director: {movie.director}</strong>
        </p>
        <p className='film-card__starring'>
          <strong>Starring: {movie.starring.slice(0, 4).join(', ')} and other</strong>
        </p>
      </div>
    </>
  );
}

function DetailsInfo(movie: Movie) {
  return (
    <div className='film-card__text film-card__row'>
      <div className='film-card__text-col'>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>
            Director
          </strong>
          <span className='film-card__details-value'>
            {movie.director}
          </span>
        </p>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>
            Starring
          </strong>
          <span className='film-card__details-value'>
            {movie.starring.map((actor, ind) => (
              <span key={actor}>
                {actor}{ind !== movie.starring.length - 1 && ','}<br/>
              </span>
            ))}
          </span>
        </p>
      </div>

      <div className='film-card__text-col'>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>
            Run&nbsp;Time
          </strong>
          <span className='film-card__details-value'>
            {toHourAndMinute(movie.runTime)}
          </span>
        </p>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>
            Genre
          </strong>
          <span className='film-card__details-value'>
            {movie.genre}
          </span>
        </p>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>
            Released
          </strong>
          <span className='film-card__details-value'>
            {movie.released}
          </span>
        </p>
      </div>
    </div>
  );
}

function ReviewsInfo() {
  return (
    <div className='film-card__reviews film-card__row'>
      <div className='film-card__reviews-col'>
        {firstColumnReviews.map((p) => <Review key={p.id} {...p} />)}
      </div>
      <div className='film-card__reviews-col'>
        {secondColumnReviews.map((p) => <Review key={p.id} {...p} />)}
      </div>
    </div>
  );
}

function getRatingLevel(rating: number): string {
  if (rating < 3) {
    return 'Bad';
  }
  if (rating < 5) {
    return 'Normal';
  }
  if (rating < 8) {
    return 'Good';
  }
  if (rating < 10) {
    return 'Very good';
  }
  return 'Awesome';
}

function formatMovieDescription(description: string) {
  return description
    .split('\n')
    .map((row) => <p key={row.slice(0, 10)}>{row}</p>);
}

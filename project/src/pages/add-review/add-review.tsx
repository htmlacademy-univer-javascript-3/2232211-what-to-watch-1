import Header from '../../components/header/header';
import { Navigate, useParams } from 'react-router-dom';
import React from 'react';
import { PageLink } from '../../utils/links';
import Navigation from './navigation';
import AddReviewForm from './add-review-form';
import { useAppSelector } from '../../hooks/store-helpers';
import Spinner from '../../components/spinner/spinner';

export default function AddReviewPage() {
  const movieId = useParams().id;
  const { movies, moviesLoading } = useAppSelector((state) => state.movies);

  if (!movieId) {
    return <Navigate to={PageLink.NotFound} />;
  }

  if (moviesLoading) {
    return <Spinner>Movies are loading..</Spinner>;
  }

  const movie = movies.find((m) => m.id.toString() === movieId);

  if (!movie) {
    return <Navigate to={PageLink.NotFound} />;
  }

  return (
    <section className='film-card film-card--full' style={{background: movie.backgroundColor}}>
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src={movie.backgroundImage} alt={movie.name}/>
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <Header logoHref={PageLink.Main} userAvatarImageSource='img/avatar.jpg' navigation={<Navigation movie={movie} />} />

        <div className='film-card__poster film-card__poster--small'>
          <img src={movie.posterImage} alt={`${movie.name} poster`} width='218' height='327'/>
        </div>
      </div>

      <AddReviewForm movieId={movieId} />
    </section>
  );
}

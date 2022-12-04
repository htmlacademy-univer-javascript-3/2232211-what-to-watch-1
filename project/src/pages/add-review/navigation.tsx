import { Movie } from '../../types/movie';
import { Link } from 'react-router-dom';
import { getMovieLink, PageLink } from '../../utils/links';
import React from 'react';

interface NavigationProps {
  movie: Movie;
}

export default function Navigation({movie}: NavigationProps) {
  return (
    <nav className='breadcrumbs'>
      <ul className='breadcrumbs__list'>
        <li className='breadcrumbs__item'>
          <Link to={getMovieLink(movie.id)} className='breadcrumbs__link'>
            {movie.name}
          </Link>
        </li>
        <li className='breadcrumbs__item'>
          <Link to={PageLink.AddReview} className='breadcrumbs__link'>
            Add review
          </Link>
        </li>
      </ul>
    </nav>
  );
}

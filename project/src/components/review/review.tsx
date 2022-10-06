import { ReactNode } from 'react';

interface ReviewProps {
  message: ReactNode;
  author: string;
  dateTime: string;
  date: string;
  rating: string;
}

export default function Review({message, author, dateTime, date, rating}: ReviewProps) {
  return (
    <div className='review'>
      <blockquote className='review__quote'>
        <p className='review__text'>
          {message}
        </p>

        <footer className='review__details'>
          <cite className='review__author'>{author}</cite>
          <time className='review__date' dateTime={dateTime}>{date}</time>
        </footer>
      </blockquote>

      <div className='review__rating'>{rating}</div>
    </div>
  );
}

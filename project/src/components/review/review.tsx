import { ReactNode } from 'react';

export interface ReviewProps {
  comment: ReactNode;
  date: string;
  id: number;
  rating: number;
  user: {
    id: number
    name: string
  }
}

export function Review({comment, date, id, rating, user}: ReviewProps) {
  const dateInstance = new Date(date);
  return (
    <div className='review' key={id}>
      <blockquote className='review__quote'>
        <p className='review__text'>
          {comment}
        </p>

        <footer className='review__details'>
          <cite className='review__author'>{user.name}</cite>
          <time
            className='review__date'
            dateTime={dateInstance.toISOString()}
          >
            {dateInstance.toISOString().slice(0, 10)}
          </time>
        </footer>
      </blockquote>

      <div className='review__rating'>{rating}</div>
    </div>
  );
}

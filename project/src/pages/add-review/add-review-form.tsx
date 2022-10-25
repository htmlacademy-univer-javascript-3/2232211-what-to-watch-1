import React, { useState } from 'react';
import Rating from '../../components/rating/rating';

export default function AddReviewForm() {
  const [checked, setChecked] = useState(0);
  const [reviewMessage, setReviewMessage] = useState('');

  return (
    <div className='add-review'>
      <form action='#' className='add-review__form'>
        <Rating
          from={1}
          to={10}
          checked={checked}
          setChecked={setChecked}
        />

        <div className='add-review__text'>
          <textarea
            className='add-review__textarea'
            name='review-text'
            id='review-text'
            placeholder='Review text'
            value={reviewMessage}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setReviewMessage(e.target.value)}
          />
          <div className='add-review__submit'>
            <button className='add-review__btn' type='submit'>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

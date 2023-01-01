import React, { FormEvent, useState } from 'react';
import Rating from '../../components/rating/rating';
import { PageLink } from '../../utils/links';
import { api } from '../../services/api';
import { getAddCommentLink } from '../../services/api-routes';
import { useNavigate } from 'react-router-dom';

interface AddReviewFormProps {
  movieId: string;
}

export default function AddReviewForm({movieId}: AddReviewFormProps) {
  const [checked, setChecked] = useState(0);
  const [reviewMessage, setReviewMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (checked !== 0 && reviewMessage) {
      await api.post(getAddCommentLink(movieId), {
        'comment': reviewMessage,
        'rating': checked,
      });
      navigate(PageLink.Main);
    }
  };

  return (
    <div className='add-review'>
      <form action='#' className='add-review__form' onSubmit={handleSubmit}>
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

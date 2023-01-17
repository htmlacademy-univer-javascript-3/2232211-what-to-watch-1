import React, { FormEvent, useState } from 'react';
import Rating from '../../components/rating/rating';
import { API } from '../../services/api';
import { getAddCommentLink } from '../../services/api-routes';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface AddReviewFormProps {
  movieId: string;
}

export default function AddReviewForm({movieId}: AddReviewFormProps) {
  const [checked, setChecked] = useState(0);
  const [reviewMessage, setReviewMessage] = useState('');
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    let isCaughtError = false;
    setIsSendingRequest(true);

    try {
      await API.post(getAddCommentLink(movieId), {
        'comment': reviewMessage,
        'rating': checked,
      });
    } catch {
      isCaughtError = true;
      toast.error('Can\'t send review');
    } finally {
      setIsSendingRequest(false);
    }

    if (!isCaughtError) {
      navigate(-1);
    }
  };

  const shouldDisablePostButton = () => {
    if (reviewMessage.length < 50 || reviewMessage.length > 400) {
      return true;
    }
    if (checked === 0) {
      return true;
    }
    return isSendingRequest;
  };

  return (
    <div className='add-review'>
      <form action='#' className='add-review__form' onSubmit={handleSubmit}>
        <Rating
          from={1}
          to={10}
          checked={checked}
          setChecked={setChecked}
          disabled={isSendingRequest}
        />

        <div className='add-review__text'>
          <textarea
            className='add-review__textarea'
            name='review-text'
            id='review-text'
            placeholder='Review text'
            value={reviewMessage}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setReviewMessage(e.target.value)}
            disabled={isSendingRequest}
          />
          <div className='add-review__submit'>
            <button className='add-review__btn' type='submit' disabled={shouldDisablePostButton()}>
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

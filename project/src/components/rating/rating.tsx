import { ReactNode } from 'react';

interface RatingProps {
  from: number;
  to: number;
  checked?: number;
}

const getRatingItems = (from: number, to: number, checked?: number): ReactNode[] => {
  const values = [];
  for (let i = to; i >= from; i--) {
    values.push(
      <>
        <input key={`rating-input-${i}`} className='rating__input' id={`star-${i}`} type='radio' name='rating' value={i} checked={i === checked}/>
        <label key={`rating-label-${i}`} className='rating__label' htmlFor={`star-${i}`}>Rating {i}</label>
      </>
    );
  }
  return values;
};

export default function Rating({from, to, checked}: RatingProps) {
  if (to < from) {
    throw new Error(`Invalid borders! ${from} should be less than ${to}.`);
  }
  return (
    <div className='rating'>
      <div className='rating__stars'>
        {getRatingItems(from, to, checked)}
      </div>
    </div>
  );
}

import React, { ReactNode } from 'react';

interface RatingProps {
  from: number;
  to: number;
  checked: number;
  setChecked: React.Dispatch<React.SetStateAction<number>>;
}

const getRatingItems = (
  from: number,
  to: number,
  checked: number,
  setChecked: React.Dispatch<React.SetStateAction<number>>
): ReactNode[] => {
  const values = [];
  for (let i = to; i >= from; i--) {
    values.push(
      <>
        <input
          key={`rating-input-${i}`}
          className='rating__input'
          id={`star-${i}`}
          type='radio'
          name='rating'
          value={i}
          checked={i === checked}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(parseInt(e.target.value, 10))}
        />
        <label
          key={`rating-label-${i}`}
          className='rating__label'
          htmlFor={`star-${i}`}
        >
          Rating {i}
        </label>
      </>
    );
  }
  return values;
};

export default function Rating({from, to, checked, setChecked}: RatingProps) {
  if (to < from) {
    throw new Error(`Invalid borders! ${from} should be less than ${to}.`);
  }

  return (
    <div className='rating'>
      <div className='rating__stars'>
        {getRatingItems(from, to, checked, setChecked)}
      </div>
    </div>
  );
}

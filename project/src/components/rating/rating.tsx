import React, {Fragment, ReactNode} from 'react';

interface RatingProps {
  from: number;
  to: number;
  checked: number;
  setChecked: React.Dispatch<React.SetStateAction<number>>;
  disabled: boolean;
}

const getRatingItems = (
  from: number,
  to: number,
  checked: number,
  setChecked: React.Dispatch<React.SetStateAction<number>>,
  disabled: boolean,
): ReactNode[] => {
  const values = [];
  for (let i = to; i >= from; i--) {
    values.push(
      <Fragment key={`rating-star-${i}`}>
        <input
          className='rating__input'
          id={`star-${i}`}
          type='radio'
          name='rating'
          value={i}
          checked={i === checked}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(parseInt(e.target.value, 10))}
          disabled={disabled}
        />
        <label
          className='rating__label'
          htmlFor={`star-${i}`}
        >
          Rating {i}
        </label>
      </Fragment>
    );
  }
  return values;
};

export default function Rating({from, to, checked, setChecked, disabled}: RatingProps) {
  if (to < from) {
    throw new Error(`Invalid borders! ${from} should be less than ${to}.`);
  }

  return (
    <div className='rating'>
      <div className='rating__stars'>
        {getRatingItems(from, to, checked, setChecked, disabled)}
      </div>
    </div>
  );
}

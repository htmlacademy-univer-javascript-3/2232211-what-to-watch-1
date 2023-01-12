import { ReactNode, PropsWithChildren } from 'react';

type MovieButtonProps = PropsWithChildren<{
  icon?: ReactNode;
  moviesListCount?: number;
  onClick?: () => void;
}>

export default function MovieButton({icon, children, moviesListCount, onClick}: MovieButtonProps) {
  return (
    <button className='btn film-card__button' type='button' onClick={onClick}>
      {icon}
      {children}
      {moviesListCount !== undefined && <span className='film-card__count'>{moviesListCount}</span>}
    </button>
  );
}

import { Link } from 'react-router-dom';
import React from 'react';

interface ImageProps {
  source: string;
  alt: string;
  width: string;
  height: string;
}

export interface MovieItemProps {
  imageProps: ImageProps;
  name: string;
  href: string;
  onMouseOver?: React.MouseEventHandler<HTMLElement>;
}

export function MovieItem({imageProps, name, href, onMouseOver}: MovieItemProps) {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={onMouseOver}>
      <div className="small-film-card__image">
        <img
          src={imageProps.source}
          alt={imageProps.alt}
          width={imageProps.width}
          height={imageProps.height}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={href}>{name}</Link>
      </h3>
    </article>
  );
}

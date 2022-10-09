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
}

export function MovieItem({imageProps, name, href}: MovieItemProps) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={imageProps.source}
          alt={imageProps.alt}
          width={imageProps.width}
          height={imageProps.height}
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={href}>{name}</a>
      </h3>
    </article>
  );
}

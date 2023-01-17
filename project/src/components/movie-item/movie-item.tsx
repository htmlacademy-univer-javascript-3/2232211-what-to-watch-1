import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import VideoPlayer from '../video-player/video-player';

export interface MovieItemProps {
  videoLink: string;
  posterImage: string;
  width: string;
  height: string;
  name: string;
  href: string;
}

export function MovieItem({videoLink, posterImage, width, height, name, href}: MovieItemProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  let playVideoTimeout: NodeJS.Timeout | null = null;

  const handleMouseEnter = () => {
    playVideoTimeout = setTimeout(() => setIsPlaying(true), 1000);
  };

  const handleMouseLeave = () => {
    if (playVideoTimeout) {
      clearTimeout(playVideoTimeout);
    }
    setIsPlaying(false);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="small-film-card__image" onClick={() => navigate(href)}>
        <VideoPlayer
          muted
          videoLink={videoLink}
          posterImage={posterImage}
          width={width}
          height={height}
          isPlaying={isPlaying}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={href}>{name}</Link>
      </h3>
    </article>
  );
}

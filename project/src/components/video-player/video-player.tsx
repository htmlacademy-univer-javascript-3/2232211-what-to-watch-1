import { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  videoLink: string;
  posterImage: string;
  width: string;
  height: string;
  isPlaying: boolean;
  muted: boolean;
};

function VideoPlayer({ videoLink, posterImage, width, height, isPlaying, muted }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.load();
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      src={videoLink}
      poster={posterImage}
      width={width}
      height={height}
      muted={muted}
    />
  );
}

export default VideoPlayer;

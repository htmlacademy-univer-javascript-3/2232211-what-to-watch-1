import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store-helpers';
import Spinner from '../../components/spinner/spinner';
import { getMovieAction } from '../../store/slices/movie-slice';
import { PageLink } from '../../utils/links';
import ExitPlayerButton from '../../components/video-player/exit-player-button';
import PlayerControls from '../../components/video-player/player-controls';

export default function PlayerPage(): JSX.Element {
  const movieId = useParams().id;
  const {movie, movieLoading, movieLoadingError} = useAppSelector((state) => state.movie);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const player = useRef() as MutableRefObject<HTMLVideoElement>;

  const [videoTotalTime, setVideoTotalTime] = useState(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (movieId) {
      dispatch(getMovieAction(movieId)).catch(() => navigate(PageLink.NotFound));
    } else {
      navigate(PageLink.NotFound);
    }
  }, [movieId, dispatch, navigate]);

  if (player.current) {
    player.current.ontimeupdate = () => {
      setVideoCurrentTime(player.current?.currentTime);
      setVideoProgress((player.current?.currentTime / videoTotalTime) * 100);
    };
  }

  useEffect(() => {
    if (player.current) {
      setVideoTotalTime(player.current.duration);
    }
  }, [isPlaying]);

  if (movieLoading || !movie) {
    return <Spinner/>;
  }

  if (!movieId || movieLoadingError !== undefined) {
    return <Navigate to={PageLink.NotFound}/>;
  }

  const handlePlayerClick = async () => {
    if (isPlaying) {
      player.current.pause();
    } else {
      await player.current.play();
    }
  };

  return (
    <div className='player'>
      <video
        autoPlay
        id='video'
        ref={player}
        src={movie.videoLink}
        className='player__video'
        poster={movie.backgroundImage}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={handlePlayerClick}
      />

      <ExitPlayerButton movieId={movieId}/>
      <PlayerControls
        player={player}
        isPlaying={isPlaying}
        videoCurrentTime={videoCurrentTime}
        videoProgress={videoProgress}
        videoTotalTime={videoTotalTime}
      />
    </div>
  );
}



import PlayIcon from '../../components/icons/play-icon';
import FullScreenIcon from '../../components/icons/full-screen';
import PauseIcon from '../../components/icons/pause-icon';
import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { movies } from '../../mocks/movies';
import { PageLink } from '../../utils/links';

export default function PlayerPage() {
  const movieId = useParams().id;
  const movie = movies.find((m) => m.id.toString() === movieId);
  const [isPaused, setIsPaused] = useState(false);

  if (!movie) {
    return <Navigate to={PageLink.NotFound} />;
  }

  return (
    <div className='player'>
      <video src={movie.videoLink} className='player__video' poster={movie.previewImage}></video>

      <button type='button' className='player__exit'>
        Exit
      </button>

      <div className='player__controls'>
        <div className='player__controls-row'>
          <div className='player__time'>
            <progress className='player__progress' value='30' max='100'></progress>
            <div className='player__toggler' style={{left: '30%'}}>Toggler</div>
          </div>
          <div className='player__time-value'>1:30:29</div>
        </div>

        <div className='player__controls-row'>
          {isPaused
            ? (
              <button type='button' className='player__play' onClick={() => setIsPaused(false)}>
                <PauseIcon />
                <span>Play</span>
              </button>
            )
            : (
              <button type='button' className='player__play' onClick={() => setIsPaused(true)}>
                <PlayIcon />
                <span>Pause</span>
              </button>
            )}

          <div className='player__name'>Transpotting</div>

          <button type='button' className='player__full-screen'>
            <FullScreenIcon />
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

import PlayIcon from '../../components/icons/play-icon';
import FullScreenIcon from '../../components/icons/full-screen';
import PauseIcon from '../../components/icons/pause-icon';

interface PlayerPageProps {
  isPaused?: boolean;
}

export default function PlayerPage({isPaused}: PlayerPageProps) {
  return (
    <div className='player'>
      <video src='#' className='player__video' poster='img/player-poster.jpg'></video>

      <button type='button' className='player__exit'>Exit</button>

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
              <button type='button' className='player__play'>
                <PauseIcon />
                <span>Pause</span>
              </button>
            )
            : (
              <button type='button' className='player__play'>
                <PlayIcon />
                <span>Play</span>
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

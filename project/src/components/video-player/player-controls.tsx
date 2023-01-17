import PauseIcon from '../icons/pause-icon';
import PlayIcon from '../icons/play-icon';
import FullScreenButton from './full-screen-button';
import { MutableRefObject } from 'react';

interface PlayerControlsProps {
  player: MutableRefObject<HTMLVideoElement>;
  isPlaying: boolean;
  videoProgress: number;
  videoTotalTime: number;
  videoCurrentTime: number;
}

const PlayerControls = ({player, isPlaying, videoProgress, videoTotalTime, videoCurrentTime}: PlayerControlsProps) => (
  <div className='player__controls'>
    <div className='player__controls-row'>
      <div className='player__time'>
        <progress
          className='player__progress'
          value={videoProgress}
          max='100'
        />
        <div className='player__toggler' style={{left: `${videoProgress}%`}}>Toggler</div>
      </div>
      <div className='player__time-value'>
        {videoTotalTime && videoCurrentTime
          ? getVideoTimeLeft(videoTotalTime, videoCurrentTime)
          : '-00:00'}
      </div>
    </div>
    <div className='player__controls-row'>
      {isPlaying ? (
        <button type='button' className='player__play' onClick={() => player.current.pause()}>
          <PauseIcon />
          <span>Pause</span>
        </button>
      ) : (
        <button type='button' className='player__play' onClick={async() => await player.current.play()}>
          <PlayIcon />
          <span>Play</span>
        </button>
      )}
      <FullScreenButton />
    </div>
  </div>
);

function getVideoTimeLeft (fullTime: number, currentTime: number) {
  const padZero = (value: number) => {
    if (value > 9) {
      return `${value}`;
    }
    return `0${value}`;
  };

  const timeLeft = fullTime - currentTime;
  const hours = Math.floor(timeLeft / 60 / 60);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = Math.floor(timeLeft % 60);

  if (hours > 0) {
    return `-${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }

  return `-${padZero(minutes)}:${padZero(seconds)}`;
}

export default PlayerControls;

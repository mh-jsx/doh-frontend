/* eslint-disable react-refresh/only-export-components */
import { memo, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import twc from 'tw-classnames';

import PauseIcon from 'assets/icons/pause-icon.svg?react';
import PlayIcon from 'assets/icons/play-icon.svg?react';
import sample from 'assets/media/sample.mp4';

import Button from '../button/button';

interface Props {
  isPip?: boolean;
}

function Video({ isPip }: Props) {
  const savedState = sessionStorage.getItem('videoState');

  const videoRef = useRef<HTMLVideoElement>(null);

  const location = useLocation();

  const [isControlsVisible, setIsControlsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(savedState ? JSON.parse(savedState).playing : false);

  const showControls = () => setIsControlsVisible(true);
  const hideControls = () => setIsControlsVisible(false);

  const videoHandler = (control: 'play' | 'pause') => {
    setIsPlaying(control === 'play');

    if (control === 'play') {
      // Check if the play attempt is in response to a user interaction
      const playPromise = videoRef?.current?.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started successfully
          })
          .catch(() => {
            // Autoplay failed because the user didn't interact with the document
          });
      }
    } else if (control === 'pause') {
      videoRef?.current?.pause();
    }
  };

  // Load saved state from sessionStorage on component mount
  useEffect(() => {
    if (savedState) {
      const { currentTime, playing } = JSON.parse(savedState);
      if (videoRef.current && currentTime && playing) {
        videoRef.current.currentTime = currentTime;
        setIsPlaying(playing);
        if (playing && videoRef.current.paused) {
          videoRef.current.play();
        }
      }
    }
  }, [savedState]);

  // // Save state to sessionStorage on route change
  useEffect(() => {
    const vRef = videoRef.current;

    // when unmount update the state
    return () => {
      if (vRef) {
        const currentState = {
          currentTime: vRef.currentTime,
          playing: isPlaying,
        };
        sessionStorage.setItem('videoState', JSON.stringify(currentState));
      }
    };
  }, [location.pathname, isPlaying]);

  const navigate = useNavigate();

  const handleClick = () => {
    if (isPip) navigate('/');
  };

  // handle if video completed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
        localStorage.removeItem('videoState');
      });
    }
  }, []);

  return (
    <Button
      variant='text'
      className={isPip ? 'fixed top-10 right-10 z-50 ' : 'relative w-full'}
      onMouseEnter={showControls}
      onMouseLeave={hideControls}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        className={twc('border-4 border-gray-400 outline-none rounded-xl', isPip ? 'w-96' : 'relative w-full')}
        poster=''
      >
        <track kind='captions' />
        <source src={sample} type='video/mp4' />
      </video>
      {!isPlaying && (
        <Button onClick={() => videoHandler('play')} className='absolute z-10 centered-xy' variant='text'>
          <PlayIcon className={twc(' path-stroke:fill-white opacity-70', isPip ? 'w-16 h-16' : 'w-32 h-32')} />
        </Button>
      )}

      {isControlsVisible && isPlaying && (
        <Button onClick={() => videoHandler('pause')} className='absolute z-10 centered-xy' variant='text'>
          <PauseIcon
            className={twc('w-32 h-32 path-stroke:stroke-white opacity-70', isPip ? 'w-16 h-16' : 'w-32 h-32')}
          />
        </Button>
      )}
    </Button>
  );
}

export default memo(Video);

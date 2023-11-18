import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import Video from 'components/core-ui/video/video';

function PipVideo() {
  const location = useLocation();
  const savedState = sessionStorage.getItem('videoState');

  const showPipVideo = useMemo(() => {
    if (location.pathname === '/') {
      return false;
    }

    if (savedState) {
      const { currentTime, playing } = JSON.parse(savedState);
      if (currentTime && playing) {
        return true;
      }
    }

    return false;
  }, [location.pathname, savedState]);

  return showPipVideo ? <Video isPip /> : null;
}

export default PipVideo;

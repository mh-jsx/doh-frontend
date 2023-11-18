import { useEffect, useMemo, useState } from 'react';

import { DEFAULT_TIME_ZONE } from 'constants/global';

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedDate = useMemo(
    () =>
      date.toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: DEFAULT_TIME_ZONE,
      }),
    [date]
  );

  const formattedTime = useMemo(
    () =>
      date.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: DEFAULT_TIME_ZONE,
      }),
    [date]
  );

  return (
    <div className='text-center'>
      <p className='leading-none text-7xl'>{formattedTime}</p>
      <p>{formattedDate}</p>
    </div>
  );
}

export default Clock;

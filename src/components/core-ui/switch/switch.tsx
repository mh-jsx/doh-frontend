import { useState } from 'react';

import twc from 'tw-classnames';

import Button from 'components/core-ui/button/button';

function Switch() {
  const [checked, setChecked] = useState(true);

  const handleToggle = () => setChecked(!checked);

  return (
    <Button variant='text' className='relative' onClick={handleToggle}>
      <input type='checkbox' className='sr-only' onChange={handleToggle} />

      <div
        className={twc(
          'transition inline-flex items-center justify-center gap-2 leading-none [&>span]:text-white bg-gray-600 rounded-3xl text-xxs h-7 w-18',
          checked ? 'bg-primary' : 'bg-danger-500'
        )}
      >
        <span>ON</span>
        <span>OFF</span>
      </div>

      <div
        className={twc(
          'absolute top-0 w-10 transition bg-white rounded-full shadow-lg -left-1 h-7',
          checked && 'translate-x-10'
        )}
      />
    </Button>
  );
}

export default Switch;

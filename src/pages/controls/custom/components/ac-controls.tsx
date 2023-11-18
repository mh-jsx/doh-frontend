import Button from 'components/core-ui/button/button';
import Card from 'components/core-ui/card/card';

import { ACModes } from 'pages/controls/core/_data';

import ArrowIcon from 'assets/icons/arrow-sm.svg?react';
import AutoIcon from 'assets/icons/auto.svg?react';

function ACControls() {
  return (
    <Card className='w-full px-8 py-6 bg-white rounded-lg'>
      <h2 className='text-lg font-semibold'>AC Controls</h2>

      <div className='flex gap-4'>
        <Card className='px-6 py-4 mt-28'>
          <div className='flex items-center justify-between mb-4 font-semibold'>
            <h3> Modes</h3>
            <p className='w-12 break-words font-primary'>Fan Speed</p>
          </div>

          <div className='flex gap-3'>
            {ACModes &&
              ACModes.map(({ id, icon: Icon }) => (
                <Button id={id} variant='rounded' className='w-14 h-14'>
                  {Icon && <Icon />}
                </Button>
              ))}

            <Button variant='rounded' className='w-14 h-14 ms-9'>
              <AutoIcon />
            </Button>
          </div>
        </Card>

        {/* ac temperature controller */}
        <Card className='flex items-center px-11 py-9 gap-11'>
          <div className='flex flex-col items-center gap-4'>
            <Button variant='rounded' className='w-11 h-11'>
              <ArrowIcon />
            </Button>
            <p className='relative px-10 leading-none'>
              <span className='text-6xl text-10xl'>24.5</span>
              <sup className='absolute right-0 pb-12 text-2xl text-3xl top-10'>°C</sup>
            </p>
            <Button variant='rounded' className='rotate-180 w-11 h-11'>
              <ArrowIcon />
            </Button>
          </div>

          <div className='text-center'>
            <h3>Current temperature</h3>
            <p className='text-5xl text-gray-400'>24.5</p>
          </div>
        </Card>
      </div>
    </Card>
  );
}

export default ACControls;

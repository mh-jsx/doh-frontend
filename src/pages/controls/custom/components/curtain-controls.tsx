import twc from 'tw-classnames';

import Button from 'components/core-ui/button/button';
import Card from 'components/core-ui/card/card';

import { curtainLevel } from 'pages/controls/core/_data';

import ArrowIcon from 'assets/icons/arrow-lg.svg?react';

import useCurtainControls from '../hooks/use-curtain-controls';

function CurtainControls() {
  const { currentLevel, decrement, increment, stop, updateLevel } = useCurtainControls();

  return (
    <Card className='flex justify-between w-full px-8 py-6 bg-white rounded-lg'>
      <div>
        <div className='mb-9'>
          <h2 className='mb-1 text-lg font-semibold'>Curtain controls</h2>
          <p>Please select a setting</p>
        </div>

        <div className='flex gap-8 ms-7'>
          {curtainLevel &&
            curtainLevel.map(({ id, icon: Icon, value }) => (
              <Button
                onClick={() => updateLevel(value)}
                key={id}
                className={twc('w-36 h-36', currentLevel === value && 'shadow-primary bg-secondary')}
                variant='rounded'
              >
                {Icon && (
                  <Icon
                    className={currentLevel === value ? 'path-stroke:stroke-white' : 'path-stroke:stroke-secondary'}
                  />
                )}
              </Button>
            ))}
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-6 py-10'>
        <Button onClick={increment} variant='rounded' className='w-15 h-15 bg-secondary'>
          <ArrowIcon />
        </Button>
        <Button onClick={stop} variant='rounded' className='text-lg text-white w-15 h-15 bg-danger-500'>
          Stop
        </Button>
        <Button onClick={decrement} variant='rounded' className='rotate-180 w-15 h-15 bg-secondary'>
          <ArrowIcon />
        </Button>
      </div>
    </Card>
  );
}

export default CurtainControls;

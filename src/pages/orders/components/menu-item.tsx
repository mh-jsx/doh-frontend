import twc from 'tw-classnames';

import Button from 'components/button/button';

import useCounter from 'hooks/use-counter';

import ArrowSm from 'assets/icons/arrow-sm.svg?react';

import { IMenuItem } from '../core/_models';

function MenuItem({ icon: Icon, title, iconClassName, onChangeValues, id }: IMenuItem) {
  const { currentValue, decrement, increment } = useCounter();

  const handleIncrement = () => {
    increment();
    if (onChangeValues) onChangeValues(currentValue + 1, id);
  };
  const handleDecrement = () => {
    if (currentValue > 0) {
      decrement();
      if (onChangeValues) onChangeValues(currentValue - 1, id);
    }
  };

  return (
    <li
      className={twc(
        'flex justify-between p-4 bg-white rounded-md shadow-sm transition-all duration-100 ease-in',
        currentValue > 0 && 'bg-primary-light'
      )}
    >
      <div className='flex items-center gap-4'>
        {Icon && (
          <Icon
            className={twc(
              'w-5 path-stroke:stroke-gray-400',
              currentValue > 0 && 'path-stroke:stroke-secondary',
              iconClassName
            )}
          />
        )}
        <span className='text-secondary'>{title}</span>
      </div>

      <div className='[&>button>svg]:w-4 flex items-center'>
        <Button onClick={handleDecrement} variant='text'>
          <ArrowSm className='rotate-180' />
        </Button>
        <p
          className={twc(
            'inline-block min-w-[2.5rem] text-center',
            currentValue === 0 ? 'text-gray-400' : 'text-secondary'
          )}
        >
          {currentValue}
        </p>
        <Button onClick={handleIncrement} variant='text'>
          <ArrowSm />
        </Button>
      </div>
    </li>
  );
}

export default MenuItem;

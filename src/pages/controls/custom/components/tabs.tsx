import { Children, cloneElement, useState } from 'react';

import twc from 'tw-classnames';

import Button from 'components/core-ui/button/button';

import useBack from 'hooks/use-back';

import ArrowBack from 'assets/icons/arrow-back.svg?react';
import CurtainIcon from 'assets/icons/curtain.svg?react';
import LightIcon from 'assets/icons/light.svg?react';
import WindIcon from 'assets/icons/wind.svg?react';

const tabsData = [
  {
    id: 0,
    title: 'Light',
    icon: LightIcon,
  },
  {
    id: 1,
    title: 'Curtain',
    icon: CurtainIcon,
  },
  {
    id: 2,
    title: 'Wind',
    icon: WindIcon,
  },
];

interface Props {
  children?: React.ReactNode;
}

function Tabs({ children }: Props) {
  const { handleBack } = useBack();

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex gap-7'>
      <ul className='flex flex-col gap-4'>
        <li>
          <Button onClick={handleBack} variant='rounded' className=''>
            <ArrowBack />
          </Button>
        </li>
        {tabsData.map(({ id, icon: Icon }) => (
          <li key={id}>
            <Button
              onClick={() => setActiveIndex(id)}
              variant='rounded'
              className={twc('', activeIndex === id && 'shadow-primary bg-secondary path-stroke:stroke-white')}
            >
              <Icon className={activeIndex === id ? 'path-stroke:stroke-white' : 'path-stroke:stroke-secondary'} />
            </Button>
          </li>
        ))}
      </ul>
      <div className='flex-1'>
        {Children.map(children, (child, index) =>
          index === activeIndex ? cloneElement(child as React.ReactElement<any>, { isActive: true }) : null
        )}
      </div>
    </div>
  );
}

export default Tabs;

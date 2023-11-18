import { Link } from 'react-router-dom';

import twc from 'tw-classnames';

import { controls } from './core/_data';

function Controls() {
  return (
    <div className='mt-32'>
      <ul className='flex-centered gap-7'>
        {controls &&
          controls.map(({ id, title, Icon, path, textClassName, width, height }) => (
            <li key={id}>
              <Link
                className='w-48 h-48 text-center transition-all duration-300 ease-in rounded-md bg-dark-gray backdrop-blur-xl flex-centered hover:shadow-primary'
                to={path}
              >
                <div>
                  {Icon && <Icon width={width} height={height} className='inline-block' />}
                  <p className={twc('mt-9 text-xl', textClassName)}>{title}</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Controls;

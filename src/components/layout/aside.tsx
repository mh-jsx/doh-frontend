import { NavLink } from 'react-router-dom';

import twc from 'tw-classnames';

import { asideData } from './data';

function Aside() {
  return (
    <aside className='py-12 w-50 bg-gray backdrop-blur-2xl rounded-s-xl'>
      <ul className='flex-col gap-3 flex-centered'>
        {asideData &&
          asideData.map(({ id, icon, name, path, textClassName, className }) => (
            <li key={id}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  twc(
                    'inline-block px-4 py-5 text-sm text-center rounded-lg w-28 h-28 bg-dark-gray backdrop-blur-xl',
                    isActive && 'shadow-primary bg-secondary',
                    className
                  )
                }
              >
                <img className='inline-block' src={icon} alt={name} />
                <span className={twc('block mt-5', textClassName)}>{name}</span>
              </NavLink>
            </li>
          ))}
      </ul>
    </aside>
  );
}

export default Aside;

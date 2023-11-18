import { useLocation } from 'react-router-dom';

import { PageHeading, headingData } from './data';

function MainHeading() {
  const location = useLocation();

  const currentRoute = location.pathname.split('/')[1] as PageHeading;

  const data = headingData[currentRoute];

  return (
    <div className='flex items-center gap-4 px-10 py-8'>
      <img className='w-16' src={data?.icon} alt={data?.name} />
      <h1 className='text-2xl'>{data?.name}</h1>
    </div>
  );
}

export default MainHeading;

import twc from 'tw-classnames';

import { ICardProps } from './ICard';

function Card({ className, heading = '', children, ...rest }: ICardProps) {
  return (
    <div className={twc('bg-gray-100 w-max text-secondary rounded-md', className)} {...rest}>
      {heading && <h2 className='p-6 text-xl'>{heading}</h2>}
      {children}
    </div>
  );
}

export default Card;

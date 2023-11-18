import { useState } from 'react';

import twc from 'tw-classnames';

import Button from 'components/button/button';

import CloseIcon from 'assets/icons/close.svg?react';

import { IAlertProps } from './IAlert';

function Alert({ text, onClose, className, ...rest }: IAlertProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return isVisible ? (
    <div className={twc('flex gap-16 px-4 py-3 text-sm rounded-sm shadow-sm bg-primary-300', className)} {...rest}>
      <p>{text}</p>
      <Button variant='text' onClick={handleClose}>
        <CloseIcon className='w-4 h-4' />
      </Button>
    </div>
  ) : null;
}

export default Alert;

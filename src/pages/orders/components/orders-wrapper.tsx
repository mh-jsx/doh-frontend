import twc from 'tw-classnames';

import Alert from 'components/core-ui/alert/alert';
import { ICardProps } from 'components/core-ui/card/ICard';
import Card from 'components/core-ui/card/card';

interface Props extends ICardProps {
  children: React.ReactNode;
  show: boolean;
  hideAlert: () => void;
}

function OrdersWrapper({ show, hideAlert, heading = 'Menu', className, children, ...rest }: Props) {
  return (
    <div className={twc('flex-centered', className)}>
      <Card className='w-[40rem] h-[34rem] relative overflow-auto' {...rest} heading={heading}>
        {children}
        {show ? (
          <Alert className='absolute right-7 top-4' onClose={hideAlert} text='The office boy is on the way' />
        ) : null}
      </Card>
    </div>
  );
}

export default OrdersWrapper;

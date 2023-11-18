import { useNavigate } from 'react-router-dom';

import Button from 'components/core-ui/button/button';

import PantryIcon from 'assets/icons/pantry.svg?react';
import TickIcon from 'assets/icons/tick.svg?react';

import ButlerCall from './components/butler-call';
import MenuItem from './components/menu-item';
import OrdersWrapper from './components/orders-wrapper';
import useButlerCall from './core/hooks/use-butler-call';

function Orders() {
  const { handleButlerCall, hideAlert, show } = useButlerCall();

  const navigate = useNavigate();
  const handleOrderPlace = () => {
    navigate('order-placed');
  };

  return (
    <OrdersWrapper show={show} hideAlert={hideAlert}>
      {/* body */}
      <div className='h-[22rem] overflow-auto flex flex-col gap-2 px-6 pb-5 '>
        {Array.from({ length: 10 }, (_, i) => (
          <MenuItem
            onChangeValues={() => {
              // handle changed values
            }}
            icon={PantryIcon}
            key={i.toString()}
            id={i.toString()}
            title='Black Coffee'
          />
        ))}
      </div>

      {/* footer */}
      <div className='sticky bottom-0 left-0 !justify-end w-full px-6 py-5 bg-gray-100 flex-centered gap-14'>
        <ButlerCall handleClick={handleButlerCall} />
        <Button onClick={handleOrderPlace} className='h-12 ps-8' suffixElement={<TickIcon />}>
          Place
        </Button>
      </div>
    </OrdersWrapper>
  );
}

export default Orders;

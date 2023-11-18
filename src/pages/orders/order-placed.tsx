import Button from 'components/button/button';

import useBack from 'hooks/use-back';

import TickCircled from 'assets/icons/tick-circled.svg?react';

import ButlerCall from './components/butler-call';
import OrdersWrapper from './components/orders-wrapper';
import useButlerCall from './core/hooks/use-butler-call';

function OrderPlaced() {
  const { handleButlerCall, hideAlert, show } = useButlerCall();

  const { handleBack } = useBack();

  return (
    <OrdersWrapper show={show} hideAlert={hideAlert} heading='' className='text-center'>
      <TickCircled className='mx-auto mt-16 mb-8' />
      <p className='w-1/2 mx-auto'>Your order is placed, it will be in your location in time.</p>

      <hr className='inline-block border-2 rounded-md w-30 border-primary' />
      {/* footer */}
      <div className='mt-10 sticky bottom-0 left-0 !justify-start w-full px-6 py-5 bg-gray-100 flex-centered gap-12'>
        <Button onClick={handleBack} variant='default'>
          Cancel
        </Button>
        <ButlerCall handleClick={handleButlerCall} />
      </div>
    </OrdersWrapper>
  );
}

export default OrderPlaced;

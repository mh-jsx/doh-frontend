import Button from 'components/button/button';

import FoodIcon from 'assets/icons/food.svg?react';

interface Props {
  handleClick: () => void;
}

function ButlerCall({ handleClick = () => {} }: Props) {
  return (
    <Button onClick={handleClick} variant='secondary' suffixElement={<FoodIcon />}>
      Butler call
    </Button>
  );
}

export default ButlerCall;

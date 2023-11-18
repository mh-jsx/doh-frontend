import twc from 'tw-classnames';

import Button from 'components/core-ui/button/button';

import { brightnessLevelData } from 'pages/controls/core/_data';

interface Props {
  buttonClassName?: React.HTMLAttributes<HTMLButtonElement>['className'];
}

function BrightnessLevel({ buttonClassName }: Props) {
  return (
    <div className='flex items-center gap-3'>
      {brightnessLevelData &&
        brightnessLevelData.map(({ value, className, id }) => (
          <Button key={id} variant='rounded' className={twc('w-15 h-15', className, buttonClassName)}>
            {value}
          </Button>
        ))}
    </div>
  );
}

export default BrightnessLevel;

import twc from 'tw-classnames';

import Card from 'components/core-ui/card/card';
import MultiSelect from 'components/core-ui/multi-select/multi-select';

import { botActions } from '../core/_data';

interface Props {
  heading?: string;
  text: string;
  direction?: 'left' | 'right';
}

function ChatItem({ heading, text, direction = 'left' }: Props) {
  const isLeftDirection = direction === 'left';

  return (
    <div className={twc('flex gap-2 px-5', isLeftDirection ? 'flex-row' : 'flex-row-reverse')}>
      <div className='w-8 h-8 bg-white border-2 rounded-full border-primary text-xxs flex-centered'>asd</div>
      <Card headingClassName='px-14' className='p-3 bg-white shadow-md w-80'>
        <div className='flex justify-between mb-4 text-sm'>
          <div>
            <h2 className='text-primary'>{heading}</h2>
            <p>
              Hello, <br /> {text}
            </p>
          </div>
          <p className='text-xxs'>12:47</p>
        </div>

        <MultiSelect options={botActions} isMulti />
      </Card>
    </div>
  );
}

export default ChatItem;

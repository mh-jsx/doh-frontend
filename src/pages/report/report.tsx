import Card from 'components/core-ui/card/card';

import ChatItem from './components/chat-item';

function Report() {
  return (
    <div className='flex-centered'>
      <Card heading='Help desk' className='w-[40rem] h-[34rem] overflow-auto relative'>
        <div className='flex flex-col gap-20'>
          {/* TODO: simple chat replies UI, pass bot actions as prop, add button for confirm select multi options */}
          <ChatItem text="I'm your help bot, How may I assist." heading='1-P bot' />
          <ChatItem direction='right' text="I'm your help bot, How may I assist." heading='1-P bot' />
        </div>
      </Card>
    </div>
  );
}

export default Report;

import Card from 'components/core-ui/card/card';
import Switch from 'components/core-ui/switch/switch';

import { lightsData } from 'pages/controls/core/_data';

import BrightnessLevel from './brightness-level';

function LightControls() {
  return (
    <Card className='flex w-full gap-12 px-8 py-6 bg-white rounded-lg'>
      <div>
        <h2 className='mb-20 text-lg font-semibold'>Light controls</h2>

        <div className='flex mb-6 gap-14'>
          <p className='text-lg'>General settings</p>
          <Switch />
        </div>

        <BrightnessLevel />
      </div>
      <div className='grid flex-1 grid-cols-2 gap-5'>
        {lightsData &&
          lightsData.map(({ id, name }) => (
            <Card className='w-full p-5 rounded-md shadow-md' id={id}>
              <div className='flex mb-6 gap-14'>
                <p className='text-lg'>{name}</p>
                <Switch />
              </div>
              <BrightnessLevel buttonClassName='w-12 h-12' />
            </Card>
          ))}
      </div>
    </Card>
  );
}

export default LightControls;

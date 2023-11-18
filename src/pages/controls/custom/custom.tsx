import ACControls from './components/ac-controls';
import CurtainControls from './components/curtain-controls';
import LightControls from './components/light-controls';
import Tabs from './components/tabs';

function Custom() {
  return (
    <div className='px-12 mt-24'>
      <Tabs>
        <LightControls />
        <CurtainControls />
        <ACControls />
      </Tabs>
    </div>
  );
}

export default Custom;

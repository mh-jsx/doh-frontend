import twc from 'tw-classnames';

import Alert from 'components/core-ui/alert/alert';
import useAlert from 'components/core-ui/alert/use-alert';
import Button from 'components/core-ui/button/button';
import Card from 'components/core-ui/card/card';

import EditDark from 'assets/icons/edit-dark.svg?react';

const assistantActions = [
  {
    id: 'come-over',
    label: 'Please come over',
  },
  {
    id: 'check-my-email-and-reply',
    label: 'Please check my email and reply',
  },
  {
    id: 'ask-my-visitor-to-wait',
    label: 'Please ask my visitor(s) to wait',
  },
  {
    id: 'custom',
    label: 'Custom',
    icon: EditDark,
  },
];

function PersonalAssistant() {
  const { show, hideAlert, showAlert } = useAlert();

  // const [show, setShow] = useState(false);

  const handleAction = (action_type: string) => {
    switch (action_type) {
      case 'come-over':
        // TODO: send request to the backend
        showAlert();
        break;
      case 'check-my-email-and-reply':
        // TODO: send request to the backend
        showAlert();
        break;
      case 'ask-my-visitor-to-wait':
        // TODO: send request to the backend
        showAlert();
        break;
      case 'custom':
        break;
      default:
        break;
    }
  };
  return (
    <div className='flex-centered'>
      <Card heading='Please select an option' className='w-[40rem] h-[34rem] overflow-auto relative'>
        <ul className='flex flex-col gap-5 mt-24 px-9'>
          {assistantActions &&
            assistantActions.map(({ id, label, icon: IconComponent }) => (
              <li key={id}>
                <Button
                  onClick={() => handleAction(id)}
                  className={twc(
                    'block w-full p-3 text-sm text-center bg-white rounded-md shadow-md',
                    IconComponent && 'flex items-center justify-center gap-2'
                  )}
                  variant='text'
                >
                  <span className='flex-grow text-center'>{label}</span>

                  {IconComponent && <IconComponent className='ml-2' />}
                </Button>
              </li>
            ))}
        </ul>

        {show && <Alert onClose={hideAlert} text='The message was sent' className='absolute right-8 top-4' />}
      </Card>
    </div>
  );
}

export default PersonalAssistant;

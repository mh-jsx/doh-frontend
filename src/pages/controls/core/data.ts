import CalendarIcon from 'assets/icons/calendar.svg';
import CustomIcon from 'assets/icons/edit.svg';
import GeneralIcon from 'assets/icons/general.svg';
import PresentationIcon from 'assets/icons/video.svg';

export const controls = [
  {
    id: 'meeting',
    title: 'Meetings',
    Icon: CalendarIcon,
    textClassName: 'mt-7',
    path: 'meeting',
  },
  {
    id: 'presentation',
    title: 'Presentation',
    Icon: PresentationIcon,
    iconClassName: 'w-14',
    path: 'presentation',
  },
  {
    id: 'general',
    title: 'General',
    Icon: GeneralIcon,
    path: 'general',
  },
  {
    id: 'custom',
    title: 'Custom',
    Icon: CustomIcon,
    path: 'custom',
  },
];

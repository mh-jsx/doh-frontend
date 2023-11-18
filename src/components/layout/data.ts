import ChatIcon from 'assets/icons/chat.svg';
import ControlsIcon from 'assets/icons/controls.svg';
import PantryIcon from 'assets/icons/pantry.svg';
import ReportsIcon from 'assets/icons/report.svg';
import PresentationIcon from 'assets/icons/video.svg';

export const asideData = [
  {
    id: 'Presentations',
    name: 'Presentations',
    path: '/',
    icon: PresentationIcon,
    className: 'px-1',
  },
  {
    id: 'controls',
    name: 'Controls',
    path: '/controls',
    icon: ControlsIcon,
  },
  {
    id: 'pantry-orders',
    name: 'Pantry orders',
    path: '/orders',
    icon: PantryIcon,
    textClassName: 'mt-4',
  },
  {
    id: 'report',
    name: 'Report',
    path: '/report',
    icon: ReportsIcon,
  },
  {
    id: 'personal-assistant',
    name: 'Personal Assistant',
    path: '/personal-assistant',
    icon: ChatIcon,
    textClassName: 'mt-2',
  },
];

export type PageHeading = '' | 'controls' | 'orders' | 'report' | 'personal-assistant';

export const headingData: {
  [key in PageHeading]: {
    name: string;
    icon: string;
  };
} = {
  '': {
    name: 'Presentations',
    icon: PresentationIcon,
  },
  controls: {
    name: 'Controls',
    icon: ControlsIcon,
  },
  orders: {
    name: 'Pantry orders',
    icon: PantryIcon,
  },
  report: {
    name: 'Report',
    icon: ReportsIcon,
  },
  'personal-assistant': {
    name: 'Personal Assistant',
    icon: ChatIcon,
  },
};

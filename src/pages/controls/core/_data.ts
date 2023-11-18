import ACCoolIcon from 'assets/icons/ac-cool.svg?react';
import ACDryIcon from 'assets/icons/ac-dry.svg?react';
import ACFanIcon from 'assets/icons/ac-fan.svg?react';
import ACHeatIcon from 'assets/icons/ac-heat.svg?react';
import CalendarIcon from 'assets/icons/calendar.svg?react';
import CurtainClose from 'assets/icons/curtain-close.svg?react';
import CurtainHalf from 'assets/icons/curtain-half.svg?react';
import CurtainOpen from 'assets/icons/curtain-open.svg?react';
import CurtainThreeQuarter from 'assets/icons/curtain-three-quarter.svg?react';
import CustomIcon from 'assets/icons/edit.svg?react';
import GeneralIcon from 'assets/icons/general.svg?react';
import PresentationIcon from 'assets/icons/video.svg?react';

export const controls = [
  {
    id: 'meeting',
    title: 'Meetings',
    Icon: CalendarIcon,
    textClassName: 'mt-7',
    path: 'meeting',
    width: 51,
    height: 55,
  },
  {
    id: 'presentation',
    title: 'Presentation',
    Icon: PresentationIcon,
    path: 'presentation',
    width: 58,
    height: 48,
  },
  {
    id: 'general',
    title: 'General',
    Icon: GeneralIcon,
    path: 'general',
    width: 56,
    height: 43,
  },
  {
    id: 'custom',
    title: 'Custom',
    Icon: CustomIcon,
    path: 'custom',
    width: 44,
    height: 49,
  },
];

export const lightsData = [
  {
    id: 'light-one',
    name: 'Down Light 1',
  },
  {
    id: 'lightTwo',
    name: 'Down Light 2',
  },
  {
    id: 'lightThree',
    name: 'Down Light 3',
  },
  {
    id: 'lightFour',
    name: 'Down Light 4',
  },
];

export const brightnessLevelData = [
  {
    id: 'low',
    name: 'Low',
    value: '25',
    className: 'bg-warning-300',
  },
  {
    id: 'medium',
    name: 'Medium',
    value: '50',
    className: 'bg-warning-400',
  },
  {
    id: 'high',
    name: 'High',
    value: '75',
    className: 'bg-warning-500',
  },
  {
    id: 'very-high',
    name: 'Very High',
    value: '100',
    className: 'bg-warning-600',
  },
];

export const curtainLevel = [
  {
    id: 'close',
    name: 'Close',
    value: 100,
    icon: CurtainClose,
  },
  {
    id: 'three-quarter',
    name: 'Three Quarter',
    value: 75,
    icon: CurtainThreeQuarter,
  },
  {
    id: 'half',
    name: 'Half',
    value: 50,
    icon: CurtainHalf,
  },
  {
    id: 'open',
    name: 'Open',
    value: 25,
    icon: CurtainOpen,
  },
];

export const ACModes = [
  {
    id: 'heating',
    name: 'Heating',
    value: 'heat',
    icon: ACHeatIcon,
  },
  {
    id: 'cooling',
    name: 'Cooling',
    value: 'cool',
    icon: ACCoolIcon,
  },
  {
    id: 'ventilation',
    name: 'Ventilation',
    value: 'fan',
    icon: ACFanIcon,
  },
  {
    id: 'dehumidify',
    name: 'Dehumidify',
    value: 'dry',
    icon: ACDryIcon,
  },
];

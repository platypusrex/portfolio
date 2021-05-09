import { keyframes } from '@chakra-ui/react';

const barOneAnimate = keyframes`
  0% { top: 8px; }
  30% { top: 17px; transform: rotate(0); }
  60% { transform: rotate(45deg); }
  100% { top: 17px; transform: rotate(135deg); }
`;

const barOneReverse = keyframes`
  0% { top: 17px; transform: rotate(-135deg); }
  30% { transform: rotate(-45deg); }
  60% { top: 17px; transform: rotate(0); }
  100% { top: 8px; }
`;

const barTwoAnimate = keyframes`
  0% { top: 17px; }
  30% { top: 17px;  transform: rotate(0); }
  60% { transform: rotate(45deg); }
  100% { transform: rotate(45deg); }
`;

const barTwoReverse = keyframes`
  0% { transform: rotate(-45deg); }
  30% { transform: rotate(-45deg); }
  60% { top: 17px; transform: rotate(0); }
  100% { top: 17px; }
`;

const barThreeAnimate = keyframes`
  0% { bottom: 8px; }
  30% { bottom: 17px; transform: rotate(0); }
  60% { transform: rotate(45deg); }
  100% { bottom: 17px; transform: rotate(45deg); }
`;

const barThreeReverse = keyframes`
  0% { bottom: 17px; transform: rotate(-45deg); }
  30% { transform: rotate(-45deg); }
  60% { bottom: 17px; transform: rotate(0); }
  100% { bottom: 8px; }
`;

export const hamburgerBars = [
  {
    top: '8px',
    animate: barOneAnimate,
    animateReverse: barOneReverse,
  },
  {
    top: '17px',
    animate: barTwoAnimate,
    animateReverse: barTwoReverse,
  },
  {
    bottom: '8px',
    animate: barThreeAnimate,
    animateReverse: barThreeReverse,
  },
];

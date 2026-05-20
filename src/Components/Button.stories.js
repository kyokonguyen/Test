import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = {
  args: {
    label: 'Primary Button',
    primary: true,
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    primary: false,
  },
};
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,

  argTypes: {
    label: {
      control: 'text',
    },

    primary: {
      control: 'boolean',
    },

    backgroundColor: {
      control: 'color',
    },

    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Primary = {
  args: {
    label: 'Primary Button',
    primary: true,
    backgroundColor: '#1EA7FD',
    size: 'medium',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    primary: false,
    backgroundColor: '#EEEEEE',
    size: 'medium',
  },
};
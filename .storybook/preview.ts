import type { Preview } from '@storybook/react';
import '../src/assets/styles/index.css';
import '../src/components/atoms/button/button.module.css';
import '../src/app/App.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffff',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

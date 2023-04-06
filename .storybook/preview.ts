import type { Preview } from "@storybook/react";
import { withTailwindTheme, DEFAULT_THEME } from './withTailwindTheme.decorator';
import '../src/index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

import { addDecorator, addParameters } from "@storybook/react";
//import { ThemeProvider, CSSReset, theme, Box } from "@chakra-ui/react";
import Center from "../components/Center/Center";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

addDecorator((story) => <Center>{story()}</Center>);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
addDecorator(withA11y);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

/*addDecorator((story) => {
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box m="4">{story()}</Box>
  </ThemeProvider>;
});*/

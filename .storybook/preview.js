/** @type { import('@storybook/vue3').Preview } */
import "../assets/css/main.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#eeeeee" },
        { name: "dark", value: "#111111" },
      ],
    },
  },
};

export const decorators = [
  () => ({
    components: { FontAwesomeIcon },
    template: "<story/>",
  }),
];

export default preview;

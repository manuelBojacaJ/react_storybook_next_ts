import Suscription from "./Suscription";
import * as Button from "../Button/Button.stories";
import * as Input from "../Input/Input.stories";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "form/Suscription",
  component: Suscription,
} as ComponentMeta<typeof Suscription>;

const Template: ComponentStory<typeof Suscription> = (args) => (
  <Suscription {...args} />
);

export const PrimarySubscription = Template.bind({});
PrimarySubscription.args = {
  variant: Button.Primary.args?.variant,
  children: Button.Primary.args?.children,
  size: Input.Large.args?.size,
  placeholder: Input.Large.args?.placeholder,
};

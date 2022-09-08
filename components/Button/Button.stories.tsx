import Button, { ButtonProps } from "./Button";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

const meta: Meta = {
  title: "form/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary",
  onClick: action("secundary click"),
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  children: "Success",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  children: "Danger",
};

export const Log = Template.bind({});
Log.args = {
  variant: "primary",
  children: "Log",
  onClick: () => console.log("Button clicked"),
};

export const Knobs = Template.bind({});
Knobs.args = {
  variant: "primary",
  children: text("label", "Button Label"),
  onClick: () => console.log("Button clicked"),
  disabled: boolean("Disabled", false),
};

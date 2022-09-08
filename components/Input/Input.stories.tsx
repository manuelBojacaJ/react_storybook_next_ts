import Input from "./Input";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "form/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  placeholder: "Small size",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  placeholder: "Medium size",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  placeholder: "Large size",
};

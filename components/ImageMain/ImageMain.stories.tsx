import React from "react";
import ImageMain, { ImageMainProps } from "./ImageMain";
import { Meta, Story } from "@storybook/react";

export default{
    title:'Components/HeroImage',
    component:ImageMain,
} as Meta;

export const Default: Story<ImageMainProps> = (args) => <ImageMain {...args} />;
// Define default arguments for the Default story
Default.args = {
    src:"/main.png",
    alt:"Image Header"
};
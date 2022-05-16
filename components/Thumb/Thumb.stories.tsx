import Thumb , { ThumbProps }from "./Thumb"
import { Meta, Story } from "@storybook/react";

export default {
title: "Components/Thumb",
component : Thumb,
} as Meta

const Template: Story<ThumbProps> = (args) => <Thumb {...args} />
export const Default = Template.bind({})
Default.args={
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
  name: "Pikachu"
}
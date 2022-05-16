import SearchBar, { SearchBarProp } from "./SearchBar";
import { Meta, Story } from "@storybook/react";

export default {
title: "Components/SearchBar",
component : SearchBar,
} as Meta

const Template: Story<SearchBarProp> = (args) => <SearchBar {...args}/>

export const Default = Template.bind({});
Default.args={
    placeholder:"Type to search..."
}
Default.parameters={
    psuedo: { hover: true}
}

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args={
    placeholder:"this is a custom placeholder...",
}
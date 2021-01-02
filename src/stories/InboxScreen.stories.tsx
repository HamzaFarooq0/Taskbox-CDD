import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/taskbox/redux";
import InboxScreen from "../components/InboxScreen";
import { Meta } from "@storybook/react/types-6-0";

import * as TaskListStories from "./TaskList.stories";

export default {
  component: InboxScreen,
  title: "inbox screen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as Meta;

const Template = (args: any) => <InboxScreen />;

export const Default: any = Template.bind({});

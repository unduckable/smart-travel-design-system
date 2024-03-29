import Plus from "@/src/icons/Plus";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from ".";
import { Icon } from "../icon";
import { Tab } from "../tab";
import { TabList } from "../tab-list";
import { TabPanel } from "../tab-panel";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs/Tabs",
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;
export const Default: Story = {
  render: () => (
    <Tabs className="s-w-full s-max-w-[300px]">
      <TabList>
        <Tab id="tab1">Tab 1</Tab>
        <Tab id="tab2">Tab 2</Tab>
        <Tab id="tab3">Tab 3</Tab>
        <Tab id="tab4">Tab 4</Tab>
      </TabList>
      <TabPanel id="tab1" className="dark:s-text-white-800">
        Tab content 1
      </TabPanel>
      <TabPanel id="tab2" className="dark:s-text-white-800">
        Tab content 2
      </TabPanel>
      <TabPanel id="tab3" className="dark:s-text-white-800">
        Tab content 3
      </TabPanel>
      <TabPanel id="tab4" className="dark:s-text-white-800">
        Tab content 4
      </TabPanel>
    </Tabs>
  ),
};

export const Example: Story = {
  render: () => (
    <Tabs className="s-w-full s-max-w-[300px]">
      <TabList>
        <Tab id="tab1" className="s-flex s-items-center">
          <Icon source={Plus} /> Tab 1
        </Tab>
        <Tab id="tab2" className="s-flex s-items-center">
          <Icon source={Plus} />
          Tab 2
        </Tab>
        <Tab id="tab3" className="s-flex s-items-center">
          <Icon source={Plus} />
          Tab 3
        </Tab>
        <Tab id="tab4" className="s-flex s-items-center">
          <Icon source={Plus} />
          Tab 4
        </Tab>
      </TabList>
      <TabPanel id="tab1" className="dark:s-text-white-800">
        Tab content 1
      </TabPanel>
      <TabPanel id="tab2" className="dark:s-text-white-800">
        Tab content 2
      </TabPanel>
      <TabPanel id="tab3" className="dark:s-text-white-800">
        Tab content 3
      </TabPanel>
      <TabPanel id="tab4" className="dark:s-text-white-800">
        Tab content 4
      </TabPanel>
    </Tabs>
  ),
};

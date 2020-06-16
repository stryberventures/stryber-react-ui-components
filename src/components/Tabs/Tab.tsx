import * as React from "react";
import { TabsContext } from "./TabsContext";

export interface TabInputs {
  id: string;
  title?: string;
  tabIndex?: string | number;
}

class Tab extends React.Component<TabInputs & { children: React.ReactNode; }, {}> {
  context: any;

  static contextType = TabsContext;

  componentDidMount() {
    this.context.context.addTab({
      id: this.props.id,
      title: this.props.title,
      tabIndex: this.props.tabIndex
    });
  }

  render() {
    const { context: { activeTab: { id: activeTabId } } } = this.context;
    const { children, id: tabId } = this.props;
    return activeTabId === tabId && children;
  }
}

export default Tab;

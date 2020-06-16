import * as React from "react";

const TabsContext = React.createContext({
  context: {
    prevActiveTab: {},
    activeTab: { id: null },
    tabs: [],
    addTab: (tab: any) => {},
    removeTab: (tab: any) => {},
    onClick: (tab: any) => (event: React.SyntheticEvent) => {}
  }
});

interface ITabProviderProps {
  activeTab: any;
  children: any;
}

interface ITabProviderState {
  tabs: any[];
  prevActiveTab: any;
  activeTab: any;
}

class TabProvider extends React.Component<ITabProviderProps, ITabProviderState> {

  state = {
    tabs: [],
    prevActiveTab: {},
    activeTab: this.props.activeTab
  };

  addTab = (tab: any) => {
    const isTabExist = this.state.tabs.find((t: any) => tab.id === t.id);

    if (!isTabExist) {
      this.setState((prevState: { tabs: any[] }, props) => {
        return {
          tabs: prevState.tabs.concat(tab)
        };
      });
    }
  };

  removeTab = (tabId: string) => {
    this.setState((prevState: { tabs: any[] }, props) => {
      return {
        tabs: prevState.tabs.filter(tab => tab.id !== tabId)
      };
    });
  };

  onClick = (tab: any) => (event: React.SyntheticEvent) => {
    this.setState((prevState: { activeTab: any }, props) => {
      return {
        prevActiveTab: prevState.activeTab,
        activeTab: tab
      };
    });
  };

  render() {
    return (
      <TabsContext.Provider
        value={{
          context: {
            ...this.state,
            addTab: this.addTab,
            removeTab: this.removeTab,
            onClick: this.onClick
          }
        }}
      >
        {this.props.children}
      </TabsContext.Provider>
    );
  }
}

const TabConsumer = TabsContext.Consumer;

export { TabProvider, TabsContext, TabConsumer };

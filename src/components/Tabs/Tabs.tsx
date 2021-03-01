import * as React from "react";
import { CSSProperties } from "react";
import classNames from 'classnames';
import { TabProvider, TabConsumer } from "./TabsContext";
import TabItem, {TabInputs} from "./Tab";

import useStyles from './Tabs.styles';

const ListTabs = ({ children, className = null, style = {}}: any) => {
  const classes = useStyles();
  return (<ul
    style={style}
    className={classNames([classes.listTabs, className])}
  >{children}
  </ul>)
};

const TabTitleItem = ({ children, innerRef, ...restProps }: any) => {
  const classes = useStyles();
  return (
    <li
      ref={innerRef}
      className={classes.tabTitleItem}
      {...restProps}
    >
      {children}
    </li>
  )
};

const ActiveTabBorder = ({ activeTabElement, ...restProps }: any) => {
  const classes = useStyles({ activeTabElement });

  return (
    <div className={classes.activeTabBorder} { ...restProps } />
  )
};

const TabAnchorItem = ({ isActiveTab, children, tabIndex, ...restProps}: any) => {
  const classes = useStyles({ isActiveTab });

  return (
    <button
      className={classes.tabAnchorItem}
      tabIndex={tabIndex}
      {...restProps}
    >
      { children }
    </button>
  );
};

const TabsContainer = ({ children, ...restProps }: any) => {
  const classes = useStyles();

  return (<div
      className={classes.tabsContainer}
      {...restProps}>
        {children}
  </div>)
};

const ReactTabs = ({ children, ...restProps }: any) => (
  <div style={{ position: "relative" }} { ...restProps }>
    { children }
  </div>
);

interface ITabsProps {
  activeTab: TabInputs;
  children: any;
  style?: CSSProperties;
  className?: string;
}

interface ITabsState {
  tabsElements: TabInputs[];
}

class Tabs extends React.Component<ITabsProps, ITabsState> {
  static Tab = TabItem;

  state = {
    tabsElements: []
  };

  updateDimensions() {
    this.setState({ ...this.state });
  }

  componentDidMount() {
    if (window) {
      window.addEventListener("resize", this.updateDimensions.bind(this));
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
  }

  render() {
    const {className, style} = this.props;


    return (
      <TabProvider activeTab={this.props.activeTab}>
        <TabConsumer>
          {value => (
            <ReactTabs>
              <TabsContainer>
                <ListTabs className={className} style={style}>
                  {value.context.tabs.map((tab: any, index) => (
                    <TabTitleItem
                      key={index}
                      id={tab.id}
                      innerRef={(tabElement: any) => {
                        if (!this.state.tabsElements[tab.id]) {
                          this.setState((prevState: { tabsElements: any[] }, props) => {
                            const tabsElements = prevState.tabsElements;
                            tabsElements[tab.id] = tabElement;

                            return {
                              tabsElements
                            };
                          });
                        }
                      }}
                    >
                      <TabAnchorItem
                        isActiveTab={value.context.activeTab.id === tab.id}
                        onClick={value.context.onClick(tab)}
                        tabIndex={tab.tabIndex || index}
                        onKeyPress={(event: any) => {
                          const code = event.keyCode || event.which;

                          if (code === 13) {
                            value.context.onClick(tab)(event);
                          }
                        }}
                      >
                        {tab.icon && tab.icon}
                        {tab.title}
                      </TabAnchorItem>
                    </TabTitleItem>
                  ))}
                </ListTabs>

                <ActiveTabBorder
                  activeTabElement={
                    this.state.tabsElements[value.context.activeTab.id!]
                  }
                />
              </TabsContainer>

              {this.props.children}
            </ReactTabs>
          )}
        </TabConsumer>
      </TabProvider>
    );
  }
}

export default Tabs;

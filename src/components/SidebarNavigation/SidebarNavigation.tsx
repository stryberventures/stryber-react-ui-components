import * as React from 'react';
import classNames from 'classnames';
import withStyles, { WithStyles } from 'react-jss';
import styles from './SidebarNavigation.styles';
import { DownArrow } from '../Icons';

/** Interfaces */
export interface ISidebarNavigationContainerProps {
  onRouteChange?: (section: any, item: any) => void;
  initialSection?: any;
  initialItem?: any;
  children?: any;
}

export interface ISidebarNavigationSection {
  title: any;
  description: any;
  value: any;
  children?: any;
}

export interface ISidebarNavigationItemProps {
  value: any;
  children?: any;
}

/** Context used by navigation components */
export interface ISidebarNavigationContext {
  updateSelectedSection: (section: any) => void;
  updateSelectedItem: (item: any) => void;
  selectedSection: any;
  selectedItem: any;
}

/** Creating form context with default values */
export const defaultNavbarNavigationContextValues = {
  updateSelectedSection: () => {},
  updateSelectedItem: () => {},
  selectedSection: undefined,
  selectedItem: undefined,
};
export const NavbarNavigationContext: React.Context<ISidebarNavigationContext> =
  React.createContext(defaultNavbarNavigationContextValues);


/** Main component */
const SidebarNavigationContainer = (props: ISidebarNavigationContainerProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    className,
    children,
    initialSection = null,
    initialItem = null,
    onRouteChange,
    classes,
    ...rest
  } = props;

  /** Update selected value */
  const [selectedSection, setSelectedSection] = React.useState(initialSection);
  const [selectedItem, setSelectedItem] = React.useState(initialItem);
  const updateSelectedSection = (section: any) => {
    setSelectedSection(() => section);
    setSelectedItem(() => null);
    onRouteChange && onRouteChange(section, null);
  };
  const updateSelectedItem = (item: any) => {
    setSelectedItem(() => item);
    onRouteChange && onRouteChange(selectedSection, item);
  };

  return (
    <div className={classNames(classes.container, className)} {...rest}>
      <NavbarNavigationContext.Provider
        value={{
          selectedSection,
          selectedItem,
          updateSelectedSection,
          updateSelectedItem,
        }}
      >
        { children }
      </NavbarNavigationContext.Provider>
    </div>
  );
};
const SidebarNavigationSection = (props: ISidebarNavigationSection & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    className,
    children,
    classes,
    onClick,
    value,
    title,
    description,
    ...rest
  } = props;

  /** Get navigation context */
  const {
    updateSelectedSection,
    selectedSection,
  } = React.useContext(NavbarNavigationContext);

  // const isExpanded, setExpanded] = React.useState(false);
  const isExpanded = value === selectedSection;

  /** On click event wrapper */
  const onClickWrapper = (e: any) => {
    e.stopPropagation();
    updateSelectedSection(value);
    onClick && onClick(e);
  };

  return (
    <div
      className={classNames(
        classes.section,
        className,
        (value === selectedSection) ? classes.sectionSelected : null,
      )}
      onClick={onClickWrapper}
      {...rest}
    >
      <div className={classes.sectionHeader}>
        <div className={classes.sectionInfoContainer}>
          <div className={classes.sectionTitle}>{title}</div>
          <div className={classes.sectionDescription}>{description}</div>
        </div>
        <div className={classes.expandIconContainer}>
        {
          children ? (
            <DownArrow
              className={classNames(classes.expandIcon, isExpanded ? classes.expandIconCollapsed : null)}
            />
          ) : null
        }
        </div>
      </div>
      <div
        className={classNames(classes.sectionChildren, isExpanded ? null : classes.sectionChildrenHidden)}
      >
        { (children && isExpanded) ? <><hr/>{children}</> : null }
      </div>
    </div>
  );
};

const SidebarNavigationItem = (props: ISidebarNavigationItemProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    className,
    children,
    classes,
    onClick,
    value,
    ...rest
  } = props;

  /** Get navigation context */
  const {
    updateSelectedItem,
    selectedItem,
  } = React.useContext(NavbarNavigationContext);

  /** On click event wrapper */
  const onClickWrapper = (e: any) => {
    e.stopPropagation();
    updateSelectedItem(value);
    onClick && onClick(e);
  };

  return (
    <div
      className={classNames(
        classes.item,
        className,
        (value === selectedItem) ? classes.itemSelected : null,
      )}
      onClick={onClickWrapper}
      {...rest}
    >
      { children }
    </div>
  );
};

/** Wrappers */
const StyledSidebarNavigationContainer = withStyles(styles)(SidebarNavigationContainer);
const PropsWrappedStyledSidebarNavigationContainer = (props: ISidebarNavigationContainerProps & React.HTMLProps<HTMLDivElement>) => <StyledSidebarNavigationContainer {...props} />;

const StyledSidebarNavigationSection = withStyles(styles)(SidebarNavigationSection);
const PropsWrappedStyledSidebarNavigationSection = (props: ISidebarNavigationSection & React.HTMLProps<HTMLDivElement>) => <StyledSidebarNavigationSection {...props} />;

const StyledSidebarNavigationItem = withStyles(styles)(SidebarNavigationItem);
const PropsWrappedStyledSidebarNavigationItem = (props: ISidebarNavigationItemProps & React.HTMLProps<HTMLDivElement>) => <StyledSidebarNavigationItem {...props} />;

/** Exports */
export default PropsWrappedStyledSidebarNavigationContainer;
export {
  PropsWrappedStyledSidebarNavigationContainer as SidebarNavigationContainer,
  PropsWrappedStyledSidebarNavigationSection as SidebarNavigationSection,
  PropsWrappedStyledSidebarNavigationItem as SidebarNavigationItem,
};

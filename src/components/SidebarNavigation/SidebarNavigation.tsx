import * as React from 'react';
import classNames from 'classnames';
import withStyles, { WithStyles } from 'react-jss';
import styles from './SidebarNavigation.styles';
import { DownArrow } from '../Icons';
import { useContext, useState } from 'react';

/** Interfaces */
export interface ISidebarNavigationContainerProps {
  onRouteChange?: (section: any, route: any) => void;
  initialSection?: any;
  initialRoute?: any;
  selectedSection?: any;
  selectedRoute?: any;
  children?: any;
  title?: string;
  description?: string;
}

export interface ISidebarNavigationSection {
  title: any;
  description: any;
  route?: any;
  children?: any;
  open?: boolean;
  icon?: any
  iconSize?: 'large' | 'mini';
}

export interface ISidebarNavigationRouteProps {
  route: any;
  children?: any;
  section?: any;
}

/** Context used by navigation components */
export interface ISidebarNavigationContext {
  updateSelectedSection: (section: any) => void;
  updateSelectedRoute: (route: any) => void;
  updateSectionAndRoute: (section: any, route: any) => void;
  selectedSection: any;
  selectedRoute: any;
}

/** Creating form context with default values */
export const defaultSidebarNavigationContext = {
  updateSelectedSection: () => {},
  updateSelectedRoute: () => {},
  updateSectionAndRoute: () => {},
  selectedSection: undefined,
  selectedRoute: undefined,
};
export const SidebarNavigationContext: React.Context<ISidebarNavigationContext> =
  React.createContext(defaultSidebarNavigationContext);


/** Main component */
const SidebarNavigationContainer = (props: ISidebarNavigationContainerProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    className,
    children,
    initialSection = null,
    initialRoute = null,
    selectedSection: propsSelectedSection,
    selectedRoute: propsSelectedRoute,
    onRouteChange,
    classes,
    title,
    description,
    ...rest
  } = props;

  /** Update selected value */
  const [selectedSection, setSelectedSection] = React.useState(initialSection);
  const [selectedRoute, setSelectedRoute] = React.useState(initialRoute);
  const updateSelectedSection = (section: any) => {
    setSelectedSection(() => section);
    setSelectedRoute(() => null);
    onRouteChange && onRouteChange(section, null);
  };
  const updateSelectedRoute = (route: any) => {
    setSelectedRoute(() => route);
    onRouteChange && onRouteChange(selectedSection, route);
  };

  const updateSectionAndRoute = (section: any, route: any) => {
    setSelectedSection(() => section);
    setSelectedRoute(() => route);
    onRouteChange && onRouteChange(section, route);
  };

  return (
    <div className={classNames(classes.container, className)} {...rest}>
      {title && (<div className={classes.titleContainer}>
        <div className={classes.avatar}/>
        <div className={classes.titleSection}>
          <p className={classes.title}>{title}</p>
          {description && <p className={classes.description}>{description}</p>}
        </div>
      </div>)
      }
      <SidebarNavigationContext.Provider
        value={{
          selectedSection: propsSelectedSection === undefined ? selectedSection : propsSelectedSection,
          selectedRoute: propsSelectedRoute === undefined ? selectedRoute : propsSelectedRoute,
          updateSelectedSection,
          updateSelectedRoute,
          updateSectionAndRoute,
        }}
      >
        { children }
      </SidebarNavigationContext.Provider>
    </div>
  );
};
const SidebarNavigationSection = (props: ISidebarNavigationSection & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    className,
    children,
    classes,
    onClick,
    route,
    title,
    description,
    open = false,
    icon = false,
    iconSize = 'large',
    ...rest
  } = props;

  /** Check if any children were passed */
  const areChildrenVisible = (Array.isArray(children) && children.length > 0) || !!children;

  /** Get navigation context */
  const {
    updateSelectedSection,
    selectedSection,
  } = useContext(SidebarNavigationContext);

  const [isExpanded, setExpanded] = useState(open);
  const isSelected = route === selectedSection;

  /** On click event wrapper */
  const onClickWrapper = (e: any) => {
    e.stopPropagation();
    setExpanded(!isExpanded);
    !areChildrenVisible && updateSelectedSection(route);
    onClick && onClick(e);
  };

  return (
    <div
      className={classNames(
        classes.section,
        className,
        (isSelected && !children) ? classes.sectionSelected : null,
      )}
      onClick={onClickWrapper}
      {...rest}
    >
      <div className={classes.sectionHeader}>
        <div className={classes.sectionInfoContainer}>
          {icon && React.cloneElement(icon, { className: classes.sectionIcon,  })}
          <div className={classes.sectionTitle}>{title}</div>
        </div>
        <div className={classes.expandIconContainer}>
        {
          areChildrenVisible ? (
            <DownArrow
              className={classNames(classes.expandIcon, (isExpanded) ? null : classes.expandIconCollapsed)}
            />
          ) : null
        }
        </div>
      </div>
      <div
        className={classNames(classes.sectionChildren, areChildrenVisible ? isExpanded ? null : classes.sectionChildrenHidden : isSelected ? null : classes.sectionChildrenHidden)}
      >
        { (areChildrenVisible && isExpanded) ? children
          .map((child: any, i: number) => React.cloneElement(child, { section: route, key: i })) : null }
      </div>
    </div>
  );
};

const SidebarNavigationRoute = (props: ISidebarNavigationRouteProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    className,
    children,
    classes,
    section,
    onClick,
    route,
    ...rest
  } = props;

  /** Get navigation context */
  const {
    selectedRoute,
    updateSectionAndRoute,
  } = React.useContext(SidebarNavigationContext);

  /** On click event wrapper */
  const onClickWrapper = (e: any) => {
    e.stopPropagation();
    updateSectionAndRoute(section, route);
    onClick && onClick(e);
  };

  return (
    <div
      className={classNames(
        classes.item,
        className,
        (route === selectedRoute) ? classes.itemSelected : null,
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

const StyledSidebarNavigationRoute = withStyles(styles)(SidebarNavigationRoute);
const PropsWrappedStyledSidebarNavigationRoute = (props: ISidebarNavigationRouteProps & React.HTMLProps<HTMLDivElement>) => <StyledSidebarNavigationRoute {...props} />;

/** Exports */
export default PropsWrappedStyledSidebarNavigationContainer;
export {
  PropsWrappedStyledSidebarNavigationContainer as SidebarNavigationContainer,
  PropsWrappedStyledSidebarNavigationSection as SidebarNavigationSection,
  PropsWrappedStyledSidebarNavigationRoute as SidebarNavigationRoute,
};

import * as React from 'react';
import classNames from 'classnames';
import withStyles, { WithStyles } from 'react-jss';
import styles from './NavbarNavigation.styles';

/** Interfaces */
export interface INavigationContainerProps {
  onRouteChange?: (newRoute: any) => void;
  initialRoute?: any;
  selectedRoute?: any;
  children?: any;
  variant?: 'normal' | 'underlined';
}

export interface INavigationRouteProps {
  route: any;
  children?: any;
  selected?: boolean;
}

/** Context used by navigation components */
export interface INavbarNavigationContext {
  updateSelectedRoute: (route: any) => void;
  selectedRoute: any;
  variant: 'normal' | 'underlined';
}

/** Creating form context with default values */
export const defaultNavbarNavigationContextValues = {
  updateSelectedRoute: () => {},
  selectedRoute: undefined,
  variant: 'normal' as 'normal' | 'underlined',
};
export const NavbarNavigationContext: React.Context<INavbarNavigationContext> =
  React.createContext(defaultNavbarNavigationContextValues);


/** Main component */
const NavigationContainer = (props: INavigationContainerProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    className,
    children,
    initialRoute = null,
    onRouteChange,
    selectedRoute: propsSelectedRoute,
    classes,
    variant = 'normal',
    ...rest
  } = props;

  /** Update selected value */
  const [selectedRoute, setSelectedRoute] = React.useState(initialRoute);
  const updateSelectedRoute = (route: any) => {
    setSelectedRoute(() => route);
    onRouteChange && onRouteChange(route);
  };

  return (
    <div className={classNames(classes.container, className)} {...rest}>
      <NavbarNavigationContext.Provider
        value={{
          variant,
          selectedRoute: propsSelectedRoute === undefined ? selectedRoute : propsSelectedRoute,
          updateSelectedRoute,
        }}
      >
        { children }
      </NavbarNavigationContext.Provider>
    </div>
  );
};

const NavigationRoute = (props: INavigationRouteProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    className,
    children,
    classes,
    onClick,
    selected = false,
    route,
    ...rest
  } = props;

  /** Get navigation context */
  const {
    updateSelectedRoute,
    selectedRoute,
    variant,
  } = React.useContext(NavbarNavigationContext);

  /** On click event wrapper */
  const onClickWrapper = (e: any) => {
    e.stopPropagation();
    updateSelectedRoute(route);
    onClick && onClick(e);
  };

  return (
    <div
      className={classNames(
        classes.item,
        className,
        (route === selectedRoute || selected) ? classes.itemSelected : null,
        variant,
      )}
      onClick={onClickWrapper}
      {...rest}
    >
      { children }
    </div>
  );
};

/** Wrappers */
const StyledNavigationContainer = withStyles(styles)(NavigationContainer);
const PropsWrappedStyledNavigationContainer = (props: INavigationContainerProps & React.HTMLProps<HTMLDivElement>) => <StyledNavigationContainer {...props} />;

const StyledNavigationRoute = withStyles(styles)(NavigationRoute);
const PropsWrappedStyledNavigationRoute = (props: INavigationRouteProps & React.HTMLProps<HTMLDivElement>) => <StyledNavigationRoute {...props} />;

/** Exports */
export default PropsWrappedStyledNavigationContainer;
export {
  PropsWrappedStyledNavigationRoute as NavigationRoute,
  PropsWrappedStyledNavigationContainer as NavigationContainer,
};

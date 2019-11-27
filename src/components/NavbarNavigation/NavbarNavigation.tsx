import * as React from 'react';
import classNames from 'classnames';
import withStyles, { WithStyles } from 'react-jss';
import styles from './NavbarNavigation.styles';

/** Interfaces */
export interface INavigationContainerProps {
  onChange?: (newValue: any) => void;
  initialValue?: any;
  children?: any;
  variant?: 'normal' | 'underlined';
}

export interface INavigationItemProps {
  children?: any;
  selected?: boolean;
  value: any;
}

/** Context used by navigation components */
export interface INavbarNavigationContext {
  updateSelectedValue: (value: any) => void;
  selectedValue: any;
  variant: 'normal' | 'underlined';
}

/** Creating form context with default values */
export const defaultNavbarNavigationContextValues = {
  updateSelectedValue: () => {},
  selectedValue: undefined,
  variant: 'normal' as 'normal' | 'underlined',
};
export const NavbarNavigationContext: React.Context<INavbarNavigationContext> =
  React.createContext(defaultNavbarNavigationContextValues);


/** Main component */
const NavigationContainer = (props: INavigationContainerProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    className,
    children,
    initialValue = null,
    onChange,
    classes,
    variant = 'normal',
    ...rest
  } = props;

  /** Update selected value */
  const [selectedValue, setSelectedValue] = React.useState(initialValue);
  const updateSelectedValue = (value: any) => {
    setSelectedValue(() => value);
    onChange && onChange(value);
  };

  return (
    <div className={classNames(classes.container, className)} {...rest}>
      <NavbarNavigationContext.Provider
        value={{
          variant,
          selectedValue,
          updateSelectedValue,
        }}
      >
        { children }
      </NavbarNavigationContext.Provider>
    </div>
  );
};

const NavigationItem = (props: INavigationItemProps & React.HTMLProps<HTMLDivElement> & WithStyles<typeof styles>) => {
  const {
    className,
    children,
    classes,
    onClick,
    selected = false,
    value,
    ...rest
  } = props;

  /**  */
  const {
    updateSelectedValue,
    selectedValue,
    variant,
  } = React.useContext(NavbarNavigationContext);

  /**  */
  const onClickWrapper = (e: any) => {
    e.stopPropagation();
    updateSelectedValue(value);
    onClick && onClick(e);
  };

  return (
    <div
      className={classNames(
        classes.item,
        className,
        (value === selectedValue || selected) ? classes.itemSelected : null,
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

const StyledNavigationItem = withStyles(styles)(NavigationItem);
const PropsWrappedStyledNavigationItem = (props: INavigationItemProps & React.HTMLProps<HTMLDivElement>) => <StyledNavigationItem {...props} />;

/** Exports */
export default PropsWrappedStyledNavigationContainer;
export {
  PropsWrappedStyledNavigationItem as NavigationItem,
  PropsWrappedStyledNavigationContainer as NavigationContainer,
};

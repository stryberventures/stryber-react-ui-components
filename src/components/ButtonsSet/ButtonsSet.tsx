import * as React from "react";
import withStyles, { WithStyles } from "react-jss";
import classNames from "classnames";
import styles from "./ButtonsSet.styles";
import { Button } from "../Button";
/** Interfaces */
export interface IButtonsData {
  label: string;
  active: boolean;
  onClick: (e: React.SyntheticEvent) => void;
}

export interface IButtonsSetProps extends React.HTMLProps<HTMLDivElement> {
  className?: any;
  buttonsData: IButtonsData[];
}

/** Main component */
const ButtonsSet = (props: IButtonsSetProps & WithStyles<typeof styles>) => {
  const { classes, className, buttonsData, ...rest } = props;

  const renderButtons = () =>
    buttonsData.map(({ label, onClick = () => {}, active }) => (
      <Button
        onClick={onClick}
        sizeVariant="mini"
        className={classes.button}
        variant={active ? 'primary' : 'secondary'}
      >
        {label}
      </Button>
    ));

  return (
    <div className={classNames([classes.root, className])} {...rest}>
      {renderButtons()}
    </div>
  );
};

/** Wrappings */
const StyledButtonsSet = withStyles(styles)(ButtonsSet);
const PropsWrappedStyledBadge = (props: IButtonsSetProps) => (
  <StyledButtonsSet {...props} />
);

/** Exports */
export default PropsWrappedStyledBadge;
export { PropsWrappedStyledBadge as ButtonsSet };

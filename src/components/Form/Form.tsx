import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './Form.styles';

export const FormContext = React.createContext({ onChange: (d: any) => {} });

interface FormProps {
  onSubmit: (formData: any) => void;
  children: any;
  [key: string]: any;
}

const Form = ({
  classes,
  children,
  onSubmit,
  ...rest
}: FormProps & WithStyles<typeof styles>) => {
  const [formValues, setFormValues] = React.useState({});
  const updateFormValue = (e: React.BaseSyntheticEvent) => {
    const { name, value } = e.target;
    const newFormValues = { ...formValues };
    newFormValues[name] = value;
    setFormValues(newFormValues);
  };
  return (
    <form
      { ...rest }
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        onSubmit(formValues);
      }}
      className={ classNames([
        classes.root,
      ]) }
    >
      <FormContext.Provider value={{ onChange: updateFormValue }}>
        { children }
      </FormContext.Provider>
    </form>
  );
};

const StyledForm = withStyles(styles)(Form);

export default StyledForm;
export { StyledForm as Form };

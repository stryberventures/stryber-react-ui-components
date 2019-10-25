import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';

import styles from './Form.styles';

/** Context used by input fields within the form */
export interface IFormContext {
  formValues: any;
  formErrors: any;
  onChange: (data: any) => void;
  initialValues?: any;
}

export const FormContext: React.Context<IFormContext> =
  React.createContext({
    onChange: (data: any) => {},
    formValues: {},
    formErrors: {},
    initialValues: {},
  });

/** Form props */
interface FormProps {
  onSubmit: (formData: any) => void;
  children: any;
  initialValues?: any;
  validationSchema?: any;
  [key: string]: any;
}

const Form = (props: FormProps & WithStyles<typeof styles>) => {
  const {
    classes,
    children,
    onSubmit,
    validationSchema,
    initialValues,
    ...rest
  } = props;

  const [formValues, setFormValues] = React.useState(initialValues || {});
  const [formErrors, setFormErrors] = React.useState({});

  const updateFormValue = (e: React.BaseSyntheticEvent) => {
    const { name, value } = e.target;
    const newFormValues = { ...formValues };
    const newFormErrors = { ...formErrors };
    newFormValues[name] = value;
    formErrors[name] = '';
    /** VALIDATION REQUIRED HERE */
    setFormValues(newFormValues);
    setFormErrors(newFormErrors);
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
      <FormContext.Provider
        value={{ onChange: updateFormValue, initialValues, formValues, formErrors, }}
      >
        { children }
      </FormContext.Provider>
    </form>
  );
};

const StyledForm = withStyles(styles)(Form);

export default StyledForm;
export { StyledForm as Form };

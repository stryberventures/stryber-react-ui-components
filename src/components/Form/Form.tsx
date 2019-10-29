import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';
import * as yup from 'yup';

import styles from './Form.styles';

/** Context used by input fields within the form */
export interface IFormContext {
  formValues: any;
  formErrors: any;
  formTouched: any;
  onChange: (data: any) => void;
  onBlur: (data: any) => void;
  initialValues?: any;
}

export const FormContext: React.Context<IFormContext> =
  React.createContext({
    onChange: (data: any) => {},
    onBlur: (data: any) => {},
    formValues: {},
    formErrors: {},
    formTouched: {},
    initialValues: {},
  });

/** Form props */
interface FormProps {
  onSubmit: (formData: any) => void;
  onError?: (errorData: any, formData: any) => void;
  children: any;
  initialValues?: any;
  validationSchema?: any;
  [key: string]: any;
}

/** Form component */
const Form = (props: FormProps & React.HTMLProps<HTMLFormElement> & WithStyles<typeof styles>) => {
  const {
    classes,
    children,
    onSubmit,
    onError,
    validationSchema,
    initialValues,
    ...rest
  } = props;

  /** State */
  const [formValues, setFormValues] = React.useState(initialValues || {});
  const [formErrors, setFormErrors] = React.useState({});
  const [formTouched, setFormTouched] = React.useState({});

  /** Yup validate function wrapper */
  const validate = (values: any) => {
    if (validationSchema) {
      validationSchema
        .validate(values, { abortEarly: false })
        .then(() => setFormErrors({}))
        .catch((errors: yup.ValidationError) => {
          const parsedErrors = errors.inner.reduce((a: any, v: any) => ({ ...a, [v.path]: v.message }), {});
          setFormErrors(parsedErrors);
        });
    }
  };

  /** Updating form values whenever a change is made within an input field */
  const updateFormValue = (e: React.BaseSyntheticEvent) => {
    const { name, value } = e.target;
    const newFormValues = { ...formValues };
    newFormValues[name] = value;

    /** Validating new values */
    validate(newFormValues);

    setFormValues(newFormValues);
  };

  /** Updating field touched status (needed for a correct error display */
  const updateFormTouched = (e: React.BaseSyntheticEvent) => {
    const { name } = e.target;
    const newFormTouched = { ...formTouched };
    newFormTouched[name] = true;
    setFormTouched(newFormTouched);
  };

  /** Running first validation on mount */
  React.useEffect(() => {
    validate(formValues);
  }, []);

  return (
    <form
      { ...rest }
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        if (Object.keys(formErrors).length > 0) {
          onError && onError(formErrors, formValues);
        } else {
          onSubmit(formValues);
        }
      }}
      className={ classNames([
        classes.root,
      ]) }
    >
      <FormContext.Provider
        value={{
          onChange: updateFormValue,
          onBlur: updateFormTouched,
          initialValues,
          formValues,
          formErrors,
          formTouched
        }}
      >
        { children }
      </FormContext.Provider>
    </form>
  );
};

const StyledForm = withStyles(styles)(Form);

export default StyledForm;
export { StyledForm as Form };

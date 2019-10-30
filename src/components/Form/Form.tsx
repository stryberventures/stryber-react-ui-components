import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import classNames from 'classnames';
import * as yup from 'yup';

import styles from './Form.styles';

/** Context used by input fields within the form */
export interface IFormContext {
  updateFormValue: (name: string, data: any) => void;
  updateFormTouched: (name: string, data: any) => void;
  unsetFormValue: (name: any) => void,
  formValues: any;
  formErrors: any;
  formTouched: any;
  initialValues?: any;
}

export const FormContext: React.Context<IFormContext> =
  React.createContext({
    updateFormValue: (name: string, data: any) => {},
    updateFormTouched: (name: string, data: any) => {},
    unsetFormValue: (name: any) => {},
    formValues: {},
    formErrors: {},
    formTouched: {},
    initialValues: {},
  });

/** Form props */
interface FormProps {
  onSubmit: (formData: any) => void;
  onError?: (errorData: any, formData: any) => void;
  onChange?: (newFormData: any) => void;
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
    onChange,
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
  const updateFormValue = (name: string, value: any) => {
    /** Setting new values in state */
    setFormValues((formValues: any) => {
      const newFormValues = { ...formValues };
      newFormValues[name] = value;

      /** Validating new values */
      validate(newFormValues);

      /** Sending on change callback (if it was provided) */
      onChange && onChange({ ...newFormValues });

      return newFormValues;
    });

  };

  /** Updating field touched status (needed for a correct error display */
  const updateFormTouched = (name: string, touched: boolean = true) => {
    setFormTouched((formTouched: any) => {
      const newFormTouched = {...formTouched};
      newFormTouched[name] = touched;
      setFormTouched(newFormTouched);
    });
  };

  /** Un-setting value (clearing it from the form) */
  const unsetFormValue = (name: string) => {
    updateFormValue(name, undefined);
    updateFormTouched(name, false);
  };

  /** Mount / unmount logic */
  React.useEffect(() => {
    /** Running first validation on mount */
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
          updateFormValue,
          updateFormTouched,
          unsetFormValue,
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

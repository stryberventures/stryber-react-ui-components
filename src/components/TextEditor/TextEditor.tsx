import * as React from 'react';
//@ts-ignore
import CKEditor from '@ckeditor/ckeditor5-react';
//@ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormContext } from '../Form';
import useStyles from "./TextEditor.styles";
import classNames from 'classnames';
import { useState } from 'react';

interface ITextEditorProps {
  className?: any;
  clearFormValueOnUnmount?: boolean;
  label?: string;
  name?: string;
  content?: any;
  errorMessage?: string;
  placeholder?: string;
  controlled?: boolean;
  value?: string;
  onChange?: (text?: string) => {};
  onFocus?: (e: React.BaseSyntheticEvent) => void;
  onBlur?: (e: React.BaseSyntheticEvent) => void;
}

const TextEditor: React.FC<ITextEditorProps> = ({
  className,
  clearFormValueOnUnmount = true,
  errorMessage = null,
  value = '',
  onChange = (text): void => {},
  label = null,
  onFocus,
  onBlur,
  name = 'unnamed',
  controlled = false,
  placeholder= ''
}) => {
  const classes = useStyles();

  const {
    updateFormValue,
    unsetFormValue,
    formValues,
    formErrors,
    formTouched,
    updateFormTouched
  } = React.useContext(FormContext);


  const errorMsg = (name && formTouched && formTouched[name] && formErrors[name]) || errorMessage;

  const [internalValue, setInternalValue] = useState((name && formValues && formValues[name]) || value);
  const [editorAPI, setEditorAPI] = useState(null);

  const onHandleChange = (event: React.SyntheticEvent, editor: any) => {
    setInternalValue(() => editor.getData());
    // @ts-ignore
    const data = { name, value: editorAPI.getData() };
    formValues && updateFormValue(name, data.value);
    onChange(editor.getData());
  };

  const onFocusWrapper = (e: React.BaseSyntheticEvent) => {
    /** Independent callback */
    onFocus && onFocus(e);
  };
  const onBlurWrapper = (e: React.BaseSyntheticEvent) => {
    /** Passthrough to form context */
    formTouched && updateFormTouched(name, true);
    /** Independent callback */
    onBlur && onBlur(e);
  };

  React.useEffect(() => {
    /** On mount */
    /** Update form with internal value on mount */
    formValues && updateFormValue(name, internalValue, true);

    return () => {
      /** On unmount */
      /** Clear Form value if needed */
      clearFormValueOnUnmount && formValues && unsetFormValue(name);
    };
  }, []);

  return (
    <div className={classNames(classes.editor_content, {[classes.editor_content_error]: errorMsg}, className)}>
      <label>
        {label}
      </label>
      <CKEditor
        editor={ ClassicEditor }
        data={controlled ? value : internalValue}
        onInit={(editor: any) => {
          setEditorAPI(editor);
        }}
        onChange={onHandleChange}
        onBlur={onBlurWrapper}
        onFocus={onFocusWrapper}
        config={{
          placeholder,
        }}
      />
      {
        errorMsg
          ? (
            <div
              className={classes.errorMessage}
            >
              { errorMsg }
            </div>
          ) : null
      }
    </div>
  )
};

export default TextEditor;

import * as React from 'react';
import { FormContext } from '../Form';
import useStyles from "./TextEditor.styles";
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

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
  loading?: boolean;
  loadingStyle?: any;
  loadingClassName?: string;
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
  placeholder= '',
  loading = false,
  loadingClassName,
  loadingStyle = {},
}) => {
  const classes = useStyles();

  const {
    updateFormValue,
    unsetFormValue,
    formValues,
    formErrors,
    formTouched,
    updateFormTouched,
    loading: formLoading
  } = React.useContext(FormContext);

  const editorRef = useRef()
  const [ editorLoaded, setEditorLoaded ] = useState( false )
  // @ts-ignore
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect( () => {
    // @ts-ignore
    editorRef.current = {
      CKEditor: require( '@ckeditor/ckeditor5-react' ),
      ClassicEditor: require( '@ckeditor/ckeditor5-build-classic' )
    }
    setEditorLoaded( true )
  }, [] )

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

  if (formLoading || loading) {
    return (<div style={loadingStyle} className={loadingClassName}>
      {label && <div className={classNames(
        'loadingAnimation',
        classes.labelLoading,
      )}/>}
      <div className={classNames(
        'loadingAnimation',
        classes.inputLoading,
      )}/>
    </div>)
  }

  return (
    <div className={classNames(classes.editor_content, {[classes.editor_content_error]: errorMsg}, className)}>
      <label>
        {label}
      </label>
      {editorLoaded ? (<CKEditor
        editor={ClassicEditor}
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
      />) : null}
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

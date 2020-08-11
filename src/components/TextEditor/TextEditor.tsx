import * as React from 'react';
//@ts-ignore
import CKEditor from '@ckeditor/ckeditor5-react';
//@ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import useStyles from "./TextEditor.styles";

const TextEditor: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.editor_content}>
      <CKEditor
        editor={ ClassicEditor }
        data="<p>Hello from CKEditor 5!</p>"
        onInit={ (editor: any) => {
          // You can store the "editor" and use when it is needed.
          console.log( 'Editor is ready to use!', editor );
        } }
        onChange={ ( event: any, editor: any ) => {
          const data = editor.getData();
          console.log( { event, editor, data } );
        } }
        onBlur={ ( event: any, editor: any ) => {
          console.log( 'Blur.', editor );
        } }
        onFocus={ ( event: any, editor: any ) => {
          console.log( 'Focus.', editor );
        } }
      />
    </div>
  )
};

export default TextEditor;

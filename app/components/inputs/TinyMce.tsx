import React, { useMemo, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface FormattedTextEditorProps {
  initialValue?: string;
  onEditorChange?: (description: string) => void;
}


const FormattedTextEditor: React.FC<FormattedTextEditorProps> = ({
  initialValue = '',
  onEditorChange = () => {},
}) => {
  const [description, setContent] = useState(initialValue);

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
    onEditorChange(newContent);
  };

  return (
    <div>
      <Editor
        apiKey="vol6lu7n059b7rchza51pai6l81pkiwjnobnift7ip87ctkx" // Replace with your TinyMCE API key
        initialValue={initialValue}
        value={description}
        init={{
          height: 300,
          menubar: false,
          plugins: [
            'advlist','autolink',

            'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
 
            'fullscreen','insertdatetime','media','table','help','wordcount'
          ],
          toolbar:
          'undo redo | casechange blocks | bold italic backcolor | ' +

          'alignleft aligncenter alignright alignjustify | ' +

          'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
};

export default FormattedTextEditor;
import React from 'react';
import { Editor } from '@monaco-editor/react';
import { useFormEditor } from './hooks/useFormEditor';
import { MORE_RADIO_BUTTONS_FORM } from './constants/forms/moreRadioButtons';

export const FormEditor = () => {
  const { validate, renderForm, saveEditorReference, isValid } = useFormEditor();
  return (
    <>
      <main>
        <Editor
          height="50vh"
          defaultLanguage="json"
          defaultValue={JSON.stringify(MORE_RADIO_BUTTONS_FORM)}
          onValidate={validate}
          onMount={saveEditorReference}
        />
      </main>
      <footer>
        <button
          disabled={!isValid}
          onClick={renderForm}
          style={{
            width: '100%',
            minHeight: '40px'
          }}>
          Apply
        </button>
      </footer>
    </>
  );
};

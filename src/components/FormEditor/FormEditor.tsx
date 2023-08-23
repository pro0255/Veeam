import React from 'react';
import { Editor } from '@monaco-editor/react';
import { useFormEditor } from './hooks/useFormEditor';
import { DEFAULT_EDITOR_VALUE } from './constants/default';

export const FormEditor = () => {
  const { validate, renderForm, saveEditorReference, isValid } = useFormEditor();
  return (
    <>
      <main>
        <Editor
          height="50vh"
          defaultLanguage="json"
          defaultValue={JSON.stringify(DEFAULT_EDITOR_VALUE)}
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

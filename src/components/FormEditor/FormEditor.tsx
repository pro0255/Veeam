import React from 'react';
import { Editor } from '@monaco-editor/react';
import { useFormEditor } from './hooks/useFormEditor';
import { DEFAULT_EDITOR_VALUE } from './constants/default';

export const FormEditor = () => {
  const { validate } = useFormEditor();
  return (
    <Editor
      height="50vh"
      defaultLanguage="json"
      defaultValue={JSON.stringify(DEFAULT_EDITOR_VALUE)}
      onValidate={validate}
    />
  );
};

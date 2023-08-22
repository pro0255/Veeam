import React from 'react';
import { Editor } from '@monaco-editor/react';
import { useFormEditor } from './hooks/useFormEditor';

export const FormEditor = () => {
  const { validate } = useFormEditor();
  return <Editor height="90vh" defaultLanguage="json" onValidate={validate} />;
};

import React from 'react';
import { Editor } from '@monaco-editor/react';

export const FormEditor = () => {
  return <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />;
};

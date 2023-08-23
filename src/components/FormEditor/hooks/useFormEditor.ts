import { initializeMonaco } from '../utils/initializeMonaco';
import { useRef, useState } from 'react';
import { OnMount, OnValidate } from '@monaco-editor/react';

initializeMonaco();

type EditorType = Parameters<OnMount>[0];

export const useFormEditor = () => {
  const editorRef = useRef<EditorType | null>(null);
  const [isValid, setIsValid] = useState<boolean>(false);

  const validate: OnValidate = (markers) => {
    const areEmpty = markers.length === 0;
    setIsValid(areEmpty);
  };

  const saveEditorReference: OnMount = (editor) => {
    editorRef.current = editor;
  };

  const renderForm = () => {
    if (editorRef.current) {
      alert(editorRef.current.getValue());
    }
  };

  return { validate, renderForm, saveEditorReference, isValid };
};

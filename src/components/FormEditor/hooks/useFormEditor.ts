import { initializeMonaco } from '../utils/initializeMonaco';
import { useRef, useState } from 'react';
import { OnMount, OnValidate } from '@monaco-editor/react';
import { useFormStorageContext } from '../../FormStorage';

initializeMonaco();

type EditorType = Parameters<OnMount>[0];

export const useFormEditor = () => {
  const editorRef = useRef<EditorType | null>(null);
  const [isValid, setIsValid] = useState<boolean>(true);
  const formStorage = useFormStorageContext();

  const validate: OnValidate = (markers) => {
    const areEmpty = markers.length === 0;
    setIsValid(areEmpty);
  };

  const saveEditorReference: OnMount = (editor) => {
    editorRef.current = editor;

    // Needs to run after the value is set into editor (without timeout the default will be not formatted)
    setTimeout(() => {
      editor.getAction('editor.action.formatDocument')?.run();
    }, 200);
  };

  const renderForm = () => {
    if (editorRef.current) {
      const editorValue = editorRef.current.getValue();
      formStorage.save(editorValue);
    }
  };

  return { validate, renderForm, saveEditorReference, isValid };
};

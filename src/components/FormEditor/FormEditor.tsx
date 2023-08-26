import React from 'react';
import { Editor } from '@monaco-editor/react';
import { Button } from '../Button';
import { useFormStorageContext } from '../FormStorage';
import { MORE_RADIO_BUTTONS_FORM } from './constants/forms/moreRadioButtons';
import { useFormEditor } from './hooks/useFormEditor';

export const FormEditor = () => {
  const { form } = useFormStorageContext();
  const { validate, renderForm, saveEditorReference, isValid } = useFormEditor();
  return (
    <div className="flex flex-col w-full h-[100wh]">
      <main className="w-full h-full max-h-[90%]">
        <Editor
          height="85vh"
          defaultLanguage="json"
          defaultValue={JSON.stringify(form ?? MORE_RADIO_BUTTONS_FORM)}
          onValidate={validate}
          onMount={saveEditorReference}
        />
      </main>
      <footer className="p-5 border-t-2 border-gray-200 h-full flex flex-col items-center justify-center">
        <span className="w-[25%]">
          <Button disabled={!isValid} onClick={renderForm} className="w-full">
            Apply
          </Button>
        </span>
      </footer>
    </div>
  );
};

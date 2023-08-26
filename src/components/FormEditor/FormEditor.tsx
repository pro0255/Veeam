import React from 'react';
import { Editor } from '@monaco-editor/react';
import { useFormEditor } from './hooks/useFormEditor';
import { MORE_RADIO_BUTTONS_FORM } from './constants/forms/moreRadioButtons';
import { Button } from '../View/Button';
import { useFormStorageContext } from '../FormStorage';

export const FormEditor = () => {
  const { form } = useFormStorageContext();
  const { validate, renderForm, saveEditorReference, isValid } = useFormEditor();
  return (
    <div className="flex flex-col w-full h-[100vh]">
      <main className="w-full h-full max-h-[80%] p-10">
        <Editor
          defaultLanguage="json"
          defaultValue={JSON.stringify(form ?? MORE_RADIO_BUTTONS_FORM)}
          onValidate={validate}
          onMount={saveEditorReference}
        />
      </main>
      <footer className="p-5 border-t-2 border-gray-200 fixed bottom-0 w-[100vw] flex flex-row items-center justify-center">
        <span className="w-[50%]">
          <Button
            disabled={!isValid}
            onClick={renderForm}
            style={{
              width: '100%',
              minHeight: '40px'
            }}>
            Apply
          </Button>
        </span>
      </footer>
    </div>
  );
};

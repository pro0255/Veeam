import { loader } from '@monaco-editor/react';
import { SCHEMA } from '../constants/schema';

export const initializeMonaco = () => {
  loader.init().then((monaco) => {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [SCHEMA],
      schemaValidation: 'error'
    });
  });
};

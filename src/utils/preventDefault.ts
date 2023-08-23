import { SyntheticEvent } from 'react';

export const PREVENT_DEFAULT = (e: SyntheticEvent) => {
  e.preventDefault();
};

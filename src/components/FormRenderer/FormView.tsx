import { FormTitle } from './components/FormTitle';
import { FormFields } from './components/FormFields/FormFields';
import { FormFooter } from './components/FormFooter/FormFooter';
import React from 'react';
import { FormType } from '../types';
import { Card } from '../Card';

type Props = FormType;

export const FormView = ({ items, footer, title }: Props) => {
  return (
    <div className={'w-full h-[100vh] flex justify-center items-center'}>
      <Card>
        <form className="flex flex-col h-[80vh] w-full justify-evenly items-center">
          {title && (
            <div className="p-10 w-full flex flex-row border-b-2 border-gray-200 justify-center">
              <FormTitle title={title} />
            </div>
          )}
          <FormFields items={items} />
          {footer && <FormFooter buttons={footer} />}
        </form>
      </Card>
    </div>
  );
};

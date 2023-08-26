import React from 'react';

export type FormTitleProps = {
  title: string;
};

export const FormTitle = ({ title }: FormTitleProps) => {
  return <h3 className="text-4xl font-extrabold dark:text-white">{title}</h3>;
};

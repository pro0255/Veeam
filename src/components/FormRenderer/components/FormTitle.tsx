import React from 'react';

export type FormTitleProps = {
  title: string;
};

export const FormTitle = ({ title }: FormTitleProps) => {
  return <h3>{title}</h3>;
};

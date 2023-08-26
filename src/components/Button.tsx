import React, { HTMLProps } from 'react'

type Props = { className?: string };

export const Button = ({ className, ...props }: HTMLProps<HTMLButtonElement> & Props) => {
  return (
    <button
      className={`p-2.5 border-solid border-2 border-slate-100 rounded-md bg-blue-600 text-white disabled:opacity-25 ${
        props.disabled ? '' : 'hover:bg-blue-700 hover:animate-make-bigger'
      } ${className}`}
      {...props}
      type={'button'}
    />
  );
};

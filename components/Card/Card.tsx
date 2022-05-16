import React, { FC } from 'react';
import tw from 'twin.macro'
export interface CardProps {
  variant?: 'elevation' | 'outlined';
  classes?: string;
  children?:React.ReactNode
}
export const Card: FC<CardProps> = ({ variant = 'elevation', children, classes }) => {
    return (
    <div
      css={[
          classes,
          tw`rounded-xl p-2`,
          variant==="elevation" && tw`shadow-md`,
          variant==="outlined" && tw`border-2 border-solid`,
      ]}>
      {children}
    </div>
  );
};
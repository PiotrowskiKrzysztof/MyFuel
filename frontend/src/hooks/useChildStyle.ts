import React from 'react';
import { DetailedReactHTMLElement } from 'react';

const useChildStyle = (
  children: React.ReactNode,
  styles: { [key in string]: string | number },
) => {
  return React.Children.map(children, child =>
    React.cloneElement(child as DetailedReactHTMLElement<any, any>, {
      style: styles,
    }),
  );
};

export default useChildStyle;

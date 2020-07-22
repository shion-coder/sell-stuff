import React from 'react';

export const navigationRef: any = React.createRef();

const navigate = (name: string, params?: string) => navigationRef.current?.navigate(name, params);

export default {
  navigate,
};

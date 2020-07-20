import React, { Dispatch, SetStateAction, PropsWithChildren, createContext, useState } from 'react';

/* -------------------------------------------------------------------------- */

const createContextState = <T extends object | null>(defaultValue: T) => {
  type UpdateType = Dispatch<SetStateAction<typeof defaultValue>>;

  const defaultUpdate: UpdateType = () => defaultValue;

  const Context = createContext({
    state: defaultValue,
    update: defaultUpdate,
  });

  const Provider = (props: PropsWithChildren<object>) => {
    const [state, update] = useState(defaultValue);

    return <Context.Provider value={{ state, update }} {...props} />;
  };

  return [Context, Provider] as const;
};

export default createContextState;

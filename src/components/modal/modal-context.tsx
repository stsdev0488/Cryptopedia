import React, { FC, useState } from 'react';

interface IModalContext {
  isOpen?: boolean;
  setOpen?: (isOpen: boolean) => void;
}

export const ModalContext = React.createContext<IModalContext>({});

export const ModalContextProvider: FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

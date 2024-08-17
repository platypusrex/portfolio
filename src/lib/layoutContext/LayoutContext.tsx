import { createContext, FCC, useCallback, useContext, useState } from 'react';

export interface LayoutContextType {
  isMenuOpen: boolean;
  setMenuOpen: () => void;
}

const LayoutContext = createContext<LayoutContextType>({
  isMenuOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setMenuOpen: () => {},
});

export const LayoutProvider: FCC = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleSetMenuOpen = useCallback(() => {
    setMenuOpen((prevState) => !prevState);
  }, []);

  return (
    <LayoutContext.Provider
      value={{
        isMenuOpen,
        setMenuOpen: handleSetMenuOpen,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = (): LayoutContextType => useContext(LayoutContext);

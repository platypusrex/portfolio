import { createContext, FCC, useCallback, useContext, useEffect, useState } from 'react';
import { useMatchMedia } from 'hooks/useMatchMedia';

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
  const isDesktop = useMatchMedia(767);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleSetMenuOpen = useCallback(() => {
    if (isDesktop) return;
    setMenuOpen((prevState) => !prevState);
  }, [isDesktop]);

  useEffect(() => {
    if (isDesktop) setMenuOpen(false);
  }, [isDesktop]);

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

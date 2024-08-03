import { createContext, FCC, useCallback, useContext, useEffect, useState } from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const [isDesktop] = useMediaQuery('(min-width: 768px)');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleSetMenuOpen = useCallback(() => {
    setMenuOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      if (!isDesktop && isMenuOpen) {
        setMenuOpen(false);
      }
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
    };
  });

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

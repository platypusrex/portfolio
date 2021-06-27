import { createContext, FC, useCallback, useContext, useEffect, useState } from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useRouter } from 'next/router';

export interface LayoutContextType {
  isMenuOpen: boolean;
  animateTransition: boolean;
  setMenuOpen: () => void;
}

type LayoutState = Omit<LayoutContextType, 'setMenuOpen'>;

const initialLayoutState: LayoutState = {
  isMenuOpen: false,
  animateTransition: true,
};

const LayoutContext = createContext<LayoutContextType>({
  ...initialLayoutState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setMenuOpen: () => {},
});

export const LayoutProvider: FC = ({ children }) => {
  const router = useRouter();
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [layoutState, setLayoutState] = useState<LayoutState>(initialLayoutState);
  const setMenuOpen = useCallback(() => {
    setLayoutState((prevState) => ({ ...prevState, isMenuOpen: !prevState.isMenuOpen }));
  }, []);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      if (isLargerThan768) {
        setLayoutState((prevState) => ({ ...prevState, animateTransition: false }));
      }
      if (!isLargerThan768 && layoutState.isMenuOpen) {
        setLayoutState((prevState) => ({ ...prevState, isMenuOpen: false }));
      }
    };

    const handleRouteChangeComplete = () => {
      if (isLargerThan768) {
        setLayoutState((prevState) => ({ ...prevState, animateTransition: true }));
      }
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  });

  return (
    <LayoutContext.Provider value={{ ...layoutState, setMenuOpen }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = (): LayoutContextType => useContext(LayoutContext);

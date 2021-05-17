import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useRouter } from 'next/router';

export interface LayoutContextType {
  isMenuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const LayoutContext = createContext<LayoutContextType>({
  isMenuOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setMenuOpen: () => {},
});

export const LayoutProvider: React.FC = ({ children }) => {
  const router = useRouter();
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      if (!isLargerThan768 && isMenuOpen) {
        setMenuOpen(false);
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  });

  return (
    <LayoutContext.Provider value={{ isMenuOpen, setMenuOpen }}>{children}</LayoutContext.Provider>
  );
};

export const useLayoutContext = (): LayoutContextType => useContext(LayoutContext);

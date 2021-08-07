import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Flex, Progress } from '@chakra-ui/react';
import { AnimatedText } from 'components/AnimatedText';

export const Loading: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleStop = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  if (!loading) {
    return <>{children}</>;
  }

  return (
    <Flex
      h="100vh"
      direction="column"
      justify="center"
      marginInline="auto"
      maxWidth="300px"
      padding="10px"
    >
      <AnimatedText
        text="Loading content..."
        staggerDelay={0.05}
        alignSelf="center"
        fontFamily="'Montserrat', sans-serif"
        fontSize="sm"
        mb="10px"
      />
      <Progress height="2px" isIndeterminate colorScheme="red" />
    </Flex>
  );
};

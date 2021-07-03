import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
import { pathDefinitions, pathVariants, svgVariants } from 'components/Arrow/constants';

export const Arrow: React.FC = () => (
  <Box ml="70px" transform="rotate(65deg)" as="span" display="inline-block">
    <motion.svg
      id="arrow"
      x="0px"
      y="0px"
      width="100px"
      height="100px"
      viewBox="0 0 346.566 346.566"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <g>
        <g>
          {pathDefinitions.map((path) => (
            <motion.path key={path} d={path} fill="#FFFFFF" variants={pathVariants} />
          ))}
        </g>
      </g>
    </motion.svg>
  </Box>
);

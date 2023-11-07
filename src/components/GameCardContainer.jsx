import { Box } from '@chakra-ui/react';
import React from 'react';

const GameCardContainer = ({ children }) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;

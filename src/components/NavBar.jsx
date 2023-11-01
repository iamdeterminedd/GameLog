import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/game-log-b.png';
import React from 'react';

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
    </HStack>
  );
};

export default NavBar;

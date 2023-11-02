import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/game-log-b.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import React from 'react';

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={''} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

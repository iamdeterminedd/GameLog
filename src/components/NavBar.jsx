import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/game-log-w.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import React from 'react';

const NavBar = ({ onSearch }) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="100px" padding="15px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

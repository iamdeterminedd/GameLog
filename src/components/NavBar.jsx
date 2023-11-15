import { HStack, Image, useColorMode } from '@chakra-ui/react';
import logoW from '../assets/game-log-w.png';
import logoB from '../assets/game-log-b.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ onSearch }) => {
  const { colorMode } = useColorMode();
  return (
    <HStack padding="10px">
      <Link className="logo" reloadDocument>
        <Image
          src={colorMode === 'dark' ? logoW : logoB}
          boxSize="100px"
          padding="5px"
          height="90px"
        />
      </Link>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

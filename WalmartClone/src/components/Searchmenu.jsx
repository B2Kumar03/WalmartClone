import React, { useContext, useState } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';
import { AuthContext } from '../AuthContext/AuthProvider';

const Searchmenu = () => {
    const {isMenuOpen, setMenuOpen} = useContext(AuthContext)



  return (
    <Menu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)}>
      
      <MenuList>
        <MenuItem>New File</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuDivider />
        <MenuItem>Open...</MenuItem>
        <MenuItem>Save File</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Searchmenu;

import React from 'react';
import NavBar from '../../components/NavBar';
import SearchLogoBar from '../../components/SearchLogoBar';

const Header = () => {
  return (
    <div>
      <SearchLogoBar />
      <NavBar />
    </div>
  );
};

export default Header;

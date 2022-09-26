import React from 'react';

interface MobileMenuItemProps {
  name: string;
}

const MobileMenuItem = ({ name }: MobileMenuItemProps) => {
  return <div className='font-plex text-gray-600'># {name}</div>;
};

export default MobileMenuItem;

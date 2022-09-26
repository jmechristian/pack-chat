import React from 'react';
import { useDispatch } from 'react-redux';
import { setChannel } from '../../store/chat/chatSlice';

interface MobileMenuItemProps {
  name: string;
  close: () => void;
}

const MobileMenuItem = ({ name, close }: MobileMenuItemProps) => {
  const dispatch = useDispatch();

  const menuItemHandler = () => {
    dispatch(setChannel(name));
    close();
  };

  return (
    <div className='font-plex text-gray-600' onClick={menuItemHandler}>
      # {name}
    </div>
  );
};

export default MobileMenuItem;

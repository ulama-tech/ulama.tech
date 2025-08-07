'use client';

import { MenuIcon, XIcon } from 'lucide-react';
import { ToggleMenuProps } from '~/shared/types';

const ToggleMenu = ({ handleToggleMenuOnClick, isToggleMenuOpen }: ToggleMenuProps) => (
  <button
    type="button"
    className="text-white"
    aria-label="Toggle Menu"
    onClick={handleToggleMenuOnClick}
  >
    {isToggleMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
  </button>
);

export default ToggleMenu;

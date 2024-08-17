import React from 'react';

interface MenuToggleProps {
  isOpen?: boolean;
  onClick?: () => void;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex md:hidden absolute top-0 left-0 z-20 w-[50px] h-[62px] items-center justify-center"
    >
      <div className="flex relative justify-center w-[48px] h-[38px] mx-[6px] overflow-hidden">
        <span
          className={`absolute h-[4px] w-[35px] bg-gray-600 top-[8px] ${isOpen ? 'animate-barOne' : 'animate-barOneReverse'}`}
        />
        <span
          className={`absolute h-[4px] w-[35px] bg-gray-600 top-[17px] ${isOpen ? 'animate-barTwo' : 'animate-barTwoReverse'}`}
        />
        <span
          className={`absolute h-[4px] w-[35px] bg-gray-600 bottom-[8px] ${isOpen ? 'animate-barThree' : 'animate-barThreeReverse'}`}
        />
      </div>
    </button>
  );
};

import logo from '@/assets/logo-of.png';
import Image from 'next/image';
import Icon from '../icons';
import LogoOF from '@/assets/logo-of.svg';

interface HeaderProps {
  onClickOpenMenu: () => void;
}

export const Header = ({ onClickOpenMenu }: HeaderProps) => {
  return (
    <header className="fixed flex w-full flex-row justify-between bg-[#E7EAEF] pt-6 pr-6 pb-2 pl-4">
      <button onClick={onClickOpenMenu} className="mb-1.5">
        <Icon name="menu" />
      </button>
      <div>
        <LogoOF />
      </div>

      <div className="mb-1.5 flex gap-4">
        <button>
          <Icon name="search" />
        </button>
        <button>
          <Icon name="shopping-bag" />
        </button>
      </div>
    </header>
  );
};

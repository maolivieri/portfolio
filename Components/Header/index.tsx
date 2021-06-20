import React from 'react';
import { ThemeContext } from 'styled-components';
import { Container, Language, NavLink } from './styles';
import ThemeToggle from '../../design/toogle';
import Image from 'next/image';
import { i18n } from 'next-i18next';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const themeContext = React.useContext(ThemeContext);
  const dark = themeContext.name === 'dark';

  return (
    <Container>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <NavLink href="/About">About</NavLink>
        <NavLink href="/Experiences">Experiences</NavLink>
        <NavLink href="/Projects">Projects</NavLink>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Language onClick={() => i18n.changeLanguage('pt')}>
          <Image
            src={dark ? '/icons/header/BR.png' : '/icons/header/BRCor.png'}
            width="38px"
            height="38px"
          />
        </Language>
        <Language onClick={() => i18n.changeLanguage('en')}>
          <Image
            src={dark ? '/icons/header/EN.png' : '/icons/header/ENCor.png'}
            width="38px"
            height="38px"
          />
        </Language>
        <ThemeToggle dark={dark} toggleTheme={toggleTheme} />
      </div>
    </Container>
  );
};

export default Header;

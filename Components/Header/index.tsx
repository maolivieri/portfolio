import React from 'react';
import { ThemeContext } from 'styled-components';
import {
  Container,
  Language,
  NavLink,
  MainLinks,
  ButtonLinks,
  LanguageFlag
} from './styles';
import ThemeToggle from '../../Design/Toogle';
import { i18n } from 'next-i18next';
import KeenSlider from 'keen-slider';

interface Props {
  toggleTheme(): void;
  instanceRef: KeenSlider;
  currentSlide: number;
}

const Header: React.FC<Props> = ({
  toggleTheme,
  instanceRef,
  currentSlide
}) => {
  const themeContext = React.useContext(ThemeContext);
  const dark = themeContext.name === 'dark';

  const handleNavigation = (page: number) => {
    instanceRef.moveToSlide(page);
  };

  return (
    <Container>
      <MainLinks>
        <NavLink
          active={currentSlide === 0}
          onClick={() => handleNavigation(0)}
        >
          Home
        </NavLink>
        <NavLink
          active={currentSlide === 1}
          onClick={() => handleNavigation(1)}
        >
          About
        </NavLink>
        <NavLink
          active={currentSlide === 2}
          onClick={() => handleNavigation(2)}
        >
          Experiences
        </NavLink>
        <NavLink
          active={currentSlide === 3}
          onClick={() => handleNavigation(3)}
        >
          Projects
        </NavLink>
      </MainLinks>
      <ButtonLinks>
        <Language onClick={() => i18n.changeLanguage('pt')}>
          <LanguageFlag
            src={dark ? '/icons/header/BR.png' : '/icons/header/BRCor.png'}
            width="100%"
            height="100%"
            active={i18n.language === 'pt'}
          />
        </Language>
        <Language onClick={() => i18n.changeLanguage('en')}>
          <LanguageFlag
            src={dark ? '/icons/header/EN.png' : '/icons/header/ENCor.png'}
            width="100%"
            height="100%"
            active={i18n.language === 'en'}
          />
        </Language>
        <ThemeToggle dark={dark} toggleTheme={toggleTheme} />
      </ButtonLinks>
    </Container>
  );
};

export default Header;

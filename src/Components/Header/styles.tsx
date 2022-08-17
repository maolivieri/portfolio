import styled from 'styled-components';
import { darken, rgba } from 'polished';
import Image from 'next/image';

interface ActiveProps {
  active: boolean;
}

export const Container = styled.div`
  /* background: ${(props) => props.theme.colors.background}; */
  width: 100%;
  /* height: 60px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 3rem 4rem 2rem 9rem; */
  z-index: 1000;
  position: absolute;
  top: 5vh;

  @media (min-width: 768px) {
    /* justify-content: flex-end; */
    /* height: 60px; */
    /* align-items: flex-start; */
  }
`;

export const Spacer = styled.div`
  display: block;
  flex: 1;
  /* width: 1rem; */

  @media (min-width: 992px) {
    display: none;
  }
`;

export const MainLinks = styled.div`
  display: none;
  align-items: center;
  justify-content: flex-start;
  flex: 1;

  @media (min-width: 992px) {
    /* flex-direction: column; */
    display: flex;
    /* max-width: 60vw; */
  }
`;

export const ButtonLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: end;
`;

// export const NavLink = styled(StyledLink)`
export const NavLink = styled.div<ActiveProps>`
  position: relative;
  font-size: 1.25rem;
  min-width: 2rem;
  margin: 0 0.3rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  text-align: center;
  cursor: pointer;

  &::after {
    content: '';
    bottom: -4px;
    left: -0.25rem;
    position: absolute;
    min-width: calc(100% + 0.5rem);
    min-height: 1.5px;
    background: ${(props) =>
      props.active ? props.theme.colors.primary : rgba(0, 0, 0, 0)};
  }

  &:hover {
    color: ${(props) => darken(0.2, props.theme.colors.primary)};
  }

  &:focus {
    color: ${(props) => darken(0.3, props.theme.colors.primary)};
    outline: none;
    border: 0;
  }
  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.7rem;
    min-width: 5rem;
    margin: 0 3rem;
  }
`;

export const Language = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
  margin: 0 0.5rem;
  cursor: pointer;
  width: 2.6rem;

  @media (max-width: 1200px) {
    width: 2.8rem;
  }
  @media (max-width: 768px) {
    width: 2.8rem;
  }
`;

export const LanguageFlag = styled(Image)<ActiveProps>`
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;

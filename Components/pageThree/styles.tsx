import styled from 'styled-components';
import StyledLink from '../../design/styledLink';
import { darken } from 'polished';

export const Container = styled.div`
  padding-top: calc(60px + 5vh);
  padding-bottom: 1.5rem;
  display: flex;
  /* flex-direction: column; */
  align-items: flex-start;
  justify-content: center;
  overflow: visible;
  width: 100%;
  /* min-height: 90%; */
`;

export const Techs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  width: 50%;
`;

export const TextBody = styled.div`
  width: 30%;
  margin-left: 6rem;
`;

export const Header = styled.h2`
  margin-top: 3rem;
  color: ${(props) => props.theme.colors.secondary};
  font-family: Harmattan;
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-family: Yeseva One;
  font-size: 7rem;
  color: ${(props) => props.theme.colors.white};
`;

export const Content = styled.p`
  padding: 0;
  color: ${(props) => props.theme.colors.primary};
`;

import styled from 'styled-components';
import StyledLink from '../../design/styledLink';
import { darken } from 'polished';

export const PageContainer = styled.div`
  padding-top: calc(60px + 5vh);
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  overflow: visible;
  width: 100%;
  min-height: 90%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 50%;
  min-height: 100%;
`;

export const Body = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex: 1;
`;

export const HeaderTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;

export const BodyContent = styled.div`
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Header = styled.h2`
  margin: 3rem 0rem 0rem 0rem;
  padding: 0;
  color: ${(props) => props.theme.colors.secondary};
  font-family: Harmattan;
`;

export const Title = styled.h1`
  width: 50%;
  padding: 0;
  margin: 0;
  font-family: Yeseva One;
  font-size: 4.5rem;
  color: ${(props) => props.theme.colors.white};
`;

export const Subtitle = styled.p`
  padding: 0;
  margin: 1rem 0rem 0.2rem 0rem;
  color: ${(props) => props.theme.colors.highlights};
`;

export const Content = styled.p`
  padding: 0;
  margin: 0rem 0rem 0.5rem 0rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const DowloadButton = styled.button`
  padding: 0.7rem 1.3rem;
  /* margin: 1rem 0rem 1rem 0rem; */
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 15px;
  box-sizing: border-box;
  border: 0.1em solid rgba(255, 255, 255, 0.1);
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s;
  :hover {
    border: 0.1em solid rgba(255, 255, 255, 0.5);
    background: ${(props) => darken('0.1', props.theme.colors.secondary)};
    color: ${(props) => props.theme.colors.white};
  }
`;

import styled, { ThemedStyledProps } from 'styled-components';
import StyledLink from '../../design/styledLink';
import { darken, lighten } from 'polished';

// CardContainer, TextWrapper, ImageWrapper, SideWrapper;

// @media (max-width: 992px) {
// }

// interface IContainerProps extends ThemedStyledProps {
//   isFullW: boolean;
// }

export const CardContainer = styled.div`
  width: ${(props) => (props.isFullW ? '73vw' : '40vw')};
  display: flex;
  background: ${(props) => props.theme.colors.cardBackground};
  border-radius: 1vw;
  margin: 0.4rem 2rem 2rem 2rem;
  overflow: hidden;
  @media (max-width: 992px) {
    width: 78vw;
    margin: 2rem 0rem;
    /// small pc screens
  }
`;

export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.isFullW ? 'row' : 'column')};
  background: ${(props) => props.theme.colors.cardBackground};
  z-index: 10;
  justify-content: space-between;
  border-radius: 1vw;
  position: relative;
  right: -18px;
  @media (max-width: 992px) {
    flex-direction: column;
    right: -15px;

    /// small pc screens
  }
`;

export const TextWrapper = styled.div`
  width: ${(props) => (props.isFullW ? '30%' : '100%')};
  display: flex;
  flex-direction: column;
  padding: 2rem 1.4rem;
  @media (max-width: 992px) {
    width: 100%;
    padding: 2rem 1.3rem 2rem 0.8rem;
    /// small pc screens
  }
`;

export const ImageWrapper = styled.div`
  width: ${(props) => (props.isFullW ? '63%' : '100%')};
  @media (max-width: 992px) {
    width: 100%;
    /// small pc screens
  }
`;

export const SideWrapper = styled.div`
  background: ${(props) => props.theme.colors.highlights};
  width: 68px;
  z-index: 0;
  @media (max-width: 992px) {
    width: 55px;
    /// small pc screens
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.details};
`;

export const SeeProjectButton = styled.a`
  margin: 0rem 0.3rem 0rem 0rem;
  color: ${(props) => props.theme.colors.highlights};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => lighten(0.2, props.theme.colors.highlights)};
  }

  &:focus {
    color: ${(props) => lighten(0.3, props.theme.colors.highlights)};
    outline: none;
    border: 0;
  }
`;

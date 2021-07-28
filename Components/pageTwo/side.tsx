import styled from 'styled-components';
import StyledLink from '../../design/styledLink';
import { darken, transparentize, lighten } from 'polished';

const Side = () => {
  return (
    <Whapper>
      <LinkItem>Mail</LinkItem>
      <LinkItem>Lkin</LinkItem>
      <LinkItem>IG</LinkItem>
      <LinkItem>WPP</LinkItem>
      <LinkItem>GH</LinkItem>
    </Whapper>
  );
};

const Whapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  @media (max-width: 992px) {
    flex-direction: row;
    margin-bottom: 1.5rem;
  }
`;

export const LinkItem = styled.a`
  margin: 0rem 0.3rem 0rem 0.3rem;
  color: ${(props) => transparentize('0.7', props.theme.colors.white)};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => darken(0.2, props.theme.colors.primary)};
  }

  &:focus {
    color: ${(props) => darken(0.3, props.theme.colors.primary)};
    outline: none;
    border: 0;
  }
`;

export default Side;

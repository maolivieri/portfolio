import styled from 'styled-components';
import StyledLink from '../../design/styledLink';
import { darken, transparentize, lighten } from 'polished';

const Side = () => {
  return (
    <Whapper>
      <LItemTitle>
        Main <br />
        Skills
      </LItemTitle>
      <LItem>JS</LItem>
      <LItem>LItemY</LItem>
      <LItem>TS</LItem>
      <LItem>NJ</LItem>
      <LItem>RC</LItem>
      <LItem>RN</LItem>
      <LItem>DJ</LItem>
      <LItem>AWS</LItem>
    </Whapper>
  );
};

const Whapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LItemTitle = styled.p`
  margin: 3rem 3rem 1rem 3rem;
  color: ${(props) => transparentize('0.7', props.theme.colors.white)};
`;

export const LItem = styled.a`
  margin: 1.5rem 3rem;
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

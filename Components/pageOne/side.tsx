import styled from 'styled-components';
import StyledLink from '../../design/styledLink';
import { darken, transparentize, lighten } from 'polished';
import Image from 'next/image';

const Side = () => {
  return (
    <Whapper>
      <LItemTitle>
        Main <br />
        Skills
      </LItemTitle>
      {/* <LItem>
        <Image
          src="/icons/home/js.png"
          width={30}
          height={30}
          layout="responsive"
        />
      </LItem> */}
      <LItem>
        <Image
          src="/icons/home/js.png"
          width={30}
          height={30}
          layout="responsive"
        />
      </LItem>
      <LItem>
        <Image
          src="/icons/home/node.png"
          width={30}
          height={30}
          layout="responsive"
        />
      </LItem>
      <LItem>
        <Image
          src="/icons/home/react.png"
          width={30}
          height={30}
          layout="responsive"
        />
      </LItem>
      <LItem>
        <Image
          src="/icons/home/native.png"
          width={30}
          height={30}
          layout="responsive"
        />
      </LItem>
      <LItem>
        <Image
          src="/icons/home/django.png"
          width={30}
          height={30}
          layout="responsive"
        />
      </LItem>
      <LItem>
        <Image
          src="/icons/home/aws.png"
          width={30}
          height={30}
          layout="responsive"
        />
      </LItem>
    </Whapper>
  );
};

const Whapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const LItemTitle = styled.p`
  margin: 3rem 3rem 1rem 3rem;
  color: ${(props) => transparentize('0.7', props.theme.colors.white)};
`;

export const LItem = styled.div`
  margin: 1.5rem 3rem;
  width: 2rem;
  height: 2rem;
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

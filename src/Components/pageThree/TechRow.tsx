import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
  title: string;
  subtitle: string;
  iconsArray?: any;
  icon1?: ReactElement;
  icon2?: ReactElement;
  icon3?: ReactElement;
  icon4?: ReactElement;
  icon5?: ReactElement;
  icon6?: ReactElement;
  icon7?: ReactElement;
}

const TechRow: React.FC<Props> = ({
  title,
  subtitle,
  iconsArray,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7
}) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        {/* <SubTitle>{subtitle}</SubTitle> */}
      </TitleContainer>

      <IconsContainer>
        <IconSVG>{icon1}</IconSVG>
        <IconSVG>{icon2}</IconSVG>
        <IconSVG>{icon3}</IconSVG>
        <IconSVG>{icon4}</IconSVG>
        <IconSVG>{icon5}</IconSVG>
        <IconSVG>{icon6}</IconSVG>
        <IconSVG>{icon7}</IconSVG>
      </IconsContainer>
      {/* <IconsContainer>
        {svgs}
        {iconsArray.length > 0 &&
          iconsArray.map((x) => (
            <ImageWrapper>
              <Image src={x} height="40px" width="40px" />
            </ImageWrapper>
          ))}
      </IconsContainer> */}
    </Container>
  );
};

export default TechRow;

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${(props) => props.theme.colors.cardBackground};
  margin-bottom: 1.5rem;
  /* padding: 0.5rem 2rem; */
  /* max-height: 12vh; */
  padding: 0.5rem 1rem;
  @media (max-width: 992px) {
    padding: 0rem 1rem;
    margin-bottom: 2rem;
  }
`;

const TitleContainer = styled.div`
  width: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IconsContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 0.2rem;
  color: #fff;
  @media (max-width: 992px) {
    align-items: center;
    gap: 0.2rem;
  }

  @media (max-width: 768px) {
    gap: 0.4rem;
  }

  @media (max-width: 576px) {
    gap: 0.5rem;
  }
`;

const Title = styled.h3`
  margin: 0;
  /* padding-bottom: 0.5rem; */
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.details};
  @media (max-width: 992px) {
    font-size: 1.6rem;
    padding: 0;
    /* text-align: center; */
  }
`;

const SubTitle = styled.p`
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 0.8rem;
`;

const ImageWrapper = styled.div`
  /* margin: 0 1rem; */
  /* margin-right: 1.5rem;
  margin-left: 1.5rem; */
  width: 1.9rem;
  height: 1.9rem;
`;

const IconSVG = styled.div`
  /* max-width: 1.9rem; */

  svg {
    width: 2.8vw;
    height: 2.8vw;
  }
  div {
    width: 2.8vw;
    height: 2.8vw;
  }

  @media (max-width: 1200px) {
    svg {
      width: 2.8vw;
      height: 2.8vw;
    }
    div {
      width: 2.8vw;
      height: 2.8vw;
    }
  }

  @media (max-width: 992px) {
    svg {
      width: 5vw;
      height: 5vw;
    }
    div {
      width: 5vw;
      height: 5vw;
    }
  }
  @media (max-width: 768px) {
    svg {
      width: 5vw;
      height: 5vw;
    }
    div {
      width: 5vw;
      height: 5vw;
    }
  }

  @media (max-width: 576px) {
    svg {
      width: 5vw;
      height: 5vw;
    }
    div {
      width: 5vw;
      height: 5vw;
    }
  }
`;

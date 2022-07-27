import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
  title: string;
  subtitle: string;
  iconsArray: any;
}

const TechRow: React.FC<Props> = ({ title, subtitle, iconsArray }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        {/* <SubTitle>{subtitle}</SubTitle> */}
      </TitleContainer>
      <IconsContainer>
        {/* {iconsArray} */}
        {iconsArray.length > 0 ? (
          iconsArray.map((x) => (
            <ImageWrapper>
              <Image src={x} height="40px" width="40px" />
            </ImageWrapper>
          ))
        ) : (
          <div></div>
        )}
      </IconsContainer>
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
  color: #fff;
  @media (max-width: 992px) {
    align-items: center;
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
    text-align: center;
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

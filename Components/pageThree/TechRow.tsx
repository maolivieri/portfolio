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
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: ${(props) => props.theme.colors.cardBackground};
  /* padding: 0.5rem 2rem; */
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
`;

const TitleContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  /* margin-right: 4rem; */
  /* margin-bottom: 1rem; */
`;

const IconsContainer = styled.div`
  display: flex;
  color: #fff;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.details};
  @media (max-width: 992px) {
    font-size: 1.6rem;
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
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;

  @media (max-width: 1200px) {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 992px) {
    width: 2rem;
    height: 2rem;
  }
`;

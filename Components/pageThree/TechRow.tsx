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
            <IconC>
              <Image src={x} height="40px" width="40px" />
            </IconC>
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
  background: #050822;
  /* padding: 0.5rem 2rem; */
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
`;

const TitleContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  /* margin-right: 4rem; */
  margin-bottom: 0.8rem;
`;

const IconsContainer = styled.div`
  display: flex;
  color: #fff;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
  color: #314464;
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
const IconC = styled.div`
  /* margin: 0 1rem; */
  margin-right: 1.5rem;
  width: 2rem;
  height: 2rem;
`;

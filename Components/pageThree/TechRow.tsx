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
        <SubTitle>{subtitle}</SubTitle>
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
  align-items: center;
  justify-content: flex-start;
  background: #050822;
  padding: 0.5rem 2rem;
  margin-bottom: 2rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 4rem;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  color: #314464;
`;

const SubTitle = styled.p`
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 0.8rem;
`;
const IconC = styled.div`
  margin: 0 1rem;
`;

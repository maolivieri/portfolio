import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-height: 50vh;
  min-height: 50vh;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 2rem;
  overflow: hidden;
  padding: 0;
  margin-right: 5rem;

  @media (max-width: 992px) {
    flex-direction: column;
    max-height: 100%;
    min-height: 100%;
    margin-bottom: 3rem;
    margin-right: 0rem;
  }
`;

export const Content = styled.div`
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  padding: 1rem 5rem 2rem 2rem;
  width: 40%;

  @media (max-width: 992px) {
    min-width: 100%;
    width: 100%;
  }
`;

export const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  line-height: 1.5rem;
`;

export const Graphics = styled.div`
  /* flex: 1; */
  //1920x1080 = ratio of 1.78  //   0.56
  width: 60%;
  height: 100%;

  @media (max-width: 992px) {
    min-width: 100%;
    width: 100%;
  }
`;

export const VideoPlayer = styled.video`
  max-width: 100%;
  height: auto;
`;

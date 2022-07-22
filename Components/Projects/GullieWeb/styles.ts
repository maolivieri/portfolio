import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 0;
  overflow: hidden;
  border-radius: 2rem;

  display: flex;
  flex-direction: column;
  max-height: 100%;
  min-height: 100%;
  margin-bottom: 3rem;
  margin-right: 0rem;

  @media (min-width: 768px) {
    max-height: 100%;
    min-height: 100%;
    margin-bottom: 3rem;
    flex-direction: row;
  }

  @media (min-width: 992px) {
    position: relative;
    max-height: 50vh;
    min-height: 50vh;
    margin-right: 5rem;
    margin-bottom: 0rem;
  }

  /* @media (max-width: 768px) {
    flex-direction: column;
    max-height: 100%;
    min-height: 100%;
    margin-bottom: 3rem;
    margin-right: 0rem;
  } */
`;

export const Content = styled.div`
  flex: 1;
  /* max-width: calc(100% - 3rem - 60vh * 0.462); */
  display: flex;
  flex-direction: column;
  padding: 1rem 5rem 2rem 2rem;
  width: 100%;

  @media (min-width: 768px) {
    /* min-width: 40%; */
    width: 40%;
  }

  @media (min-width: 992px) {
    width: 40%;
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
  /* z-index: 1000;
  position: absolute;
  right: 0;
  top: -4rem;
  //375 x 812 = ratio of 0.462
  height: 70vh;
  max-width: calc(60vh * 0.462); */

  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    width: 60%;
    /* min-width: 60%; */
  }

  @media (min-width: 992px) {
    min-width: 60%;
  }
`;

export const VideoPlayer = styled.video`
  max-width: 100%;
  height: auto;
`;

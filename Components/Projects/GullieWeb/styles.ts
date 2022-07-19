import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  max-height: 50vh;
  min-height: 50vh;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 2rem;
  overflow: hidden;
  padding: 0;
  margin-right: 5rem;
`;

export const Content = styled.div`
  flex: 1;
  max-width: calc(100% - 3rem - 60vh * 0.462);
  display: flex;
  flex-direction: column;
  padding: 1rem 5rem 2rem 2rem;
  width: 40%;
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

  width: 60%;
  height: 100%;
`;

export const VideoPlayer = styled.video`
  max-width: 100%;
  height: auto;
`;

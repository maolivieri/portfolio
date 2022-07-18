import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-height: 50vh;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 2rem;
  overflow: hidden;
  padding: 0;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`;

export const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
`;

export const Graphics = styled.div`
  max-height: 100%;
  max-width: 100%;
`;

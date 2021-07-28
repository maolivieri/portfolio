import styled from 'styled-components';

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    ///medium pc screens
  }

  @media (max-width: 992px) {
    /// small pc screens
  }
  @media (max-width: 768px) {
    ///tablets
  }

  @media (max-width: 576px) {
    ///mobiles
  }
`;

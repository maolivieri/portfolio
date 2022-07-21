import styled from 'styled-components';
import Carousel from 'nuka-carousel';

export const Container = styled.div`
  padding-top: calc(60px + 5vh);
  /* padding-bottom: 1.5rem; */
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: visible;
  width: 100%;
  min-height: 100vh;
  padding-left: 15rem;

  /* min-height: 90%; */
  @media (max-width: 992px) {
    padding-top: 1rem;
    padding-left: 3rem;
    width: 90%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-left: calc(15rem); */
  margin-bottom: 3rem;
  @media (max-width: 992px) {
    margin-left: 0;
    margin-bottom: 0.4rem;
  }
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-family: 'Yeseva One', cursive;
  font-size: 4.7vw;
  color: ${(props) => props.theme.colors.white};
  @media (max-width: 1200) {
    /* width: 55px; */
    max-height: 100%;
    font-size: 5vw;
    /// small pc screens
  }
  @media (max-width: 992px) {
    /* width: 55px; */
    max-height: 100%;
    font-size: 10vw;
    /// small pc screens
  }
`;

export const HeaderTitle = styled.h2`
  margin-top: 1.5rem;
  margin-bottom: 0;
  color: ${(props) => props.theme.colors.secondary};
  font-family: 'Harmattan', sans-serif;
  font-size: 1.3rem;
`;

export const AbsoluteCircularControl = styled.div`
  position: relative;
  align-self: center;
  /* background: red; */
  display: flex;
  max-height: 15vh;
  margin-right: 15rem;
  margin-top: 1rem;
`;
export const NavigateArrowButton = styled.div`
  display: flex;
  justify-content: center;
  min-width: 2rem;
`;

export const NavigateNextAbsoluteComponent = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  min-width: 10vw;
  min-height: 60vh;
  /* background: rgba(100, 200, 1, 0.4); */
  transform: translateY(-50%);
  z-index: 300;
`;

export const NavigatePrevAbsoluteComponent = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  min-width: 10vw;
  min-height: 60vh;
  background: ${({ theme }) => theme.colors.background};
  transform: translateY(-50%);
  z-index: 300;
`;

export const HideLastNavigateComponent = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  min-width: 10vw;
  min-height: 60vh;
  background: ${({ theme }) => theme.colors.background};
  transform: translateY(-50%);
  z-index: 300;
`;

export const ArrowsWrapper = styled.div`
  z-index: 1000;
  position: absolute;
  top: -0.5rem;
  min-width: 100%;
  padding-right: 1rem;
  /* left: 50%; */
  display: flex;
  justify-content: center;
  cursor: pointer;
  /* transform: translateX(-50%); */
  color: ${({ theme }) => theme.colors.highlights};
`;

export const Body = styled(Carousel).attrs((props) => ({
  // autoplay: 'true',
  // pauseOnHover: 'true',
  scrollMode: 'remainder',
  animation: 'zoom',
  cellAlign: 'left',
  wrapAround: 'true',
  autoplayInterval: 6000
}))`
  /* background: red; */
  flex: 1;
  min-height: 100%;
  /* max-width: calc(100% - 20rem); */
  margin: 0 auto;

  /* .slider-frame {
    overflow: visible !important;
    overflow-x: hidden;
  } */

  @media (max-width: 992px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap: nowrap;
    padding: 0;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
`;

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
  align-self: center;
  /* background: red; */
  display: flex;
  max-height: 15vh;
`;

export const Body = styled(Carousel).attrs((props) => ({
  // autoplay: 'true',
  // pauseOnHover: 'true',
  scrollMode: 'remainder',
  animation: 'zoom',
  // wrapAround: 'true',
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

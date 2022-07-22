import { Dispatch, SetStateAction, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { CircularControl } from '../Carousel/CircularControl';
import { GullieAdminCard } from '../Projects/GullieAdmin';
import { GullieAPICard } from '../Projects/GullieAPI';
import { GullieManagerCard } from '../Projects/GullieManager';
import { GullieWebCard } from '../Projects/GullieWeb';

import {
  Container,
  Header,
  Body,
  HeaderTitle,
  Title,
  AbsoluteCircularControl,
  ArrowsWrapper,
  NavigateArrowButton,
  NavigateNextAbsoluteComponent,
  HideLastNavigateComponent,
  NavigatePrevAbsoluteComponent,
  MobileNavigation,
  DesktopNavigation
} from './styles';

type IProps = {
  t: any;
  projectIndex: number;
  setProjectIndex: Dispatch<SetStateAction<number>>;
};

const PageFour = ({ t, projectIndex, setProjectIndex }: IProps) => {
  const pageTheme = useTheme();

  const navigateToIndex = (idx: number) => {
    setProjectIndex(idx);
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>{t('pageFour.header')}</HeaderTitle>
        <Title>{t('pageFour.title')}</Title>
      </Header>
      <MobileNavigation>
        <GullieWebCard translate={t} />
        <GullieManagerCard translate={t} />
        <GullieAdminCard translate={t} />
        <GullieAPICard translate={t} />
      </MobileNavigation>
      {projectIndex !== 0 && (
        <NavigatePrevAbsoluteComponent
          onClick={() => setProjectIndex((state) => state - 1)}
        />
      )}
      {projectIndex !== 3 && (
        <NavigateNextAbsoluteComponent
          onClick={() => setProjectIndex((state) => state + 1)}
        />
      )}
      {projectIndex === 3 && <HideLastNavigateComponent />}
      <DesktopNavigation>
        <Body
          slideIndex={projectIndex}
          renderBottomCenterControls={({ slideCount, currentSlide }) => (
            // <BottomControls currentSlide={currentSlide} slideCount={slideCount} />
            <></>
          )}
          renderCenterLeftControls={({ previousSlide }) => (
            <>
              {/* {slideIndex !== 0 && (
              <SideControls
                navigateToSlide={() => {
                  previousSlide();
                  slideIndex !== 0 && setSlideIndex((state) => state - 1);
                }}
              />
            )} */}
            </>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <>
              {/* {slideIndex !== 3 && (
              <SideControls
                next
                navigateToSlide={() => {
                  nextSlide();
                  slideIndex !== 3 && setSlideIndex((state) => state + 1);
                }}
              />
            )} */}
            </>
          )}
          style={{
            overflow: 'visible'
          }}
        >
          <GullieWebCard translate={t} />
          <GullieManagerCard translate={t} />
          <GullieAdminCard translate={t} />
          <GullieAPICard translate={t} />
        </Body>
      </DesktopNavigation>
      <AbsoluteCircularControl>
        <ArrowsWrapper>
          {projectIndex !== 0 && (
            <NavigateArrowButton
              onClick={() => setProjectIndex((state) => state - 1)}
            >
              <FaAngleLeft />
            </NavigateArrowButton>
          )}
          {projectIndex !== 3 && (
            <NavigateArrowButton
              onClick={() => setProjectIndex((state) => state + 1)}
            >
              <FaAngleRight />
            </NavigateArrowButton>
          )}
        </ArrowsWrapper>
        <CircularControl
          arrayOfItems={[
            'Gullie Web',
            'Gullie Manager',
            'Gullie Admin',
            'Gullie API',
            '',
            '',
            '',
            ''
          ]}
          count={8}
          currentSlide={projectIndex}
          navigateToIndex={navigateToIndex}
        />
      </AbsoluteCircularControl>
    </Container>
  );
};

export default PageFour;

import { useState } from 'react';
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
  NavigateArrowButton
} from './styles';

const PageFour = ({ t }) => {
  const pageTheme = useTheme();

  const [slideIndex, setSlideIndex] = useState(0);

  const navigateToIndex = (idx: number) => {
    setSlideIndex(idx);
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>{t('pageFour.header')}</HeaderTitle>
        <Title>{t('pageFour.title')}</Title>
      </Header>
      <Body
        slideIndex={slideIndex}
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
      <AbsoluteCircularControl>
        <ArrowsWrapper>
          {slideIndex !== 0 && (
            <NavigateArrowButton
              onClick={() => setSlideIndex((state) => state - 1)}
            >
              <FaAngleLeft />
            </NavigateArrowButton>
          )}
          {slideIndex !== 3 && (
            <NavigateArrowButton
              onClick={() => setSlideIndex((state) => state + 1)}
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
          currentSlide={slideIndex}
          navigateToIndex={navigateToIndex}
        />
      </AbsoluteCircularControl>
    </Container>
  );
};

export default PageFour;

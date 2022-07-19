import { useState } from 'react';
import { useTheme } from 'styled-components';
import { BottomControls } from '../Carousel/BottomControls';
import { CircularControl } from '../Carousel/CircularControl';
import { SideControls } from '../Carousel/SideControls';
import { GullieAdminCard } from '../Projects/GullieAdmin';
import { GullieAPICard } from '../Projects/GullieAPI';
import { GullieManagerCard } from '../Projects/GullieManager';
import { GullieWebCard } from '../Projects/GullieWeb';
import { GullieAPI } from './projects/GullieAPI';

import {
  Container,
  Header,
  Body,
  HeaderTitle,
  Title,
  AbsoluteCircularControl
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
        <GullieWebCard />
        <GullieManagerCard />
        <GullieAdminCard />
        <GullieAPICard />
      </Body>
      <AbsoluteCircularControl>
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

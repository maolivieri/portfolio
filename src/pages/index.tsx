import React, { createRef } from 'react';
import {
  Container,
  Body,
  PG,
  MobileBody,
  LoadingWrapper,
  LoadingRipple
} from '../styles/Home';
import { parseCookies } from 'nookies';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { useTheme } from 'styled-components';

import loadingStyles from '../styles/Loading.module.css';
import Header from '../Components/Header';
import PageOne from '../Components/pageOne';
import PageTwo from '../Components/pageTwo';
import PageThree from '../Components/pageThree';
import PageFour from '../Components/pageFour';
import { SliderArrows, SliderBar } from '../Design/Slider';
import Layout from '../Design/Layout';

interface Props {
  toggleTheme(): void;
}

export default function Home({ toggleTheme }: Props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [projectIndex, setProjectIndex] = React.useState(0);
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    rubberband: false,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    }
  });

  const scrollFunction = (scrollOffset: number) => {
    console.log(scrollOffset);
    if (scrollOffset > 0) {
      slider.moveToSlide(currentSlide + 1, 2000);
    } else {
      slider.moveToSlide(currentSlide - 1, 2000);
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => {
      // cleanup
    };
  }, []);

  React.useEffect(() => {
    setProjectIndex(0);
  }, [currentSlide]);

  const { t } = useTranslation('common');
  const theme = useTheme();

  return (
    <Layout title="Matheus Aguiar Olivieri">
      <LoadingWrapper isLoading={isLoading}>
        <div className={loadingStyles.ldsripple}>
          <div style={{ borderColor: theme.colors.highlights }} />
          <div style={{ borderColor: theme.colors.highlights }} />
          <div style={{ borderColor: theme.colors.highlights }} />
        </div>
      </LoadingWrapper>
      <Container>
        <Header
          currentSlide={currentSlide}
          toggleTheme={toggleTheme}
          instanceRef={slider}
        />
        <MobileBody>
          <PageOne t={t} />
          <PageTwo t={t} />
          <PageThree t={t} />
          <PageFour
            t={t}
            projectIndex={projectIndex}
            setProjectIndex={setProjectIndex}
          />
        </MobileBody>
        <Body
          ref={ref}
          className="keen-slider"
          onWheel={(e) => {
            scrollFunction(e.deltaY);
          }}
        >
          <PG
            style={{ zIndex: 100, minHeight: '100vh' }}
            className="keen-slider__slide"
            children={<PageOne t={t} />}
          />
          <PG
            style={{ zIndex: 90, minHeight: '100vh' }}
            className="keen-slider__slide"
            children={<PageTwo t={t} />}
          />
          <PG
            style={{ zIndex: 80, minHeight: '100vh' }}
            className="keen-slider__slide"
            children={<PageThree t={t} />}
          />
          <PG
            style={{ zIndex: 80, minHeight: '100vh' }}
            className="keen-slider__slide"
            children={
              <PageFour
                t={t}
                projectIndex={projectIndex}
                setProjectIndex={setProjectIndex}
              />
            }
          />
        </Body>
        {slider && projectIndex === 0 && (
          <SliderArrows slider={slider} currentSlide={currentSlide} />
        )}
        {slider && currentSlide !== 3 && (
          <SliderBar slider={slider} currentSlide={currentSlide} />
        )}
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx);
  const themeCookie = cookies.theme ? cookies.theme : null;
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['common'])),
      cookieTheme: JSON.parse(themeCookie)
    }
  };
}

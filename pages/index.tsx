import React from 'react';
import Layout from '../design/layout';
import Header from '../components/header';
import {
  Container,
  BodyContainer,
  PageContainer,
  SlideBarContainer
} from '../styles/Home';
import { SliderArrows, SliderButtons } from '../design/Slider';
import { parseCookies } from 'nookies';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import PageOne from '../components/pageOne';
import PageTwo from '../components/pageTwo';
import PageThree from '../components/pageThree';

interface Props {
  toggleTheme(): void;
}

export default function Home<Props>({ toggleTheme }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    }
  });

  const { t } = useTranslation('common');

  return (
    <Layout title="Matheus Aguiar Olivieri">
      <Container>
        <Header toggleTheme={toggleTheme} />
        <BodyContainer ref={ref} className="keen-slider">
          <PageContainer className="keen-slider__slide">
            <PageOne t={t} />
          </PageContainer>
          <PageContainer className="keen-slider__slide">
            <PageTwo t={t} />
          </PageContainer>
          <PageContainer className="keen-slider__slide">
            <PageThree t={t} />
          </PageContainer>
        </BodyContainer>
      </Container>
      {slider && (
        <>
          <SliderArrows slider={slider} currentSlide={currentSlide} />
        </>
      )}
      {slider && (
        <SlideBarContainer>
          <SliderButtons slider={slider} currentSlide={currentSlide} />
        </SlideBarContainer>
      )}
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

import React from 'react';
import Layout from '../design/layout';
import Header from '../components/header';
import { Container, Body, PG } from '../styles/Home';
import { SliderArrows, SliderBar } from '../design/Slider';
import { parseCookies } from 'nookies';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
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
        <Body ref={ref} className="keen-slider">
          <PG className="keen-slider__slide" children={<PageOne t={t} />} />
          <PG className="keen-slider__slide" children={<PageTwo t={t} />} />
          <PG className="keen-slider__slide" children={<PageThree t={t} />} />
        </Body>
        {slider && <SliderArrows slider={slider} currentSlide={currentSlide} />}
        {slider && <SliderBar slider={slider} currentSlide={currentSlide} />}
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

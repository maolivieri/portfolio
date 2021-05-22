import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { transparentize } from "polished"
import Layout from "../Design/Layout"
import Header from '../Components/Header'
import { ArrowLeft, ArrowRight } from '../Design/Slider'
import { Container } from "../styles/Home"
import { parseCookies } from "nookies";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from "framer-motion"
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import PageOne from "../Components/pageOne"
import { Interface } from 'readline'

interface Props {
  toggleTheme(): void;
}

export default function Home<Props>({ toggleTheme }) {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    }
  })

  const { t } = useTranslation('common')

  return (
    <Layout title="Matheus Aguiar Olivieri">
      <Container>
        <Header toggleTheme={toggleTheme}/>
        <div ref={ref} className="keen-slider">
          <div className="keen-slider__slide"><PageOne t={t}/></div>
          <div className="keen-slider__slide"><PageOne t={t}/></div>
          <div className="keen-slider__slide"><PageOne t={t}/></div>
          <div className="keen-slider__slide"><PageOne t={t}/></div>
        </div>
      </Container>
      {slider && (
        <>
        <div style={{ "position": "absolute", "top": "50%", 'left': "7rem" }}>
          <ArrowLeft disabled={currentSlide === 0} onClick={(e) => e.stopPropagation() || slider.prev()} />
        </div>
        <div style={{ "position": "absolute", "top": "50%", 'right': "5rem" }}>  
          <ArrowRight disabled={currentSlide === slider.details().size - 1} onClick={(e) => e.stopPropagation() || slider.next()}/>
        </div>
        </>
      )}
      {
        slider && (
          <SlideBarFullWidthContainer>
            <SlideBar>
            {[...Array(slider.details().size).keys()].map((idx) => {
              return (
                <SlideBarDot
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx)
                  }}
                  isActive={currentSlide === idx}
                  hasPast={currentSlide >= idx}
                />
              )
            })}
          </SlideBar>
        </SlideBarFullWidthContainer>
        )
        
      }
    </Layout> 
  )
}

const SlideBarFullWidthContainer = styled.div`
  position: absolute;
  bottom: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SlideBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  overflow: hidden;
  background: ${props => transparentize("0.8", props.theme.colors.white)};
`

interface DotProps {
  isActive: boolean;
  hasPast: boolean;
  theme: DefaultTheme
}

const SlideBarDot = styled.div`
  background: ${(props: DotProps) => props.hasPast ? transparentize("0.3", props.theme.colors.white) : transparentize("0.8", props.theme.colors.white)};
  width: 4rem;
  height: 0.5rem;
  border-radius: ${(props: DotProps) => props.isActive ? "0px 4px 4px 0px" : "0px"};
` 

export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx);
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['common'])),
      cookieTheme: JSON.parse(cookies.theme),
    },
  };
}

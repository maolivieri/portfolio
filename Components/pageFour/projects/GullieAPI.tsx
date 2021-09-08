import Carousel from 'nuka-carousel';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { CodeBlock, dracula, monokaiSublime, github } from 'react-code-blocks';

import { ContainerScrollHalf } from '../styles';

const codeSnippetA = `const Layout = (props) => {
 
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link
          href="https://fonts.googleapis.com/css2?family=Harmattan:wght@400;700&family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>{children}</div>
    </div>
  );
};`;

const GullieAPI = (props) => {
  const globalTheme = useTheme();
  return (
    <ContainerScrollHalf>
      <Carousel
        autoplay
        pauseOnHover
        wrapAround
        autoplayInterval={6000}
        renderBottomCenterControls={({ slideCount, currentSlide }) => (
          <div
            style={{
              display: 'flex',
              zIndex: 1000,
              width: slideCount === 1 ? 0 : '100%',
              alignItems: 'center'
            }}
          >
            {Array.from(Array(slideCount).keys()).map((x, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '99999px',
                  background: globalTheme.colors.highlights,
                  width: currentSlide === i ? '0.9rem' : '0.5rem',
                  height: currentSlide === i ? '0.9rem' : '0.5rem',
                  margin: '0.8rem 0.5rem'
                }}
              />
            ))}
          </div>
        )}
        style={{ width: '100%' }}
        renderCenterLeftControls={({ previousSlide, slideCount }) => (
          <button
            onClick={previousSlide}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.6rem',
              color:
                slideCount === 1 ? 'transparent' : globalTheme.colors.highlights
            }}
          >
            <FaAngleLeft />
          </button>
        )}
        renderCenterRightControls={({ nextSlide, slideCount }) => (
          <button
            onClick={nextSlide}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.6rem',
              color:
                slideCount === 1 ? 'transparent' : globalTheme.colors.highlights
            }}
          >
            <FaAngleRight />
          </button>
        )}
      >
        <div>
          <CodeBlock
            text={codeSnippetA}
            language="tsx"
            showLineNumbers
            wrapLines
            theme={globalTheme.name === 'dark' ? dracula : github}
          />
        </div>
        <div>
          <CodeBlock
            text={codeSnippetA}
            language="tsx"
            showLineNumbers
            wrapLines
            theme={globalTheme.name === 'dark' ? dracula : github}
          />
        </div>
        <div>
          <CodeBlock
            text={codeSnippetA}
            language="tsx"
            showLineNumbers
            wrapLines
            theme={globalTheme.name === 'dark' ? dracula : github}
          />
        </div>
        <div>
          <CodeBlock
            text={codeSnippetA}
            language="tsx"
            showLineNumbers
            wrapLines
            theme={globalTheme.name === 'dark' ? dracula : github}
          />
        </div>
      </Carousel>
    </ContainerScrollHalf>
  );
};

export { GullieAPI };

import { useTheme } from 'styled-components';

interface IProps {
  slideCount: number;
  currentSlide: number;
}

const BottomControls = ({ currentSlide, slideCount }: IProps) => {
  const pageTheme = useTheme();
  return (
    <div
      style={{
        display: 'flex',
        zIndex: 1000,
        width: '100%',
        alignItems: 'center'
      }}
    >
      {Array.from(Array(slideCount).keys()).map((x, i) => (
        <div
          key={i}
          style={{
            borderRadius: '99999px',
            background: pageTheme.colors.highlights,
            width: currentSlide === i ? '0.9rem' : '0.5rem',
            height: currentSlide === i ? '0.9rem' : '0.5rem',
            margin: '0.8rem 0.5rem'
          }}
        />
      ))}
    </div>
  );
};

export { BottomControls };

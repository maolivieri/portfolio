import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useTheme } from 'styled-components';

interface IProps {
  navigateToSlide: () => void;
  next?: boolean;
}

const SideControls = ({ navigateToSlide, next }: IProps) => {
  const pageTheme = useTheme();
  return (
    <button
      onClick={navigateToSlide}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.6rem',
        color: pageTheme.colors.highlights
      }}
    >
      {next ? <FaAngleRight /> : <FaAngleLeft />}
    </button>
  );
};

export { SideControls };

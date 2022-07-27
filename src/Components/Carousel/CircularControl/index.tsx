import { ControlWheel, Item } from './styles';

interface IProps {
  arrayOfItems: string[];
  count: number;
  currentSlide: number;
  navigateToIndex: (idx: number) => void;
}

const CircularControl = ({
  count,
  currentSlide,
  navigateToIndex,
  arrayOfItems
}: IProps) => {
  const setPositionIndex = (idx: number) => {
    switch (idx) {
      case 0:
        return 9;
        break;
      case 1:
        return 8;
        break;
      case 2:
        return 7;
        break;
      case 3:
        return 6;
        break;
      case 4:
        return 5;
        break;
      case 5:
        return 4;
        break;
      case 6:
        return 3;
        break;
      case 7:
        return 2;
        break;
      default:
        return 1;
        break;
    }
  };

  return (
    <ControlWheel
      style={{
        transform: `rotate(${
          -22.5 + (360 / count) * setPositionIndex(currentSlide)
        }deg)`
      }}
    >
      {arrayOfItems.map((item, idx) => (
        <Item
          key={idx}
          active={currentSlide === idx}
          // className={`${currentSlide === idx ? styles.activeItem : ''}`}
          style={{
            transform: `rotate(${(360 / count) * (idx + 1)}deg) skew(45deg)`
          }}
        >
          <p onClick={() => navigateToIndex(idx)}>{`${item}`}</p>
        </Item>
      ))}
    </ControlWheel>
  );
};

export { CircularControl };

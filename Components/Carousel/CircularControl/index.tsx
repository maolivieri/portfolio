import styles from './styles.module.scss';

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
  return (
    <div
      className={styles.controlWheel}
      style={{
        transform: `rotate(${-113 + (360 / count) * (currentSlide + 1)}deg)`
      }}
    >
      {arrayOfItems.map((item, idx) => (
        <li
          key={idx}
          className={`${currentSlide === idx ? styles.activeItem : ''}`}
          style={{
            transform: `rotate(${(360 / count) * (idx + 1)}deg) skew(45deg)`
          }}
        >
          <p onClick={() => navigateToIndex(idx)}>{`${item}`}</p>
        </li>
      ))}
    </div>
  );
};

export { CircularControl };

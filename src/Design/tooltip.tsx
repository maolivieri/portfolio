import styles from '../styles/Tooltip.module.css';
import { useTheme } from 'styled-components';

interface IProps {
  text: string;
  top?: string;
  left?: string;
  children: any;
}

const Tooltip = ({ text, children, top, left }: IProps) => {
  const theme = useTheme();
  return (
    <>
      <div className={styles.tooltip}>
        {children}
        <span
          className={styles.tooltiptext}
          style={{
            color: theme.colors.primary,
            top: top ? top : '0px',
            left: left ? left : '0px'
          }}
        >
          {text}
        </span>
      </div>
    </>
  );
};

export default Tooltip;

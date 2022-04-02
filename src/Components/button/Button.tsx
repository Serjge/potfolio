import styles from './Button.module.scss';
import 'common/styles/theme/theme.scss'

type  PropsType = {
  label: string
  onClick?: () => void
  type?:"button" | "submit" | "reset" | undefined
}

export const Button = ({onClick, label, type}: PropsType) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
};
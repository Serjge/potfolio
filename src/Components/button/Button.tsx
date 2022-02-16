import styles from './Button.module.scss';
import 'common/styles/theme/theme.scss'

type  PropsType = {
  label: string
  onClick: () => void
}

export const Button = (props: PropsType) => {
  return (
    <button onClick={props.onClick} className={styles.button}>
      {props.label}
    </button>
  );
};
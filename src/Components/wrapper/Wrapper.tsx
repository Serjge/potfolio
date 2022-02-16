import {ReactElement} from "react";
import style from './Wrapper.module.scss'

type PropsType = {
  title: string
  children?: ReactElement
}

export const Wrapper = ({title, children}: PropsType) => {
  return (
    <div
      className={`${style.container} ${style.containerFlex} `}>
      <h3 className={style.title}>{title}</h3>
      {children}
    </div>
  );
};

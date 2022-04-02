import {ReactElement} from "react";
import style from './Wrapper.module.scss'

type PropsType = {
  title: string
  children?: ReactElement
  id?:string
}

export const Wrapper = ({title, id, children}: PropsType) => {
  return (
    <div
      id={id}
      className={`${style.container} ${style.containerFlex} `}>
      <h3 className={style.title}>{title}</h3>
      {children}
    </div>
  );
};

import styles from './Button.module.scss';
import React from 'react';
import '../theme/theme.scss'

type  PropsType ={
    label: string
    onClick: ()=> void
}

export const Button = (props: PropsType) => {
    // const { label, onClick } = props;

    return (
        <button onClick={props.onClick} className={styles.button}>
            {props.label}
        </button>
    );
};
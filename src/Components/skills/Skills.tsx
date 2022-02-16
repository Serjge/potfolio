import styles from './Skills.module.scss';
import {Skill, Wrapper} from "Components";
import {HTML, JavaScript, React, Redux, SASS, TypeScript} from "common";
import {ReactFragment} from "react";

type SkillsType = {
  name: string
  description: string
  icon: ReactFragment
}

const skills: SkillsType[] = [
  {
    name: 'HTML',
    description: 'HyperText Markup Language язык гипертекстовой разметки — стандартизированный язык разметки документов для просмотра веб-страниц в браузере.',
    icon: <HTML/>
  },
  {
    name: 'SCSS',
    description: 'Syntactically Awesome Stylesheets это метаязык на основе CSS, ' +
      'предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей.',
    icon: <SASS/>
  },
  {
    name: 'TypeScript',
    description: 'Язык программирования, позиционируемый как средство разработки веб-приложений, ' +
      'расширяющее возможности JavaScript.',
    icon: <TypeScript/>
  },
  {
    name: 'JavaScript',
    description: ' Mультипарадигменный язык программирования. Поддерживает объектно-ориентированный, ' +
      'императивный и функциональный стили.',
    icon: <JavaScript/>
  },
  {
    name: 'React',
    description: 'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. ',
    icon: <React/>
  },
  {
    name: 'Redux',
    description: ' библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения.',
    icon: <Redux/>
  },

]

export const Skills = () => {

  const skillMapping = skills.map(({
                                     name,
                                     icon,
                                     description
                                   }, i) => {
    return <Skill
      key={i}
      name={name}
      icon={icon}
      description={description}
    />
  })
  return (
    <Wrapper title={'Skills'}>
      <div className={styles.skills}>
        {skillMapping}
      </div>
    </Wrapper>
  );
};




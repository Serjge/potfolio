import styles from './Projects.module.scss'
import {Project, Wrapper} from "Components";
import todo from 'common/images/todo.jpg'
import social from 'common/images/social.jpg'
import learn from 'common/images/learn.jpg'
import logistic from 'common/images/logistic.jpg'
import convector from 'common/images/convector.jpg'
import calculator from 'common/images/calculator.jpg'

type ProjectType = {
  name: string
  description: string
  imgUrl: string
  projectUrl: string
  gitUrl: string
}

const project: ProjectType[] = [
  {
    name: 'Cards Learn',
    description: 'Изучение карточек. Создание пакета катрочек для изучения' +
      ' своей темы, можно свой изучать также и чужие.',
    imgUrl: learn,
    projectUrl: 'https://serjge.github.io/friday_project/',
    gitUrl: 'https://github.com/Serjge/friday_project',
  },
  {
    name: 'Todolist',
    description: 'Todolist это список задач, которые вам нужно выполнить,' +
      ' или вещей, которые вы хотите сделать. Чаще всего они организованы в порядке приоритета. Традиционно они пишутся на листе бумаги.',
    imgUrl: todo,
    projectUrl: 'https://serjge.github.io/todolist/',
    gitUrl: 'https://github.com/Serjge/todolist/',
  },
  {
    name: 'Transport logistics',
    description: 'Транспортная логистика карта с маршрутами заявок.',
    imgUrl: logistic,
    projectUrl: 'https://serjge.github.io/transport_logistics/',
    gitUrl: 'https://github.com/Serjge/transport_logistics',
  }, {
    name: 'Currency converter',
    description: 'Конвектор валют можно выбрать пару валют',
    imgUrl: convector,
    projectUrl: 'https://serjge.github.io/currency_converter/',
    gitUrl: 'https://github.com/Serjge/currency_converter',
  }, {
    name: 'Social network',
    description: 'Социальная сеть — это веб-сайт, который позволяет людям со схожими интересами собираться вместе и обмениваться информацией, фотографиями и видео.',
    imgUrl: social,
    projectUrl: 'https://serjge.github.io/social_network/',
    gitUrl: 'https://github.com/Serjge/social_network',
  },
  {
    name: 'Calculator constructor',
    description: 'Конструктор калькулятора, в котором можно собрать' +
      ' калькулятор который понравится и потом считать на нем.',
    imgUrl: calculator,
    projectUrl: 'https://serjge.github.io/constructor_calculator/',
    gitUrl: 'https://github.com/Serjge/constructor_calculator',
  },


]

export const Projects = () => {

  const projectMapping = project.map(({
                                        name,
                                        description,
                                        imgUrl,
                                        gitUrl,
                                        projectUrl
                                      }, i) => {
    return <Project key={i}
                    name={name}
                    description={description}
                    imgUrl={imgUrl}
                    projectUrl={projectUrl}
                    gitUrl={gitUrl}
    />
  })

  return (
    <Wrapper id={'projects'} title={'Project'}>
      <div className={styles.projectWrapper}>
        {projectMapping}
      </div>
    </Wrapper>
  );
};

import styles from './Projects.module.scss'
import {Project, Wrapper} from "Components";
import projectImg from 'common/images/photo-1572177812156-58036aae439c.jpg'

type ProjectType = {
  name: string
  description: string
  imgUrl: string
  projectUrl: string
  gitUrl: string
}

const project: ProjectType[] = [
  {
    name: 'Name Project1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, exercitationem nam nihil nostrum officia optio quasi tempore? Eius esse hic, officiis perferendis quaerat ullam. Facilis libero obcaecati quis rerum tempora!',
    imgUrl: projectImg,
    projectUrl: 'https://serjge.github.io/potfolio/',
    gitUrl: 'https://github.com/Serjge/potfolio',
  },
  {
    name: 'Name Project2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, exercitationem nam nihil nostrum officia optio quasi tempore? Eius esse hic, officiis perferendis quaerat ullam. Facilis libero obcaecati quis rerum tempora!',
    imgUrl: projectImg,
    projectUrl: 'https://serjge.github.io/potfolio/',
    gitUrl: 'https://github.com/Serjge/potfolio',
  },
  {
    name: 'Name Project3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, exercitationem nam nihil nostrum officia optio quasi tempore? Eius esse hic, officiis perferendis quaerat ullam. Facilis libero obcaecati quis rerum tempora!',
    imgUrl: projectImg,
    projectUrl: 'https://serjge.github.io/potfolio/',
    gitUrl: 'https://github.com/Serjge/potfolio',
  },
  {
    name: 'Name Project4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, exercitationem nam nihil nostrum officia optio quasi tempore? Eius esse hic, officiis perferendis quaerat ullam. Facilis libero obcaecati quis rerum tempora!',
    imgUrl: projectImg,
    projectUrl: 'https://serjge.github.io/potfolio/',
    gitUrl: 'https://github.com/Serjge/potfolio',
  },
  {
    name: 'Name Project5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, exercitationem nam nihil nostrum officia optio quasi tempore? Eius esse hic, officiis perferendis quaerat ullam. Facilis libero obcaecati quis rerum tempora!',
    imgUrl: projectImg,
    projectUrl: 'https://serjge.github.io/potfolio/',
    gitUrl: 'https://github.com/Serjge/potfolio',
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
    <Wrapper title={'Project'}>
      <div className={styles.projectWrapper}>
        {projectMapping}
      </div>
    </Wrapper>
  );
};

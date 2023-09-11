import React, {Fragment} from 'react';
import styles from './TypeHability.module.css';

const TypeHability = ({ hability }) => {

    const description = {
        front: 'Como desarrollador web me apasiona crear interfaces atractivas y funcionales. Mi enfoque se centra en la creación de experiencias de usuario excepcionales utilizando tecnologías como HTML, CSS y JavaScript. Estoy comprometido en mantenerme al día con las últimas tendencias en diseño y desarrollo frontend para ofrecer soluciones modernas y efectivas.',
        back: 'Como desarrollador backend, he adquirido sólidos conocimientos en la construcción y optimización de la lógica detrás de las aplicaciones web. Mi enfoque se centra en la creación de servidores eficientes y seguros que manejan las operaciones y la gestión de datos. Trabajo con tecnologías como Node.js y Django, también estoy familiarizado con la creación de APIs robustas que permiten la comunicación fluida entre el cliente y el servidor.',
        data_base: 'Poseo conocimientos tanto en bases de datos relacionales como no relacionales, lo que me permite gestionar eficazmente la persistencia y recuperación de datos en diversas aplicaciones. En el ámbito de las bases de datos relacionales, tengo experiencia en el diseño y la optimización de esquemas, llevándolas así a su tercera forma normal, también la creación de consultas SQL eficientes y la gestión de la integridad de los datos en varios motores como Oracle, PostgreSQL y SQL Server',
        version_control: 'Tengo sólidos conocimientos en el uso de Git, un sistema de control de versiones distribuido ampliamente utilizado en el desarrollo de software. Estoy familiarizado con la creación de repositorios, la gestión de ramas y la realización de fusiones para facilitar la colaboración en proyectos.',
        methodologies: 'Estoy familiarizado tanto con la metodología ágil Scrum como con enfoques tradicionales de gestión de proyectos. En Scrum, he participado en equipos autogestionados que siguen iteraciones cortas llamadas sprints, lo que permite una entrega rápida y continua de valor.'
    };

    const title = hability.hability === 'front' ? 'Frontend' : hability.hability === 'back' ? 'Backend': hability.hability === 'data_base' ? 'Bases de datos': hability.hability === 'version_control' ? 'Control de Versiones': 'Metodologías';
    
    return ( 
        <Fragment>
           <h3 className={`${styles['title-type']}`}>
                {title}
            </h3>
            {
                hability.hability === 'front'
                ?
                    <div>
                        <p>{description.front}</p>
                        <div className={`${styles['skills-sci']}`}>
                        <p><i className='bx bxl-html5'></i></p>
                        <p><i className='bx bxl-css3'></i></p>
                        <p><i className='bx bxl-javascript'></i></p>
                        <p><i className='bx bxl-bootstrap' ></i></p>
                        <p><i className='bx bxl-react'></i></p>
                        <p><i className='bx bxl-angular'></i></p>
                        </div>
                    </div>
                    
                : 
                hability.hability === 'back'
                ?
                    <div>
                        <p>{description.back}</p>
                        <div className={`${styles['skills-sci']}`}>
                            <p><i className='bx bxl-nodejs'></i></p>
                            <p><i className='bx bxl-django'></i></p>
                        </div>
                    </div>
                :
                hability.hability === 'data_base'
                ?
                    <div>
                        <p>{description.data_base}</p>
                        <div className={`${styles['skills-sci']}`}>
                            <p><i className='bx bxl-postgresql'></i></p>
                            <p><i className='bx bxl-firebase'></i></p>
                        </div>
                    </div>
                :
                hability.hability === 'version_control'
                ?
                    <div>
                        <p>{description.version_control}</p>
                        <div className={`${styles['skills-sci']}`}>
                            <p><i className='bx bxl-git'></i></p>
                            <p><i className='bx bxl-github'></i></p>
                            <p><i className='bx bxl-gitlab'></i></p>
                        </div>
                    </div>
                :    
                    <div>
                        <p>{description.methodologies}</p>
                        <div className={`${styles['skills-sci']}`}>
                            <p><i className='bx bxs-hard-hat'></i></p>
                            
                        </div>
                    </div>
            }
        </Fragment>
    );
}
 
export default TypeHability;

import React,{useState, useEffect} from 'react';
import styles from './Contact.module.css';
import {formValidation} from '../../utils/form';
import { toast, ToastContainer } from 'react-toastify';
import { Flip } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { sendData } from '../../utils/api'

const Contact = () => {

    const [currentComponent, setCurrentComponent] = useState('');
    const [dataForm, setDataForm] = useState({
        full_name: "",
        email: "",
        cellphone: Number,
        subject: "",
        message: ""
    });

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');

            //iteración a través de las secciones para determinar en cuál se encuentra.
            sections.forEach((sec) => {
                const rect = sec.getBoundingClientRect();
                const isSectionInView = rect.top <= window.innerHeight * 0.3 && rect.bottom >= 0;
                const sectionId = sec.getAttribute('id');
                //varificación si la sección está en la vista actual.
                if (isSectionInView) {
                    setCurrentComponent(sectionId);
                };
            });
        };
        //se agregar un event listener para el evento de scroll.
        window.addEventListener('scroll', handleScroll);
        //llamado a handleScroll inicialmente para determinar la sección inicial.
        handleScroll();
        //limpiar el event listener cuando el componente se desmonte.
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const {full_name, email, cellphone, subject, message} = dataForm;
        const resultValidate = formValidation(full_name, email, cellphone, subject, message);

        if (!resultValidate.error) {
            sendData(dataForm)
            .then(response => {
                toast.success(response.message, {
                    position: toast.POSITION.TOP_CENTER,
                    className: styles.successNotification,
                    progressClassName: styles.toastProgress 
                })
                setDataForm({
                    full_name: "",
                    email: "",
                    cellphone: "",
                    subject: "",
                    message: ""
                })
            })
            .catch(error => {
                toast.error(error.message, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    className: styles.errorNotification
                })
            })
            
        } else {
            toast.error(resultValidate.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: styles.errorNotification
            })
        };
    };

    const handleOnChange = data => {
        setDataForm({
            ...dataForm,
            [data.target.name] : data.target.value
        });
        
    };

    return (  
        <section className={`${styles.contact} ${currentComponent === 'contact' ? styles['show-animate']: ''}`} id="contact">
            <h2 className={styles.heading}>
                Contacta<span>me!</span>
                <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "1" }}></span>
            </h2>
            <form action="#" onSubmit={handleSubmit}>
                <div className={`${styles['input-box']}`}>
                    <div className={`${styles['input-field']}`}>
                        <input
                            type="text"
                            name='full_name' 
                            placeholder="Nombre Completo"
                            value={dataForm.full_name}
                            onChange={handleOnChange} 
                            required/>
                        <span className={styles.focus}></span>
                    </div>
                    <div className={`${styles['input-field']}`}>
                        <input
                            type="text"
                            name='email' 
                            placeholder="Correo Electrónico"
                            value={dataForm.email}
                            onChange={handleOnChange} 
                            required/>
                        <span className={styles.focus}></span>
                    </div>
                    <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "3" }}></span>
                </div>
                <div className={`${styles['input-box']}`}>
                    <div className={`${styles['input-field']}`}>
                        <input 
                        type="number"
                        name='cellphone' 
                        placeholder="Teléfono"
                        value={dataForm.cellphone}
                        onChange={handleOnChange}  
                        required/>
                        <span className={styles.focus}></span>
                    </div>
                    <div className={`${styles['input-field']}`}>
                        <input 
                        type="text"
                        name='subject' 
                        placeholder="Asunto"
                        value={dataForm.subject}
                        onChange={handleOnChange} 
                        required/>
                        <span className={styles.focus}></span>
                    </div>
                    <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "5" }}></span>
                </div>
                <div className={`${styles['textarea-field']}`}>
                    <textarea 
                        name="message" 
                        id="" 
                        cols="30" 
                        rows="10" 
                        placeholder="Escribe aquí tu mensaje"
                        value={dataForm.message}
                        onChange={handleOnChange} 
                        required>
                    </textarea>
                    <span className={styles.focus}></span>
                    <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "7" }}></span>
                </div>
                <div className={`${styles['btn-box']} ${styles.btns}`}>
                    <button type="submit" className={`${styles['btn-contact']}`}>Enviar</button>
                    <span className={`${styles.animate} ${styles.scroll}`} style={{ "--i": "9" }}></span>
                </div>
            </form>
            <ToastContainer
                autoClose={4000}
                limit={3}
                transition={Flip}
            />
        </section>
    );
}
 
export default Contact;

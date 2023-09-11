import React, {useState, useEffect} from 'react';
import styles from './Header.module.css'
const Header = () => {
    
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [showMenuIcon, setShowMenuIcon] = useState(window.innerWidth <= 768);
    const [activeNavbar, setActiveNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            const sections = document.querySelectorAll('section');
            let activeSectionId = '';
      
            sections.forEach(sec => {
              const top = window.scrollY;
              const offset = sec.offsetTop - 100;
              const height = sec.offsetHeight;
              const id = sec.getAttribute('id');
      
              if (top >= offset && top < offset + height) {
                activeSectionId = id;
              };
            });
      
            setActiveSection(activeSectionId);
            setIsSticky(window.scrollY > 100);
            
        };
        
        const handleResize = () => {
          setShowMenuIcon(window.innerWidth <= 768);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', handleResize);
        };
    }, []);
     
    const modifyOnClickIcon = () => {
      let menuIcon = document.querySelector('#menu-icon');
    
      //se invierte el estado de activeNavbar.
      setActiveNavbar(!activeNavbar);
    
      //si activeNavbar es false (es decir, el menú estaba cerrado), se abre el menú.
      if (!activeNavbar) {
        menuIcon.classList.add('bx-x');
      } else {
        //si activeNavbar es true (es decir, el menú estaba abierto), se cierra el menú.
        menuIcon.classList.remove('bx-x');
      }
    };

    const closeNavbar = () => {
      if (window.innerWidth <= 768) {
        setActiveNavbar(false);
        let menuIcon = document.querySelector('#menu-icon');
        menuIcon.classList.remove('bx-x');
      }
    };

    return (      
        <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
        <a href="..." className={styles.logo} >
            Luis.
            <span className={styles.animate} style={{ "--i": 1 }}></span>
        </a>
        {showMenuIcon && ( 
          <div className={`bx bx-menu ${styles.showMenuIcon}`} id={"menu-icon"} onClick={modifyOnClickIcon}></div>
        )}
        
        <nav className={`${styles.navbar} ${activeNavbar ? styles.active : ''}`}>
            <a href="#home" className={activeSection === 'home' ? styles.active : ''} onClick={closeNavbar}>Inicio</a>
            <a href="#about" className={activeSection === 'about' ? styles.active : ''} onClick={closeNavbar}>Quién Soy</a>
            <a href="#proyects" className={activeSection === 'proyects' ? styles.active : ''} onClick={closeNavbar}>Proyectos</a>
            <a href="#training" className={activeSection === 'training' ? styles.active : ''} onClick={closeNavbar}>Formación</a>
            <a href="#skills" className={activeSection === 'skills' ? styles.active : ''} onClick={closeNavbar}>Habilidades</a>
            <a href="#contact" className={activeSection === 'contact' ? styles.active : ''} onClick={closeNavbar}>Contacto</a>
            <span className={styles['active-nav']}></span>
            <span className={styles.animate} style={{ "--i":"2" }}></span>
        </nav>
    </header>
    );
}
 
export default Header;
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export function Footer() {
    const [date, setDate] = useState<number>();

    useEffect(() => {
        getYear();
    },[])

    const getYear = () => {
        const date = new Date();
        setDate(date.getFullYear());
    }
    return(
        <footer className={styles.footer}> 
            <img className={styles.footer_logo} src="/logo.png" alt="" />  
            <div className={styles.footer_content}>
                <small>Todos os direitos reservados</small>
                <small>{`Cineanim - ${date} | Developed by Elian Campos`}</small> 
            </div>
        </footer>
    )
}
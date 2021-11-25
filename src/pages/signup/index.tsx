import Head from "next/head"; 
import styles from './styles.module.scss';
import Link from 'next/link';

export default function login() {
    return (
    <div>
      <Head>
        <title>Cineanim</title>
      </Head>

      

      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <img className={styles.hero_img} src="/hero.png" alt="hero.png" />

        <header className={styles.header}>
            <Link href='/'>
                <img src="/logo.png" alt="logo.png" width={150}/>
            </Link>
        </header>
        
        <form className={styles.signup}>
            <h2>Criar conta</h2>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Sobrenome" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Senha" />

            
            <button className="primary" type="submit">Criar conta</button>
            <Link href="/login">Já tenho uma conta</Link>
        </form>
      </section>
      </div>
    )
}
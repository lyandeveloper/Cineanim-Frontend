import Head from "next/head";
import { Grid } from "@material-ui/core";
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cineanim - Assista seus animes favoritos</title>
      </Head>

      

      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <img className={styles.hero_img} src="/hero.png" alt="hero.png" />

        <header className={styles.header}>
          <img src="/logo.png" alt="logo.png" width={150}/>
        </header>
        
        <article className={styles.hero_content}>
          <h2>Assista seus animes favoritos, sem sair de casa.</h2>
          <p>A melhor plataforma de streaming com diversas variedades de animes só para você!</p>
          <div className={styles.buttons}>
              <button className="secondary">Criar conta</button>
              <button className="primary">Entrar</button>
          </div>
        </article>
      </section>
    </div>
  );
}
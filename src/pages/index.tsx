import Head from "next/head";
import { Grid } from "@material-ui/core";
import styles from '../styles/home.module.scss';
import { useRouter } from "next/dist/client/router";

export default function Home() {

  const router = useRouter();

  const redirectToLogin = () => {
    router.push('/login');
  }

  const redirectToSignup = () => {
    router.push('/signup');
  }
  return (
    <div>
      <Head>
        <title>Cineanim - Assista seus animes favoritos</title>
      </Head>

      

      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <video className={styles.hero_img} autoPlay muted loop>
            <source src="/trailer.mp4" type="video/mp4" />
        </video>

        <header className={styles.header}>
          <img src="/logo.png" alt="logo.png" width={150}/>
        </header>
        
        <article className={styles.hero_content}>
          <h2>Assista seus animes favoritos, sem sair de casa.</h2>
          <p>A melhor plataforma de streaming com diversas variedades de animes só para você!</p>
          <div className={styles.buttons}>
              <button onClick={redirectToSignup} className="secondary">Criar conta</button>
              <button onClick={redirectToLogin} className="primary">Entrar</button>
          </div>
        </article>
      </section>
    </div>
  );
}
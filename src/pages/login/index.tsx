import Head from "next/head"; 
import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();  

  const signin = (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      router.push('/animes');
  }
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
            
            <form className={styles.login}>
                <h2>Entrar</h2>
                <input type="text" placeholder="Email ou nome de usuário" />
                <input type="password" placeholder="Senha" />

                <button onClick={signin} className="primary" type="submit">Entrar</button>
                <Link href="/signup">Não tenho uma conta</Link>
            </form>
          </section>
        </div>
    )
}
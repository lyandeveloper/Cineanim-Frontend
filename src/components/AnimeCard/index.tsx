import styles from './styles.module.scss';

interface AnimeTypes {
    link: string;
    thumbnail: string;
    dub: string;
    episodes: number;
    title: string;
    type: string;
    status: string;
}

export function AnimeCard({ link, thumbnail, dub, episodes, title, type, status} : AnimeTypes) {
    return (
        <a href={link} className={styles.anime}>
            <img src={thumbnail} alt="" />
            <div className={styles.anime_content}>
                <div className={styles.anime_info}>
                    <span className={styles.dub}>{dub}</span>
                    <span className={styles.ep_amount}>{episodes} episódios</span>
                </div>
                <div className={styles.anime_title}>
                    <h1>{title}</h1>
                    <div className={styles.anime_status}>
                        <small>Animes </small>
                        <span className={styles.dot}></span>
                        <small>{type}</small>
                        <span className={styles.dot}></span>
                        <small>{status}</small>
                    </div>
                </div>
            </div>
        </a>
    )
}
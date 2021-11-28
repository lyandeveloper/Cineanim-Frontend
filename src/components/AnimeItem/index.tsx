import styles from './styles.module.scss';

interface AnimeTypes {
    thumbnail: string;
    title: string;
    episode: string;
    createdDate: string;
}

export function AnimeItem({ thumbnail, title, episode, createdDate} : AnimeTypes) {
    return(
        <a href="#" className={styles.anime}>
            <img src={thumbnail} alt="" />
            <div className={styles.anime_text}>
                <h2>{title}</h2>
                <small>Episodio {episode} - Há {createdDate}</small>
            </div>
        </a>
    )
}
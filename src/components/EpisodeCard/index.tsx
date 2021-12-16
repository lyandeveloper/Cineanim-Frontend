import styles from './styles.module.scss';

interface EpisodesTypes {
    thumbnail: string;
    title: string;
    episode: string;
    createdDate: string;
    href: string;
}

export function EpisodeCard({ thumbnail, title, episode, createdDate, href } : EpisodesTypes) {
    return(
        <a href={href} className={styles.episode}>
            <img src={thumbnail} alt="" />
            <div className={styles.episode_text}>
                <h2>{title}</h2>
                <small>Episodio {episode} - Há {createdDate}</small>
            </div>
        </a>
    )
}
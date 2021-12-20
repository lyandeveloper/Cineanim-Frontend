import { EpisodesCardTypes } from '../../protocols/EpisodeTypes';
import styles from './styles.module.scss';

export function EpisodeCard({ thumbnail, title, episode, createdDate, href } : EpisodesCardTypes) {
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
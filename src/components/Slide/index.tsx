import { SwiperSlide } from 'swiper/react';

import styles from './styles.module.scss';

interface slideTypes {
    video: string;
    title: string;
    description: string;
    type: string;
    minutes: string;
    year: string;
    quality: string;
    dub: string;
}

export function Slide({ video, title, description, type, minutes, year, quality, dub } : slideTypes) {
    return (
        <>
        <video  className={styles.video} autoPlay loop muted>
            <source src={video} type="video/mp4"/>
        </video> 

        <div className={`${styles.slide_content} container`}>
            <h1>{title}</h1>
            <div className={styles.anime_detail}>
            <div className={styles.anime_item}>
                <span>{type}</span>
            </div>
            <div className={styles.anime_item}>
                <span>{minutes}m</span>
            </div>
            <div className={styles.anime_item}>
                <span>{year}</span>
            </div> 
            
            <div className={styles.anime_tag_quality}>
                <span>{quality}</span>
            </div>

            <div className={styles.anime_tag_dub}>
                <span>{dub}</span>
            </div>
            </div>
            <p>
                {description}
            </p> 

            <div className={styles.buttons}>
            <button className="primary">Assistir agora</button>
            <button className="secondary">Detalhes</button>
            </div>
        </div>
        
        <div className={styles.overlay}></div> 
        </>
    )
}
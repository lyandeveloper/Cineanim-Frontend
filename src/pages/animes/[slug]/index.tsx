import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '../../../services/api';

interface EpisodeTypes {
    id: number,
    video: string,
    thumbnail: string,
    createdDate: string
}

interface AnimeTypes {
    id: number;
    title: string,
    slug: string;
    thumbnail: string; 
    type: string;
    duration: number;
    aired: number;
    age_group: number;
    episodes_amount: number;
    status: string;
    category: string;
    episodes: EpisodeTypes []; 
}

export default function Slug() {
    const [anime, setAnime] = useState<AnimeTypes>();
    const router = useRouter();
    const { slug } = router.query; 

    useEffect(() => {

        async function loadAnime() {
            const response = await api.get(`/animes?slug=${slug}`);
            setAnime(response.data[0]); 
        }

        loadAnime();
 
    },[router.query])

    
    if(anime == undefined) return '';

    return (
        <h1>{anime.title}</h1>
    ) 
}
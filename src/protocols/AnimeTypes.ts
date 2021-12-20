import { EpisodeTypes } from "./EpisodeTypes";

export type AnimeTypes  = {
    id: number;
    title: string,
    slug: string;
    thumbnail: string; 
    type: string;
    description: string;
    duration: number;
    aired: number;
    age_group: number;
    episodes_amount: number;
    status: string;
    quality: string;
    category: string;
    dub: string;
    episodes: EpisodeTypes []; 
}

export type AnimeCardTypes = {
    link: string;
    thumbnail: string;
    dub: string;
    episodes: number;
    title: string;
    type: string;
    status: string;
}
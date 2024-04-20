import {publicaciones} from './data.js';

export function load() {
    return {
        summaries: publicaciones.map((publicacion) => ({
            slug: publicacion.slug,
            title: publicacion.title,
            image: publicacion.images[0]
        }))
    };
}

import {error} from '@sveltejs/kit';
import {publicaciones} from '../data.js';

export function load({params}) {
    const publicacion = publicaciones.find((publicacion) => publicacion.slug === params.slug);

    if (!publicacion) throw error(404);

    return {
        publicacion
    };
}

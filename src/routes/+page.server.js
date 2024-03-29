import miembros from '$lib/img/carrusel-1.jpg';
import comedor from '$lib/img/carrusel-2.jpg';
import reunion from '$lib/img/carrusel-3.jpg';
import programa from '$lib/img/carrusel-4.jpg';
import aniversario from '$lib/img/carrusel-5.jpg';
import iscade from '$lib/img/carrusel-6.jpg';


export function load() {
    return {
        imagenes: [
            {
                alt: 'Miembros de la Sociedad de Beneficencia de Motupe',
                src: miembros
            },
            {
                alt: 'Comedor de la Sociedad de Benefice',
                src: comedor
            },
            {
                alt: 'Aniversario',
                src: aniversario
            },
            {
                alt: 'Programa',
                src: programa
            },
            {
                alt: 'Reunion',
                src: reunion
            }, {
                alt: 'Representante de ISCADE',
                src: iscade
            }
        ]
    }
}
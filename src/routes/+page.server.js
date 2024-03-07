import aniversario from '$lib/img/aniversario.jpg'
import programa from '$lib/img/programa.jpg'
import reunion from '$lib/img/reunion.jpg'

export function load() {
    return {
        imagenes: [
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
            }
        ]
    }
}
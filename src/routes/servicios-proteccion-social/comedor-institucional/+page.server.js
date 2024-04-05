import comedor1 from '$lib/img/comedor-institucional/comedor-institucional-1.jpg';
import comedor2 from '$lib/img/comedor-institucional/comedor-institucional-2.jpg';
import comedor3 from '$lib/img/comedor-institucional/comedor-institucional-3.jpg';
import comedor4 from '$lib/img/comedor-institucional/comedor-institucional-4.jpg';
import comedor5 from '$lib/img/comedor-institucional/comedor-institucional-5.jpg';
import comedor6 from '$lib/img/comedor-institucional/comedor-institucional-6.jpg';


export function load() {
    return {
        imagenes: [
            {
                alt: 'Presidente de la Beneficencia junto con supervisores, en el comedor institucional',
                src: comedor1
            },
            {
                alt: 'Beneficiarios desayunando en el comedor institucional',
                src: comedor2
            },
            {
                alt: 'Beneficiarios desayunando en el comedor institucional',
                src: comedor3
            },
            {
                alt: 'Collage de fotos del comedor institucional',
                src: comedor4
            },
            {
                alt: 'Señora beneficiaria recibiendo sus alimentos en crudo',
                src: comedor5
            }, {
                alt: 'Señor beneficiario recibiendo sus alimentos en crudo',
                src: comedor6
            }
        ]
    }
}
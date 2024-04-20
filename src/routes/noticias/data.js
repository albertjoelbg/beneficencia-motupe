import placeholder from '$lib/img/noticias/placeholder.jpg';
import mondragonsinviolencia1 from '$lib/img/noticias/mondragonsinviolencia/mondragonsinviolencia-1.jpg';
import mondragonsinviolencia2 from '$lib/img/noticias/mondragonsinviolencia/mondragonsinviolencia-2.jpg';
import mondragonsinviolencia3 from '$lib/img/noticias/mondragonsinviolencia/mondragonsinviolencia-3.jpg';
import diadelninoperuano1 from '$lib/img/noticias/diadelninoperuano/diadelninoperuano-1.jpg';

export const publicaciones = [
    {
        slug: 'mondragonsinviolencia',
        title: 'Charla informativa “Mondragón Sin Violencia” en la Municipalidad del Centro Poblado Mondragón',
        content:
            'El presidente de la Sociedad de Beneficencia de Motupe Lic. Jesús Reyes Sánchez participó de la charla informativa “Mondragón Sin Violencia” en la Municipalidad del Centro Poblado Mondragón bajo la alcaldía del Sr. Miguel Garay Mio, contando con la presencia de la Subprefecta Distrital Lic. Dalila Coronado Sánchez y la Promotora del CEM Lambayeque Mg. Angie Cavero Chapoñan. \n' +
            'Dicha actividad fue dirigida a los pobladores de mencionado centro poblado, así como a los tenientes gobernadores de caseríos aledaños cuya participación fue muy activa y sobre todo con mucho aprendizaje en relación a la prevención de la violencia familiar con el fin de erradicar esa problemática que tanto aqueja a la sociedad.',
        images: [
            {
                alt: 'Lic. Jesús Reyes Sánchez junto con autoridades del caserío Mondragón',
                src: mondragonsinviolencia1
            }, {
                alt: 'Mujeres participando de juego en la charla informativa',
                src: mondragonsinviolencia2
            }, {
                alt: 'Autoridades de Mondragón junto con el presidente de la Sociedad de Beneficencia de Motupe',
                src: mondragonsinviolencia3
            }
        ]
    },
    {
        slug: 'diadelninoperuano',
        title: 'Día de la Niña y Niño Peruano, una fecha importante',
        content:
            'Cada 2do domingo de abril se celebra el Día de la Niña y Niño Peruano, una fecha importante para ratificar en nuestro país el reconocimiento de las niñas, niños y adolescentes como sujetos de derechos. Este compromiso nos exige continuar con la implementación y prestación de servicios orientados a crear espacios seguros para nuestra niñez motupana, pero sobre todo nos debe llevar a unir esfuerzos para prevenir y erradicar toda forma de violencia contra ellas y ellos porque merecen crecer en un entorno seguro, feliz y amoroso, donde puedan desarrollar todo su potencial.',
        images: [
            {
                alt: 'Miembros de la Sociedad de Beneficencia celebrando el día del niño',
                src: diadelninoperuano1
            }
        ]
    }, {
        slug: 'aniversario',
        title: 'Aniversario de la Sociedad Beneficencia de Motupe',
        content:
            'Esto es el aniversario de la Sociedad Beneficencia de Motupe',
        images: [
            {
                alt: 'Miembros de la Sociedad de Beneficencia',
                src: placeholder
            }
        ]
    },
    {
        slug: 'diadelamujer',
        title: 'Feliz día de la mujer',
        content:
            'La Sociedad Beneficencia de Motupe celebra el día de la mujer',
        images: [
            {
                alt: 'Miembros de la Sociedad de Beneficencia celebrando el día de la mujer',
                src: placeholder
            }
        ]
    }

];

export default function GetString(lang, id) {
    if (!language_data[id]) return '#MissingString#';
    const string = language_data[id][lang];
    return string || '#MissingTranslation#';
}

const language_data = {
    locale: {
        spanish: 'es_ES',
        english: 'en_US'
    },
    short_desc: {
        spanish: 'Desarrollador web y apasionado por la informática.',
        english: 'Web developer and passionate about computer science.'
    },
    photo_me_desc: {
        spanish: 'Foto de perfil',
        english: 'Profile picture'
    },
    introduction1: {
        spanish: '¡Hola! Mi nombre es Javier y llevo más de 6 años metido en el mundo de la informática. Con una formación en \
                    parte formal y en parte autodidacta, me he abierto paso a través de las múltiples ramas de la computación. \
                    Por mencionar algunas: desarrollo de aplicaciones (de escritorio, web y móviles), seguridad informática, bases de datos, \
                    y más. Podés revisar la sección de habilidades para ver mis conocimientos con más detalle.',
        english: 'Hello! My name is Javier and I\'ve been involved in the computer science world for more than 6 years. With a partly formal \
                    and partly self-taught training, I\'ve made my way through the many branches of computer science. To mention a few: apps \
                    development (desktop, web and mobile), cybersecurity, databases, and more. You can check \
                    the skills section to see my knowledge in more detail.'
    },
    introduction2: {
        spanish: 'Actualmente estoy buscando crecer como profesional y también como persona.',
        english: 'I\'m currently looking to grow as a professional and also as a person.'
    },
    profile: {
        spanish: 'Perfil',
        english: 'Profile'
    },
    skills: {
        spanish: 'Habilidades',
        english: 'Skills'
    },
    experience: {
        spanish: 'Experiencia',
        english: 'Experience'
    },
    education: {
        spanish: 'Educación',
        english: 'Education'
    },
    change_language: {
        spanish: 'Cambiar idioma',
        english: 'Change language'
    },
    skills_desc: {
        spanish: 'Estas son las habilidades que he aprendido a lo largo de mi carrera. Como todas estas tecnologías avanzan con el tiempo, \
                    me siento más confiado con algunas que otras, pero los principios básicos siguen vigentes.',
        english: 'These are the skills that I\'ve learned along my career. Because all these technologies change with time, I feel more confident \
                    with ones than others, but the basic principles are still valid.'
    },
    skills_indication: {
        spanish: 'Al lado de cada tecnología se muestra una o más estrellas indicando mi nivel de habilidad con la misma. Son estimativas, NO he incluído \
                    ninguna tecnología que sólo haya probado una vez. El máximo de estrellas es 3.',
        english: 'Next to each technology is shown one o more stars indicating my current skill level with it. They are estimates, I\'ve NOT included any \
                    technology that I\'ve only tried once. Maximum three stars.'
    },
    education_desc: {
        spanish: 'Aquí presento la educación formal que recibí. Gran parte de mis conocimientos los he adquirido por cuenta propia \
                    pero esta educación me ayudó a partir de una base sólida.',
        english: 'Here I present the formal education I received. Much of my knowledge I have acquired on my own but this education helped \
                    me start from a solid foundation.'
    },
};
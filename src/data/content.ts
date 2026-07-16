export type Language = 'fr' | 'en' | 'sw';

export type TimelineItem = {
  period: string;
  year: string;
  title: string;
  place: string;
  placeUrl?: string;
  description: string;
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  status?: string;
};

type ProjectGroup = {
  title: string;
  items: Project[];
};

export type Content = {
  nav: { about: string; experience: string; skills: string; projects: string; contact: string };
  hero: {
    role: string;
    headline: string;
    intro: string;
    highlights: string[];
    ctaContact: string;
    ctaExperience: string;
  };
  identity: { title: string; items: { label: string; value: string }[] };
  about: { title: string; paragraphs: string[] };
  stats: { value: string; label: string }[];
  experience: { title: string; items: TimelineItem[] };
  education: { title: string; items: TimelineItem[] };
  skills: { title: string; groups: { title: string; items: string[] }[] };
  languages: { title: string; items: string[] };
  projects: { title: string; intro: string; groups: ProjectGroup[] };
  contact: { title: string; text: string; formNotice: string; email: string; phone: string; location: string };
  footer: string;
};

const frProjectGroups: ProjectGroup[] = [
  {
    title: 'Travail professionnel - RundiNova Tech',
    items: [
      {
        title: 'ComLab Burundi',
        description: 'Plateforme communautaire et technologique d’innovation au Burundi, conçue pour stimuler le développement local et l’écosystème entrepreneurial.',
        tags: ['Plateforme', 'Innovation', 'Burundi'],
        url: 'https://comlab-burundi.com'
      },
      {
        title: 'umugenziTech',
        description: 'Plateforme d’apprentissage et d’éducation en ligne permettant aux formateurs et institutions de concevoir des parcours sécurisés et d’émettre des certificats vérifiés.',
        tags: ['E-learning', 'Certificats', 'Burundi'],
        url: 'http://www.umugenzitech.run.place/'
      },
      {
        title: 'Novaris',
        description: 'Système éducatif innovant conçu pour vérifier l’authenticité des documents académiques officiels et soutenir l’inclusion des apprenants.',
        tags: ['Éducation', 'Vérification', 'Inclusion'],
        status: 'Site protégé par le gouvernement'
      },
      {
        title: 'RundiCheck',
        description: 'Outil de controle des présences conçu pour renforcer la traçabilité, la conformité et la confiance dans des processus institutionnels ou communautaires.',
        tags: ['COntrole', 'Presence', 'Confiance'],
        status: 'En développement'
      }
    ]
  },
  {
    title: 'Projets personnels',
    items: [
      {
        title: 'PharmiGo',
        description: 'Plateforme reliant les patients aux pharmacies, le traitement d’ordonnances par IA et les paiements mobiles locaux.',
        tags: ['HealthTech', 'IA', 'Paiements'],
        url: 'https://pharmigo.afrique'
      },
      {
        title: 'seasky-on-the-way',
        description: 'Écosystème de gestion en temps réel pour les agences de vente, de traitement et de redistribution de lait au Burundi.',
        tags: ['Logistique', 'Paiements', 'Temps réel'],
        url: 'https://seasky-on-the-way.vercel.app'
      },
      {
        title: 'EarnNova',
        description: 'Écosystème Web3 et de minage décentralisé reposant sur le jeton utilitaire Ihela, avec synchronisation de portefeuilles et vérification sécurisée.',
        tags: ['Web3', 'Ihela', 'Blockchain'],
        url: 'https://earnnova.jo3.org'
      },
      {
        title: 'PharmaSync',
        description: 'Solution numérique orientée pharmacie pour la gestions des pharmacies dans l\' étendue nationale, les informations, suivre les flux et améliorer la coordination entre acteurs de santé.',
        tags: ['Gestion', 'Pharmacies', 'Santé'],
        status: 'En développement'
      },
      {
        title: 'ExpoCheck',
        description: 'Solution de contrôle et de vérification pensée pour fiabiliser les opérations terrain, les enregistrements produits et les suivies à temps réel.',
        tags: ['Scan', 'Vérification', 'suivie temps reel'],
        status: 'En développement'
      },
      {
        title: 'EduCongo',
        description: 'Projet éducatif destiné à soutenir l’apprentissage, l’organisation académique et l’accès à des outils numériques adaptés au contexte congolais.',
        tags: ['Éducation', 'RDC', 'Numérique'],
        status: 'En développement'
      }
    ]
  }
];

const enProjectGroups: ProjectGroup[] = [
  {
    title: 'Professional work - RundiNova',
    items: [
      {
        title: 'ComLab Burundi',
        description: 'Community and technology innovation platform in Burundi, designed to support local development and the entrepreneurial ecosystem.',
        tags: ['Platform', 'Innovation', 'Burundi'],
        url: 'https://comlab-burundi.com'
      },
      {
        title: 'umugenziTech',
        description: 'Online learning platform that helps trainers and institutions build secure learning paths and issue verified certificates.',
        tags: ['E-learning', 'Certificates', 'Burundi'],
        url: 'http://www.umugenzitech.run.place/'
      },
      {
        title: 'Novaris',
        description: 'Education-oriented system designed to verify the authenticity of official academic documents and support learner inclusion.',
        tags: ['Education', 'Verification', 'Inclusion'],
        status: 'Government-protected site'
      },
      {
        title: 'RundiCheck',
        description: 'Attendance-control tool designed to strengthen traceability, compliance and trust in institutional or community processes.',
        tags: ['Control', 'Attendance', 'Trust'],
        status: 'In development'
      }
    ]
  },
  {
    title: 'Personal projects',
    items: [
      {
        title: 'PharmiGo',
        description: 'Platform connecting patients with pharmacies, AI-assisted prescription processing and local mobile payments.',
        tags: ['HealthTech', 'AI', 'Payments'],
        url: 'https://pharmigo.afrique'
      },
      {
        title: 'seasky-on-the-way',
        description: 'Real-time management ecosystem for milk sales, processing and redistribution agencies in Burundi.',
        tags: ['Logistics', 'Payments', 'Real-time'],
        url: 'https://seasky-on-the-way.vercel.app'
      },
      {
        title: 'EarnNova',
        description: 'Web3 and decentralized mining ecosystem based on the Ihela utility token, with wallet synchronization and secure verification.',
        tags: ['Web3', 'Ihela', 'Blockchain'],
        url: 'https://earnnova.jo3.org'
      },
      {
        title: 'PharmaSync',
        description: 'Pharmacy-oriented digital solution for managing pharmacies nationwide, organizing information, tracking flows and improving coordination between health actors.',
        tags: ['Management', 'Pharmacies', 'Health'],
        status: 'In development'
      },
      {
        title: 'ExpoCheck',
        description: 'Control and verification solution designed to make field operations, product registrations and real-time tracking more reliable.',
        tags: ['Scan', 'Verification', 'Real-time tracking'],
        status: 'In development'
      },
      {
        title: 'EduCongo',
        description: 'Education project built to support learning, academic organization and access to digital tools adapted to the Congolese context.',
        tags: ['Education', 'DRC', 'Digital'],
        status: 'In development'
      }
    ]
  }
];

const swProjectGroups: ProjectGroup[] = [
  {
    title: 'Kazi za kitaaluma - RundiNova',
    items: [
      {
        title: 'ComLab Burundi',
        description: 'Jukwaa la jamii na ubunifu wa teknolojia nchini Burundi, linalosaidia maendeleo ya ndani na mfumo wa wajasiriamali.',
        tags: ['Jukwaa', 'Ubunifu', 'Burundi'],
        url: 'https://comlab-burundi.com'
      },
      {
        title: 'umugenziTech',
        description: 'Jukwaa la elimu mtandaoni linalowezesha walimu na taasisi kuunda masomo salama na kutoa vyeti vilivyothibitishwa.',
        tags: ['E-learning', 'Vyeti', 'Burundi'],
        url: 'http://www.umugenzitech.run.place/'
      },
      {
        title: 'Novaris',
        description: 'Mfumo wa elimu unaosaidia kuthibitisha uhalali wa nyaraka rasmi za masomo na kuimarisha ujumuishaji wa wanafunzi.',
        tags: ['Elimu', 'Uthibitishaji', 'Ujumuishaji'],
        status: 'Tovuti inalindwa na serikali'
      },
      {
        title: 'RundiCheck',
        description: 'Chombo cha uthibitishaji kinachoongeza ufuatiliaji, uaminifu na uwazi katika michakato ya taasisi au jamii.',
        tags: ['Uthibitishaji', 'Ufuatiliaji', 'Uaminifu'],
        status: 'Inaendelezwa'
      }
    ]
  },
  {
    title: 'Miradi binafsi',
    items: [
      {
        title: 'PharmiGo',
        description: 'Jukwaa la HealthTech kwa usimamizi wa maduka ya dawa, uchakataji wa maagizo kwa msaada wa AI na malipo ya simu.',
        tags: ['HealthTech', 'AI', 'Malipo'],
        url: 'https://pharmigo.afrique'
      },
      {
        title: 'seasky-on-the-way',
        description: 'Mfumo wa muda halisi kwa mashirika ya kuuza, kuchakata na kusambaza maziwa nchini Burundi.',
        tags: ['Logistics', 'Malipo', 'Real-time'],
        url: 'https://seasky-on-the-way.vercel.app'
      },
      {
        title: 'EarnNova',
        description: 'Mfumo wa Web3 na mining uliogatuliwa unaotumia tokeni ya Ihela, usawazishaji wa wallets na uthibitishaji salama.',
        tags: ['Web3', 'Ihela', 'Blockchain'],
        url: 'https://earnnova.jo3.org'
      },
      {
        title: 'PharmaSync',
        description: 'Suluhisho la kidijitali kwa sekta ya dawa, likilenga usawazishaji wa taarifa, ufuatiliaji na uratibu wa huduma za afya.',
        tags: ['Dawa', 'Synchronization', 'Afya'],
        status: 'Inaendelezwa'
      },
      {
        title: 'ExpoCheck',
        description: 'Suluhisho la ukaguzi na uthibitishaji kwa shughuli za uwanjani, usajili na ushahidi wa ushiriki.',
        tags: ['Ukaguzi', 'Uthibitishaji', 'Uwanja'],
        status: 'Inaendelezwa'
      },
      {
        title: 'EduCongo',
        description: 'Mradi wa elimu unaosaidia masomo, mpangilio wa kitaaluma na matumizi ya zana za kidijitali kwa mazingira ya Kongo.',
        tags: ['Elimu', 'RDC', 'Digitali'],
        status: 'Inaendelezwa'
      }
    ]
  }
];

export const content: Record<Language, Content> = {
  fr: {
    nav: { about: 'Profil', experience: 'Parcours', skills: 'Compétences', projects: 'Projets', contact: 'Contact' },
    hero: {
      role: 'Responsable communauté et relations sociales chez RundiNova Tech - Développeur backend',
      headline: 'Mandela KASUMBA Fanuel',
      intro:
        'Je suis développeur web avec Django, Django REST Framework, React et Vite. Au sein de RundiNova Tech, j’occupe le poste de responsable communauté et relations sociales, tout en contribuant à la production technique comme développeur backend. Je suis passionné par la création de solutions concrètes aux problèmes courants, le travail en équipe et l’apprentissage progressif de la blockchain.',
      highlights: [
        'Django, DRF, React et Vite',
        'Solutions utiles aux problèmes quotidiens',
        'Équipe, progression continue et blockchain'
      ],
      ctaContact: 'Entrer en contact',
      ctaExperience: 'Explorer mon parcours'
    },
    identity: {
      title: 'Identité professionnelle',
      items: [
        { label: 'Nom complet', value: 'Mandela KASUMBA Fanuel' },
        { label: 'Résidence', value: 'Gitega, Burundi' },
        { label: 'Nationalité', value: 'Congolaise' },
        { label: 'Université', value: 'UPG, Génie Logiciel, Bac 3 validé' },
        { label: 'Profil', value: 'Développeur web, backend et relations communautaires' }
      ]
    },
    about: {
      title: 'Profil',
      paragraphs: [
        'Mon parcours relie le développement web, les relations sociales, l’éducation et la technologie. Je travaille avec Django et Django REST Framework côté backend, React et Vite côté frontend, avec une attention particulière portée à la clarté, à la fiabilité et à l’utilité des solutions.',
        'Chez RundiNova Tech, je participe aux relations communautaires et sociales, tout en intervenant sur la production technique comme développeur backend.',
        'J’ai étudié le Génie Logiciel à l’Université Polytechnique de Gitega. Le programme est prévu sur quatre ans ; j’ai validé le niveau Bac 3. La dernière année n’a pas été finalisée pour des raisons financières.'
      ]
    },
    stats: [
      { value: '2026', label: 'RundiNova Tech' },
      { value: 'Bac 3', label: 'Génie Logiciel UPG' },
      { value: '10', label: 'Projets réels cités' },
      { value: '5+', label: 'Langues maîtrisées' }
    ],
    experience: {
      title: 'Expériences et certifications',
      items: [
        {
          period: 'Avril 2026 - aujourd’hui',
          year: '2026',
          title: 'Responsable communauté, relations sociales et développeur backend',
          place: 'RundiNova Tech, Gitega',
          placeUrl: 'https://rundinova.com',
          description:
            'Relations sociales, suivi communautaire, coordination avec les bénéficiaires et contribution technique backend aux solutions de l’organisation.'
        },
        {
          period: 'Mars 2026',
          year: '2026',
          title: 'Certificat Code Club - Animation d’un club de programmation',
          place: 'Fondation Raspberry Pi / Code Club',
          description:
            'Formation réussie sur les compétences essentielles nécessaires pour animer un club de codage avec rigueur, pédagogie et accompagnement des apprenants.'
        },
        {
          period: '28 juin 2025',
          year: '2025',
          title: 'Atelier Blockchain',
          place: 'JuneTech Edition 5, KIT-Hub',
          description:
            'Participation aux ateliers blockchain, avec apprentissage collaboratif et partage de compétences autour des technologies émergentes.'
        },
        {
          period: '24 mai - 28 juin 2024',
          year: '2024',
          title: 'Workshops polytechniques JuneTech',
          place: 'Université Polytechnique de Gitega',
          description:
            'Formations en machine learning, IA, data science, cybersécurité, UX/UI design, blockchain et innovation technologique.'
        },
        {
          period: '2024',
          year: '2024',
          title: 'Formation Trezor Academy Burundi',
          place: 'Trezor Academy Burundi',
          description:
            'Formation réussie autour de la culture blockchain, des actifs numériques et des fondamentaux de la sécurité numérique.'
        },
        {
          period: '2021',
          year: '2021',
          title: 'Enseignant',
          place: 'Destiny School, Kamenge, Bujumbura',
          description:
            'Encadrement pédagogique, discipline de classe, transmission des connaissances et accompagnement des élèves.'
        },
        {
          period: '2020',
          year: '2020',
          title: 'Certificat d’apprentissage en conduite auto',
          place: 'Centre professionnel MAGAUTO de Maspatep',
          description: 'Formation pratique en conduite et discipline professionnelle.'
        },
        {
          period: '2014',
          year: '2014',
          title: 'Compétences à la vie et entrepreneuriat',
          place: 'Programme de formation certifiant',
          description: 'Renforcement de la communication, de la responsabilité personnelle et de l’esprit d’initiative.'
        },
        {
          period: '2013',
          year: '2013',
          title: 'Certification internationale en informatique',
          place: 'Centre ICDL de Muyinga',
          description: 'Windows, Word, Excel, Internet Explorer et Outlook.'
        },
        {
          period: '10 - 12 octobre 2011',
          year: '2011',
          title: 'Atelier d’art théâtral pour pairs éducateurs',
          place: 'RET Burundi, UNHCR, Association TUBIYAGE, Gasorwe',
          description:
            'Participation à une formation de pairs éducateurs sur l’art théâtral, dans le cadre du projet Éducation à la Paix pour les réfugiés congolais et la communauté hôte.'
        },
        {
          period: '10 - 12 octobre 2011',
          year: '2011',
          title: 'Éducation à la paix par le sport',
          place: 'RET Burundi, UNHCR, Organisation Sport Sans Frontières, Gasorwe',
          description:
            'Atelier de trois jours sur l’éducation à la paix à travers le sport, avec une approche communautaire destinée aux réfugiés congolais et aux communautés hôtes.'
        },
        {
          period: '3 - 5 octobre 2011',
          year: '2011',
          title: 'Éducation à la paix avec représentants religieux et comités locaux',
          place: 'RET Burundi, UNHCR, Gasorwe',
          description:
            'Formation sur l’éducation à la paix avec les représentants des confessions religieuses, les comités sectoriels et les chefs de quartiers.'
        },
        {
          period: '19 - 21 septembre 2011',
          year: '2011',
          title: 'Éducation à la paix auprès des leaders communautaires',
          place: 'RET Burundi, UNHCR, Gasorwe',
          description:
            'Atelier de formation sur l’éducation à la paix organisé à l’endroit des leaders de la communauté.'
        },
        {
          period: '18 - 23 et 25 - 28 juillet 2011',
          year: '2011',
          title: 'Formation des pairs éducateurs en éducation à la paix',
          place: 'RET Burundi, UNHCR, Bwagiriza, Musasa et Gasorwe',
          description:
            'Formation de dix jours comme pair éducateur sur l’éducation à la paix, dans le cadre d’un programme soutenu par le Haut Commissariat des Nations Unies pour les Réfugiés.'
        }
      ]
    },
    education: {
      title: 'Parcours académique',
      items: [
        {
          period: '2023/2024',
          year: '2024',
          title: 'Baccalauréat 3 en Génie Logiciel validé',
          place: 'Université Polytechnique de Gitega, Burundi',
          description:
            'Programme initial de quatre ans ; cursus validé jusqu’au Bac 3 .'
        },
        {
          period: '2011',
          year: '2011',
          title: 'Diplôme d’État en Chimie-Biologie',
          place: 'Institut du LAC TANGANYIKA, Kavimvira / Uvira - Sud-Kivu / RDCongo',
          description: 'Formation scientifique rigoureuse axée sur la logique, l’analyse et la résolution de problèmes.'
        },
        {
          period: '2004',
          year: '2004',
          title: 'Certificat de fin d’études primaires',
          place: 'Lubumbashi, RDC',
          description: 'Base académique initiale.'
        }
      ]
    },
    skills: {
      title: 'Compétences',
      groups: [
        { title: 'Backend', items: ['Django', 'Django REST Framework', 'API REST', 'Architecture applicative'] },
        { title: 'Frontend', items: ['React', 'Vite', 'TypeScript', 'Interfaces responsives', 'Tailwind CSS'] },
        { title: 'Temps réel et qualité', items: ['WebSockets', 'Synchronisation en temps réel', 'Pre-commit', 'Husky', 'CI/CD'] },
        { title: 'Concepts avancés', items: ['Offline-first', 'Service Workers', 'IndexedDB', 'Web3', 'Smart escrows', 'Blockchain en apprentissage continu'] }
      ]
    },
    languages: {
      title: 'Langues',
      items: ['Français : parlé et écrit très bien', 'Anglais : parlé et écrit très bien', 'Kiswahili : parlé et écrit très bien', 'Kirundi : parlé et écrit très bien', 'Kinyarwanda : parlé et écrit très bien', 'Autres dialectes congolais']
    },
    projects: {
      title: 'Projets réels',
      intro: 'Sélection de projets professionnels et personnels réels, y compris ceux déjà publiés et ceux encore en développement.',
      groups: frProjectGroups
    },
    contact: {
      title: 'Contact',
      text: 'Disponible pour des collaborations technologiques, communautaires et institutionnelles.',
      formNotice: 'Le formulaire de contact n’est pas encore fonctionnel. Pour le moment, utilisez les icônes de contact rapide.',
      email: 'mandela.fanuel.1@gmail.com',
      phone: '+25769096758',
      location: 'Gitega, Burundi'
    },
    footer: '© 2026 Mandela KASUMBA Fanuel. Tous droits réservés. Conçu avec rigueur et passion pour des solutions logicielles utiles en Afrique de l’Est et à l’international.'
  },
  en: {
    nav: { about: 'Profile', experience: 'Journey', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    hero: {
      role: 'Community and social relations manager at RundiNova Tech - Backend developer',
      headline: 'Mandela KASUMBA Fanuel',
      intro:
        'I am a web developer working with Django, Django REST Framework, React and Vite. At RundiNova Tech, I serve as community and social relations manager while also contributing to code as a backend developer. I am passionate about practical solutions, teamwork and progressive blockchain learning.',
      highlights: ['Django, DRF, React and Vite', 'Practical solutions for everyday problems', 'Teamwork, continuous growth and blockchain'],
      ctaContact: 'Get in touch',
      ctaExperience: 'Explore my journey'
    },
    identity: {
      title: 'Professional identity',
      items: [
        { label: 'Full name', value: 'Mandela KASUMBA Fanuel' },
        { label: 'Residence', value: 'Gitega, Burundi' },
        { label: 'Nationality', value: 'Congolese' },
        { label: 'University', value: 'UPG, Software Engineering, Bac 3 validated' },
        { label: 'Profile', value: 'Web developer, backend and community relations' }
      ]
    },
    about: {
      title: 'Profile',
      paragraphs: [
        'My path connects web development, social relations, education and technology. I work with Django and Django REST Framework for backend development, React and Vite for frontend interfaces.',
        'At RundiNova Tech, I support community and social relations while also contributing technically as a backend developer.',
        'I studied Software Engineering at the Polytechnic University of Gitega. The program is designed for four years; I validated Bac 3. The final year was not completed because of financial constraints.'
      ]
    },
    stats: [
      { value: '2026', label: 'RundiNova Tech' },
      { value: 'Bac 3', label: 'Software Engineering UPG' },
      { value: '10', label: 'Real projects cited' },
      { value: '5+', label: 'Languages' }
    ],
    experience: {
      title: 'Experience and certifications',
      items: [
        { period: 'April 2026 - present', year: '2026', title: 'Community relations manager and backend developer', place: 'RundiNova Tech, Gitega', placeUrl: 'https://rundinova.com', description: 'Social relations, community follow-up, beneficiary coordination and backend contribution.' },
        { period: 'March 2026', year: '2026', title: 'Code Club certificate - Leading a programming club', place: 'Raspberry Pi Foundation / Code Club', description: 'Successfully completed training in the essential skills required to lead a coding club with structure, pedagogy and learner support.' },
        { period: 'June 28, 2025', year: '2025', title: 'Blockchain workshop', place: 'JuneTech Edition 5, KIT-Hub', description: 'Blockchain workshop participation and collaborative learning around emerging technologies.' },
        { period: 'May 24 - June 28, 2024', year: '2024', title: 'JuneTech polytechnic workshops', place: 'Polytechnic University of Gitega', description: 'Machine learning, AI, data science, cybersecurity, UX/UI design, blockchain and innovation workshops.' },
        { period: '2024', year: '2024', title: 'Trezor Academy Burundi training', place: 'Trezor Academy Burundi', description: 'Training around blockchain culture, digital assets and digital-security fundamentals.' },
        { period: '2021', year: '2021', title: 'Teacher', place: 'Destiny School, Kamenge, Bujumbura', description: 'Teaching, classroom discipline and student support.' },
        { period: '2020', year: '2020', title: 'Professional driving training certificate', place: 'MAGAUTO Professional Training Center', description: 'Practical driving training and professional discipline.' },
        { period: '2014', year: '2014', title: 'Life skills and entrepreneurship', place: 'Certified training program', description: 'Communication, responsibility and initiative.' },
        { period: '2013', year: '2013', title: 'International computer certificate', place: 'ICDL Center, Muyinga', description: 'Windows, Word, Excel, Internet Explorer and Outlook.' },
        { period: 'October 10 - 12, 2011', year: '2011', title: 'Theatre arts workshop for peer educators', place: 'RET Burundi, UNHCR, TUBIYAGE Association, Gasorwe', description: 'Peer-educator training in theatre arts as part of the Peace Education project for Congolese refugees and the host community.' },
        { period: 'October 10 - 12, 2011', year: '2011', title: 'Peace education through sport', place: 'RET Burundi, UNHCR, Sport Sans Frontières Organization, Gasorwe', description: 'Three-day workshop on peace education through sport, with a community-based approach for Congolese refugees and host communities.' },
        { period: 'October 3 - 5, 2011', year: '2011', title: 'Peace education with religious representatives and local committees', place: 'RET Burundi, UNHCR, Gasorwe', description: 'Training in peace education with representatives of religious denominations, sector committees and neighborhood leaders.' },
        { period: 'September 19 - 21, 2011', year: '2011', title: 'Peace education for community leaders', place: 'RET Burundi, UNHCR, Gasorwe', description: 'Peace education training workshop organized for community leaders.' },
        { period: 'July 18 - 23 and 25 - 28, 2011', year: '2011', title: 'Peer educator training in peace education', place: 'RET Burundi, UNHCR, Bwagiriza, Musasa and Gasorwe', description: 'Ten-day peer educator training in peace education through a program supported by the United Nations High Commissioner for Refugees.' }
      ]
    },
    education: {
      title: 'Academic journey',
      items: [
        { period: '2023/2024', year: '2024', title: 'Bac 3 in Software Engineering validated', place: 'Polytechnic University of Gitega, Burundi', description: 'Four-year program validated up to Bac 3.' },
        { period: '2011', year: '2011', title: 'State Diploma in Chemistry and Biology', place: 'Institut du LAC TANGANYIKA, Kavimvira / Uvira - South Kivu / DR Congo', description: 'Rigorous scientific training focused on logic, analysis and problem-solving.' },
        { period: '2004', year: '2004', title: 'Primary school certificate', place: 'Lubumbashi, DRC', description: 'Initial academic foundation.' }
      ]
    },
    skills: {
      title: 'Skills',
      groups: [
        { title: 'Backend', items: ['Django', 'Django REST Framework', 'REST APIs', 'Application architecture'] },
        { title: 'Frontend', items: ['React', 'Vite', 'TypeScript', 'Responsive interfaces', 'Tailwind CSS'] },
        { title: 'Real-time and quality', items: ['WebSockets', 'Real-time synchronization', 'Pre-commit', 'Husky', 'CI/CD'] },
        { title: 'Advanced concepts', items: ['Offline-first', 'Service Workers', 'IndexedDB', 'Web3', 'Smart escrows', 'Blockchain in continuous learning'] }
      ]
    },
    languages: {
      title: 'Languages',
      items: ['French: very good spoken and written', 'English: very good spoken and written', 'Kiswahili: very good spoken and written', 'Kirundi: very good spoken and written', 'Kinyarwanda: very good spoken and written', 'Other Congolese dialects']
    },
    projects: { title: 'Real projects', intro: 'Professional and personal real projects, including published projects and projects still in development.', groups: enProjectGroups },
    contact: { title: 'Contact', text: 'Available for technology, community and institutional collaborations.', formNotice: 'The contact form is not functional yet. For now, please use the quick contact icons.', email: 'mandela.fanuel.1@gmail.com', phone: '+25769096758', location: 'Gitega, Burundi' },
    footer: '© 2026 Mandela KASUMBA Fanuel. All rights reserved. Crafted with precision and passion for useful software solutions in East Africa and international markets.'
  },
  sw: {
    nav: { about: 'Wasifu', experience: 'Safari', skills: 'Ujuzi', projects: 'Miradi', contact: 'Mawasiliano' },
    hero: {
      role: 'Msimamizi wa jamii RundiNova Tech - Backend developer',
      headline: 'Mandela KASUMBA Fanuel',
      intro:
        'Mimi ni developer wa web ninayetumia Django, DRF, React na Vite. Ndani ya RundiNova Tech, ninasimamia jamii na mahusiano ya kijamii, na pia nachangia upande wa code kama backend developer. Napenda kutengeneza suluhisho za matatizo ya kila siku, kazi ya pamoja na kujifunza blockchain hatua kwa hatua.',
      highlights: ['Django, DRF, React na Vite', 'Suluhisho za matatizo ya kila siku', 'Kazi ya pamoja na blockchain'],
      ctaContact: 'Wasiliana nami',
      ctaExperience: 'Angalia safari yangu'
    },
    identity: {
      title: 'Utambulisho wa kazi',
      items: [
        { label: 'Jina kamili', value: 'Mandela KASUMBA Fanuel' },
        { label: 'Makazi', value: 'Gitega, Burundi' },
        { label: 'Uraia', value: 'Mkongo' },
        { label: 'Chuo kikuu', value: 'UPG, Genie Logiciel, Bac 3 imekamilika' },
        { label: 'Wasifu', value: 'Web developer, backend na mahusiano ya jamii' }
      ]
    },
    about: {
      title: 'Wasifu',
      paragraphs: [
        'Safari yangu inaunganisha web development, mahusiano ya jamii, elimu na teknolojia. Natumia Django na DRF kwa backend, React na Vite kwa frontend.',
        'Katika RundiNova Tech, nashughulika na mahusiano ya jamii na pia nachangia kiufundi kama backend developer.',
        'Nilisoma Genie Logiciel katika Universite Polytechnique de Gitega. Programu ni ya miaka minne; nimekamilisha Bac 3. Mwaka wa mwisho haukukamilika kwa sababu za kifedha.'
      ]
    },
    stats: [
      { value: '2026', label: 'RundiNova Tech' },
      { value: 'Bac 3', label: 'Genie Logiciel UPG' },
      { value: '10', label: 'Miradi halisi iliyotajwa' },
      { value: '5+', label: 'Lugha' }
    ],
    experience: {
      title: 'Uzoefu na vyeti',
      items: [
        { period: 'Aprili 2026 - sasa', year: '2026', title: 'Msimamizi wa jamii na backend developer', place: 'RundiNova Tech, Gitega', placeUrl: 'https://rundinova.com', description: 'Mahusiano ya jamii, ufuatiliaji wa wanufaika na mchango wa backend.' },
        { period: 'Machi 2026', year: '2026', title: 'Cheti cha Code Club - kuongoza klabu ya programu', place: 'Raspberry Pi Foundation / Code Club', description: 'Mafunzo yaliyokamilika kuhusu ujuzi muhimu wa kuongoza klabu ya coding na kusaidia wanafunzi.' },
        { period: '28 Juni 2025', year: '2025', title: 'Warsha ya Blockchain', place: 'JuneTech Edition 5, KIT-Hub', description: 'Ushiriki katika warsha ya blockchain na kujifunza teknolojia mpya.' },
        { period: '24 Mei - 28 Juni 2024', year: '2024', title: 'Warsha za JuneTech', place: 'Universite Polytechnique de Gitega', description: 'Machine learning, AI, data science, cybersecurity, UX/UI, blockchain na innovation.' },
        { period: '2024', year: '2024', title: 'Mafunzo ya Trezor Academy Burundi', place: 'Trezor Academy Burundi', description: 'Mafunzo kuhusu blockchain, mali za kidijitali na usalama.' },
        { period: '2021', year: '2021', title: 'Mwalimu', place: 'Destiny School, Kamenge, Bujumbura', description: 'Kufundisha na kusaidia wanafunzi.' },
        { period: '2020', year: '2020', title: 'Cheti cha udereva', place: 'MAGAUTO', description: 'Mafunzo ya vitendo ya udereva.' },
        { period: '2014', year: '2014', title: 'Stadi za maisha na ujasiriamali', place: 'Programu ya mafunzo', description: 'Mawasiliano, uwajibikaji na hatua.' },
        { period: '2013', year: '2013', title: 'Cheti cha kompyuta', place: 'ICDL Muyinga', description: 'Windows, Word, Excel, Internet Explorer na Outlook.' },
        { period: '10 - 12 Oktoba 2011', year: '2011', title: 'Warsha ya sanaa ya maigizo kwa waelimishaji rika', place: 'RET Burundi, UNHCR, TUBIYAGE, Gasorwe', description: 'Mafunzo ya elimu ya amani kupitia sanaa ya maigizo kwa wakimbizi wa Kongo na jamii wenyeji.' },
        { period: '10 - 12 Oktoba 2011', year: '2011', title: 'Elimu ya amani kupitia michezo', place: 'RET Burundi, UNHCR, Sport Sans Frontières, Gasorwe', description: 'Warsha ya siku tatu kuhusu elimu ya amani kupitia michezo na kazi ya jamii.' },
        { period: '3 - 5 Oktoba 2011', year: '2011', title: 'Elimu ya amani na viongozi wa dini na kamati za mitaa', place: 'RET Burundi, UNHCR, Gasorwe', description: 'Mafunzo ya elimu ya amani kwa wawakilishi wa dini, kamati za sekta na viongozi wa vitongoji.' },
        { period: '19 - 21 Septemba 2011', year: '2011', title: 'Elimu ya amani kwa viongozi wa jamii', place: 'RET Burundi, UNHCR, Gasorwe', description: 'Warsha ya elimu ya amani iliyoandaliwa kwa viongozi wa jamii.' },
        { period: '18 - 23 na 25 - 28 Julai 2011', year: '2011', title: 'Mafunzo ya waelimishaji rika kuhusu elimu ya amani', place: 'RET Burundi, UNHCR, Bwagiriza, Musasa na Gasorwe', description: 'Mafunzo ya siku kumi kuhusu elimu ya amani kwa waelimishaji rika kwa msaada wa UNHCR.' }
      ]
    },
    education: {
      title: 'Elimu',
      items: [
        { period: '2023/2024', year: '2024', title: 'Bac 3 Genie Logiciel imekamilika', place: 'Universite Polytechnique de Gitega', description: 'Programu ya miaka minne imekamilika hadi Bac 3.' },
        { period: '2011', year: '2011', title: 'Diploma ya taifa katika Chimie-Biologie', place: 'Institut du LAC TANGANYIKA, Kavimvira / Uvira - Sud-Kivu / RDCongo', description: 'Mafunzo ya kisayansi yaliyolenga mantiki, uchambuzi na kutatua matatizo.' },
        { period: '2004', year: '2004', title: 'Cheti cha msingi', place: 'Lubumbashi, RDC', description: 'Msingi wa masomo.' }
      ]
    },
    skills: {
      title: 'Ujuzi',
      groups: [
        { title: 'Backend', items: ['Django', 'Django REST Framework', 'REST API', 'Architecture'] },
        { title: 'Frontend', items: ['React', 'Vite', 'TypeScript', 'Responsive UI', 'Tailwind CSS'] },
        { title: 'Real-time na quality', items: ['WebSockets', 'Real-time synchronization', 'Pre-commit', 'Husky', 'CI/CD'] },
        { title: 'Advanced concepts', items: ['Offline-first', 'Service Workers', 'IndexedDB', 'Web3', 'Smart escrows', 'Blockchain ninayojifunza kila wakati'] }
      ]
    },
    languages: {
      title: 'Lugha',
      items: ['Kifaransa: vizuri sana', 'Kiingereza: vizuri sana', 'Kiswahili: vizuri sana', 'Kirundi: vizuri sana', 'Kinyarwanda: vizuri sana', 'Lahaja nyingine za Kongo']
    },
    projects: { title: 'Miradi halisi', intro: 'Miradi halisi ya kazi na binafsi, ikijumuisha iliyochapishwa na inayoendelea kutengenezwa.', groups: swProjectGroups },
    contact: { title: 'Mawasiliano', text: 'Napatikana kwa ushirikiano wa teknolojia, jamii na taasisi.', formNotice: 'Fomu ya mawasiliano bado haifanyi kazi. Kwa sasa, tumia icons za mawasiliano ya haraka.', email: 'mandela.fanuel.1@gmail.com', phone: '+25769096758', location: 'Gitega, Burundi' },
    footer: '© 2026 Mandela KASUMBA Fanuel. Haki zote zimehifadhiwa. Imetengenezwa kwa umakini na ari kwa suluhisho za programu zenye manufaa.'
  }
};

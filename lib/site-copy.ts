import { Locale } from './types';

export const pageCopy = {
  en: {
    home: {
      marquee: 'Website · Wallet Loyalty · Bookings · Follow-Up',
      positioningEyebrow: 'Positioning with substance',
      positioningTitle: 'We build the operating layer behind a business that looks established.',
      positioningBody1: 'Websites, wallet loyalty, bookings, and follow-up should not feel like disconnected tools. We design them as one coherent system so your business is easier to trust, easier to contact, and easier to choose.',
      positioningBody2: 'The result is a cleaner experience for your clients and a calmer operation for your team.',
      aboutLink: 'About the studio',
      selectedEyebrow: 'Selected systems',
      selectedTitle: 'A few of the systems we build for ambitious businesses.',
      selectedBody: 'Each system is designed to reduce friction, improve trust, and make the next step feel obvious.',
      servicesMarquee: 'Services',
      servicesEyebrow: 'Core offers',
      servicesTitle: 'Built to feel coherent from first click to repeat booking.',
      servicesBody: 'Every service is framed around one business outcome: stronger visibility, faster response, smoother scheduling, better follow-up, or a fully connected client journey.',
      whyEyebrow: 'Why it works',
      whyTitle: 'We remove the digital weak points that quietly cost businesses revenue.',
      whyBody: 'Low retention, old websites, manual booking loops, and absent follow-up all create leakage. We tighten those points so your business feels more responsive, more credible, and easier to buy from.',
      metrics: ['Better first impression', 'Faster response time', 'Less admin drag'],
      faqEyebrow: 'Questions',
      faqTitle: 'Clarity before we build.',
      faqBody: 'A few practical answers on fit, integration, and where to begin. Short, clear, and easy to scan.',
      nextEyebrow: 'Next step',
      nextTitle: 'Ready to grow with more structure?',
      nextBody: 'Start with a strategy call. We will assess the gaps in your current setup and recommend the most commercially useful next move.',
      nextCta: 'Book a free strategy call',
      faqs: [
        ['How do we know which service to start with?', 'We start with the commercial bottleneck. For some businesses that is lack of retention. For others it is weak follow-up, poor booking flow, or a website that does not build trust. The strategy call is used to prioritise what will move revenue first.'],
        ['Can this work with our current systems?', 'Usually yes. We prefer integrating into the tools you already rely on where that makes sense. If something needs replacing, we explain why and keep the transition simple.'],
        ['Is this suitable for smaller businesses?', 'Yes. The whole point is to give smaller operators access to systems that usually feel reserved for larger companies. The setup is tailored to your stage rather than overloaded with unnecessary complexity.']
      ]
    },
    services: {
      heroEyebrow: 'Services', heroTitle: 'Built around clear business outcomes.', heroBody: 'Each service is framed to show what it improves, why it matters, and where it fits in the wider system.', marquee: 'Website · Wallet Loyalty · Bookings · CRM · Digital Systems', introEyebrow: 'How to read this', introTitle: 'Less noise. Better hierarchy. Faster understanding.', introBody: 'Each offer follows the same editorial structure so a prospect can scan it in seconds without guessing what is actually being delivered.', introList: ['What the service is', 'Why a business buys it', 'What sits inside the offer', 'What result to expect'], whyChoose: 'Why clients choose this', included: 'Included', outcome: 'Expected outcome', cta: 'Book a strategy call', nextService: 'Next service', discuss: 'Discuss the full scope', endEyebrow: 'Unsure where to begin', endTitle: 'We can map the right first move with you.', endBody: 'If you are deciding between calls, bookings, CRM, or a full build, start with the strategy call. We will identify the highest-value bottleneck before recommending anything.', endCta: 'Book a free strategy call'
    },
    pricing: {
      heroEyebrow: 'Investment', heroTitle: 'Pricing', heroBody: 'Premium systems for businesses that want a stronger first impression, faster response, and a more valuable client journey. All prices in AUD.', panelLabel: 'What this page is designed to show', panelPoints: ['Clear scope and published pricing', 'Premium build quality without agency bloat', 'Systems designed to work together, not in silos'], panelNote: 'Choose between a lower-entry monthly model or a one-time implementation. Either way, the emphasis stays on clarity, polish, and commercial usefulness.', chooseEyebrow: 'Choose your structure', chooseTitle: 'Built to feel premium before the work even begins.', chooseBody: 'Clear pricing, calm presentation, and a structure that makes it easy to compare the right level of support.', monthly: 'Monthly support model', onetime: 'One-time implementation', servicesLabel: 'Individual services', servicesMeta: 'For teams starting with one high-impact bottleneck first.', guidanceTitle: 'Not sure which structure fits your business?', guidanceBody: 'We will tell you what is worth doing first, what can wait, and whether a monthly or one-time setup makes more sense commercially.', guidanceCta: 'Book a free strategy call', faqEyebrow: 'Common questions', faqTitle: 'Clear answers before you commit.', faqBody: 'The pricing is designed to be transparent, but the decision still matters. These are the questions most businesses ask before choosing a model.', nextEyebrow: 'Next step', nextTitle: 'Want a clearer recommendation than a generic quote?', nextBody: 'Book the strategy call and we will tell you where the commercial leverage is, which service to prioritise, and which pricing structure fits your stage best.', nextCta: 'Book a free strategy call'
    },
    about: {
      heroEyebrow: 'About', heroTitle: 'A digital studio for businesses that deserve better systems.', heroBody: 'Built for businesses that need a cleaner presence, stronger trust, and a system that supports growth without adding noise.', standsEyebrow: 'What the studio stands for', standsTitle: 'Good businesses should not look disorganised online.', body1: 'TO BE SEEN builds the systems that sit between reputation and revenue: the website, the response layer, the booking flow, and the follow-up rhythm.', body2: 'We care about premium presentation because it shapes trust. We care about automation because it protects time. The strongest setup does both.', cta: 'See the service model', howEyebrow: 'How we work', stackEyebrow: 'Platform stack', stackTitle: 'Built on proven tools, arranged with intent.', startEyebrow: 'Start here', startTitle: 'If the business is strong, the digital layer should feel equally considered.', startBody: 'We can assess where the current experience is leaking trust or losing efficiency, then recommend the clearest next move.', startCta: 'Book a strategy call'
    },
    contact: {
      heroEyebrow: 'Contact', heroTitle: 'A calmer, more premium way to start the conversation.', heroBody: 'Start with a short conversation. We will review the current setup, identify the main point of friction, and recommend the clearest next move.', marquee: 'Strategy Call · Project Scope · Business Systems', beforeEyebrow: 'Before we speak', beforeTitle: 'Tell us where the current setup is slowing the business down.', beforeBody: 'That might be missed calls, inconsistent bookings, weak follow-up, an outdated website, or the need for a full digital reset. We will use that context to guide the call.', detailsTitle: 'Business details', expectTitle: 'What to expect', sentEyebrow: 'Message received', sentTitle: 'We will be in touch shortly.', sentBody: 'A response should reach you within 24 hours to arrange the next conversation.', labels: { name: 'Your name', email: 'Email address', business: 'Business name', service: 'Service of interest', message: 'Brief project context' }, placeholders: { name: 'Sarah Martin', email: 'hello@yourbusiness.com', business: 'Your Business', message: 'Tell us what currently feels inefficient, unclear, or underperforming in the business.' }, select: 'Select a service', options: ['Website Creation', 'Wallet-First Loyalty', 'Automated Bookings', 'Client Follow-Up CRM', 'Full Digitalisation Bundle', 'Not sure yet'], send: 'Send enquiry', sending: 'Sending...'
    },
    results: {
      heroEyebrow: 'Results', heroTitle: 'Clearer systems. Better outcomes.', heroBody: 'The work is designed to make a business feel easier to trust, easier to choose, and easier to run.', marquee: 'Credibility · Retention · Conversion · Clarity', featureEyebrow: 'Featured shift', nextEyebrow: 'Next move', nextTitle: 'Ready to build something more structured?', nextBody: 'Start with a strategy call and we will map the clearest first move for the business.', nextCta: 'Book a strategy call'
    }
  },
  fr: {
    home: {
      marquee: 'Site web · Fidélité Wallet · Réservations · Suivi client',
      positioningEyebrow: 'Positionnement',
      positioningTitle: 'Nous concevons le système digital derrière une entreprise qui doit paraître plus établie.',
      positioningBody1: 'Le site, la fidélité Wallet, les réservations et le suivi ne doivent pas ressembler à des outils séparés. Nous les pensons comme un seul système cohérent, plus simple à comprendre, à contacter et à choisir.',
      positioningBody2: 'Le résultat : une expérience plus claire pour vos clients et une organisation plus sereine pour votre équipe.',
      aboutLink: 'Découvrir le studio',
      selectedEyebrow: 'Systèmes choisis',
      selectedTitle: 'Quelques systèmes conçus pour des entreprises ambitieuses.',
      selectedBody: 'Chaque système est pensé pour réduire les frictions, renforcer la confiance et rendre l’étape suivante évidente.',
      servicesMarquee: 'Services',
      servicesEyebrow: 'Offres principales',
      servicesTitle: 'Conçu pour rester cohérent du premier clic à la réservation suivante.',
      servicesBody: 'Chaque service répond à un objectif clair : meilleure visibilité, réponse plus rapide, réservation plus fluide, meilleur suivi ou parcours client entièrement connecté.',
      whyEyebrow: 'Pourquoi ça fonctionne',
      whyTitle: 'Nous corrigeons les faiblesses digitales qui coûtent discrètement du chiffre.',
      whyBody: 'Faible rétention, site dépassé, réservations manuelles ou absence de suivi créent des pertes. Nous structurons ces points pour rendre votre activité plus crédible, plus fluide et plus simple à choisir.',
      metrics: ['Meilleure première impression', 'Réponse plus rapide', 'Moins de charge admin'],
      faqEyebrow: 'Questions',
      faqTitle: 'De la clarté avant de construire.',
      faqBody: 'Quelques réponses utiles sur l’adéquation, l’intégration et le bon point de départ. Court, clair, facile à parcourir.',
      nextEyebrow: 'Prochaine étape',
      nextTitle: 'Prêt à structurer la croissance ?',
      nextBody: 'Commencez par un appel stratégique. Nous identifions les points faibles du système actuel et le prochain mouvement le plus pertinent.',
      nextCta: 'Réserver un appel stratégique',
      faqs: [
        ['Comment savoir par quel service commencer ?', 'Nous partons du point de friction commercial principal. Pour certaines entreprises, c’est la rétention. Pour d’autres, le suivi, la réservation ou un site qui ne crée pas assez de confiance. L’appel stratégique sert à prioriser ce qui aura le plus d’impact.'],
        ['Est-ce compatible avec nos outils actuels ?', 'Oui, dans la plupart des cas. Nous préférons intégrer le système à vos outils existants quand cela a du sens. Si un remplacement est utile, nous expliquons pourquoi et gardons la transition simple.'],
        ['Est-ce adapté aux petites structures ?', 'Oui. L’idée est justement d’apporter à des structures plus petites un niveau de système souvent réservé à des entreprises plus installées, sans complexité inutile.']
      ]
    },
    services: {
      heroEyebrow: 'Services', heroTitle: 'Pensés autour de résultats business clairs.', heroBody: 'Chaque service est présenté pour montrer ce qu’il améliore, pourquoi il compte et comment il s’intègre dans le système global.', marquee: 'Site web · Fidélité Wallet · Réservations · CRM · Systèmes digitaux', introEyebrow: 'Comment lire cette page', introTitle: 'Moins de bruit. Meilleure hiérarchie. Compréhension plus rapide.', introBody: 'Chaque offre suit la même structure pour qu’un prospect puisse la comprendre en quelques secondes, sans ambiguïté.', introList: ['Ce que fait le service', 'Pourquoi une entreprise l’achète', 'Ce que l’offre contient', 'Le résultat attendu'], whyChoose: 'Pourquoi ce service est choisi', included: 'Inclus', outcome: 'Résultat attendu', cta: 'Réserver un appel stratégique', nextService: 'Service suivant', discuss: 'Discuter du périmètre complet', endEyebrow: 'Vous hésitez sur le point de départ', endTitle: 'Nous pouvons définir le bon premier mouvement avec vous.', endBody: 'Si vous hésitez entre appels, réservations, CRM ou refonte complète, commencez par l’appel stratégique. Nous identifierons le levier le plus rentable avant de recommander quoi que ce soit.', endCta: 'Réserver un appel gratuit'
    },
    pricing: {
      heroEyebrow: 'Tarifs', heroTitle: 'Tarifs', heroBody: 'Des systèmes premium pour les entreprises qui veulent une meilleure première impression, une réponse plus rapide et un parcours client plus rentable. Tous les prix sont affichés en AUD.', panelLabel: 'Ce que cette page doit montrer', panelPoints: ['Périmètre clair et tarifs publiés', 'Qualité premium sans lourdeur d’agence', 'Des systèmes conçus pour fonctionner ensemble'], panelNote: 'Choisissez entre un modèle mensuel plus souple ou une mise en place ponctuelle. Dans les deux cas, l’objectif reste la clarté, le niveau perçu et l’utilité commerciale.', chooseEyebrow: 'Choisissez votre structure', chooseTitle: 'Pensé pour paraître premium avant même le début du projet.', chooseBody: 'Une tarification claire, une présentation calme et une structure simple à comparer.', monthly: 'Modèle mensuel', onetime: 'Mise en place ponctuelle', servicesLabel: 'Services individuels', servicesMeta: 'Pour les équipes qui veulent commencer par un seul point de friction à fort impact.', guidanceTitle: 'Vous ne savez pas quelle structure est la plus adaptée ?', guidanceBody: 'Nous vous dirons ce qui vaut la peine d’être fait maintenant, ce qui peut attendre, et si un format mensuel ou ponctuel est le plus pertinent commercialement.', guidanceCta: 'Réserver un appel gratuit', faqEyebrow: 'Questions fréquentes', faqTitle: 'Des réponses claires avant de vous engager.', faqBody: 'La tarification est pensée pour être transparente, mais le choix reste important. Voici les questions les plus fréquentes avant de sélectionner un modèle.', nextEyebrow: 'Prochaine étape', nextTitle: 'Vous voulez une recommandation plus utile qu’un devis générique ?', nextBody: 'Réservez l’appel stratégique et nous vous dirons où se trouve le vrai levier commercial, quel service prioriser et quelle structure tarifaire correspond le mieux à votre stade.', nextCta: 'Réserver un appel gratuit'
    },
    about: {
      heroEyebrow: 'À propos', heroTitle: 'Un studio digital pour les entreprises qui méritent de meilleurs systèmes.', heroBody: 'Conçu pour les entreprises qui ont besoin d’une présence plus nette, d’un niveau de confiance plus fort et d’un système qui soutient la croissance sans ajouter de bruit.', standsEyebrow: 'Ce que défend le studio', standsTitle: 'Une bonne entreprise ne devrait pas paraître désorganisée en ligne.', body1: 'TO BE SEEN conçoit les systèmes placés entre réputation et revenu : le site, la couche de réponse, le parcours de réservation et le rythme de suivi.', body2: 'Nous attachons de l’importance à la présentation parce qu’elle influence la confiance. Nous attachons de l’importance à l’automatisation parce qu’elle protège le temps. Le meilleur système fait les deux.', cta: 'Voir le modèle de service', howEyebrow: 'Notre manière de travailler', stackEyebrow: 'Outils', stackTitle: 'Construit sur des outils éprouvés, organisés avec intention.', startEyebrow: 'Commencer ici', startTitle: 'Si l’activité est solide, sa couche digitale doit l’être aussi.', startBody: 'Nous pouvons identifier les zones où l’expérience actuelle perd en confiance ou en efficacité, puis recommander le mouvement le plus clair.', startCta: 'Réserver un appel stratégique'
    },
    contact: {
      heroEyebrow: 'Contact', heroTitle: 'Une manière plus calme et plus premium de démarrer la conversation.', heroBody: 'Commencez par un échange court. Nous passons en revue le système actuel, identifions le principal point de friction et recommandons le mouvement le plus clair.', marquee: 'Appel stratégique · Périmètre projet · Systèmes métier', beforeEyebrow: 'Avant l’échange', beforeTitle: 'Expliquez-nous ce qui ralentit aujourd’hui l’activité.', beforeBody: 'Cela peut être des appels manqués, des réservations incohérentes, un suivi faible, un site daté ou le besoin d’une remise à plat digitale. Nous utiliserons ce contexte pour guider l’échange.', detailsTitle: 'Informations', expectTitle: 'À quoi vous attendre', sentEyebrow: 'Message reçu', sentTitle: 'Nous revenons vers vous rapidement.', sentBody: 'Une réponse devrait vous parvenir sous 24 heures pour organiser la suite.', labels: { name: 'Votre nom', email: 'Adresse courriel', business: 'Nom de l’entreprise', service: 'Service recherché', message: 'Contexte du projet' }, placeholders: { name: 'Sarah Martin', email: 'contact@votreentreprise.fr', business: 'Votre entreprise', message: 'Expliquez ce qui vous semble aujourd’hui inefficace, flou ou sous-performant dans l’activité.' }, select: 'Choisir un service', options: ['Création de site', 'Fidélité Wallet', 'Réservations automatisées', 'CRM de suivi client', 'Digitalisation complète', 'Je ne sais pas encore'], send: 'Envoyer la demande', sending: 'Envoi...'
    },
    results: {
      heroEyebrow: 'Résultats', heroTitle: 'Des systèmes plus clairs. De meilleurs effets.', heroBody: 'Le travail est pensé pour rendre une entreprise plus crédible, plus simple à choisir et plus simple à piloter.', marquee: 'Crédibilité · Rétention · Conversion · Clarté', featureEyebrow: 'Évolution clé', nextEyebrow: 'Prochaine étape', nextTitle: 'Prêt à construire quelque chose de plus structuré ?', nextBody: 'Commencez par un appel stratégique et nous définirons le premier mouvement le plus pertinent pour l’activité.', nextCta: 'Réserver un appel stratégique'
    }
  }
} as const;

export function getCopy(locale: Locale) {
  return pageCopy[locale];
}

export const deskOrbitConfig = {
  appStoreId: '6798378728',
  appStoreUrl: 'https://apps.apple.com/app/id6798378728',
  appStoreAvailable: false,
  bundleId: 'com.seofood.DeskOrbit',
  contact: 'hello@typewhisper.com',
  accent: '#0078D7',
  copyright: '© 2026 Marco Hillger',
  owner: 'Marco Hillger',
} as const

export type DeskOrbitLanguage = 'de' | 'en' | 'fr' | 'es' | 'it'
export type DeskOrbitPage = 'product' | 'privacy'

export const deskOrbitLanguages: Array<{
  code: DeskOrbitLanguage
  label: string
  locale: string
}> = [
  { code: 'de', label: 'DE', locale: 'de-DE' },
  { code: 'en', label: 'EN', locale: 'en-US' },
  { code: 'fr', label: 'FR', locale: 'fr-FR' },
  { code: 'es', label: 'ES', locale: 'es-ES' },
  { code: 'it', label: 'IT', locale: 'it-IT' },
]

export function isDeskOrbitLanguage(value: unknown): value is DeskOrbitLanguage {
  return typeof value === 'string' && deskOrbitLanguages.some(language => language.code === value)
}

export function deskOrbitPath(language: DeskOrbitLanguage, page: DeskOrbitPage = 'product') {
  const prefix = language === 'de' ? '/deskorbit' : `/deskorbit/${language}`
  return page === 'privacy' ? `${prefix}/privacy` : prefix
}

type Feature = {
  icon: string
  title: string
  text: string
}

type SupportItem = {
  title: string
  paragraphs: string[]
}

type ProductCopy = {
  meta: { title: string; description: string }
  nav: { features: string; pricing: string; support: string; privacy: string }
  languageLabel: string
  skipLabel: string
  homeLabel: string
  hero: {
    eyebrow: string
    title: string
    lead: string
    comingSoon: string
    supportCta: string
    availability: string
    devices: string
    imageAlt: { mac: string; iphone: string; ipad: string; watch: string }
  }
  proof: string[]
  control: {
    eyebrow: string
    title: string
    text: string
    liveLabel: string
    liveValue: string
    status: string
    down: string
    up: string
    stop: string
    positions: string[]
  }
  features: { eyebrow: string; title: string; intro: string; items: Feature[] }
  safety: { eyebrow: string; title: string; intro: string; points: string[]; note: string }
  pricing: {
    eyebrow: string
    title: string
    intro: string
    free: { name: string; price: string; items: string[] }
    pro: { name: string; price: string; badge: string; items: string[] }
    rows: Array<{ feature: string; free: string; pro: string }>
    featureLabel: string
    note: string
    family: string
  }
  privacy: { eyebrow: string; title: string; text: string; points: string[]; link: string }
  support: { eyebrow: string; title: string; intro: string; items: SupportItem[]; contactTitle: string; contactText: string; contactCta: string }
  compatibility: { title: string; text: string; platforms: string[]; independence: string }
  footer: { product: string; privacy: string; support: string; legal: string }
}

type PrivacyCopy = {
  meta: { title: string; description: string }
  languageLabel: string
  skipLabel: string
  back: string
  eyebrow: string
  title: string
  intro: string
  updated: string
  sections: Array<{ title: string; paragraphs: string[] }>
  contactTitle: string
  contactText: string
  contactCta: string
  footer: { product: string; privacy: string; support: string; legal: string }
}

export const deskOrbitProductCopy: Record<DeskOrbitLanguage, ProductCopy> = {
  de: {
    meta: {
      title: 'DeskOrbit – Smarte Schreibtischsteuerung für Apple-Geräte',
      description: 'DeskOrbit steuert kompatible elektrische Sitz-Steh-Tische sicher von Mac, iPhone, iPad und Apple Watch. Demnächst im App Store.',
    },
    nav: { features: 'Funktionen', pricing: 'Free & Pro', support: 'Support', privacy: 'Datenschutz' },
    languageLabel: 'Sprache wählen',
    skipLabel: 'Zum Inhalt springen',
    homeLabel: 'Zur hillger.net Startseite',
    hero: {
      eyebrow: 'Smarte Schreibtischsteuerung',
      title: 'Dein Tisch. Auf all deinen Apple-Geräten.',
      lead: 'Aktuelle Höhe, sichere Bewegung und die richtige Position für jeden Teil deines Tages. DeskOrbit verbindet kompatible elektrische Sitz-Steh-Tische mit Mac, iPhone, iPad und Apple Watch.',
      comingSoon: 'Demnächst im App Store',
      supportCta: 'Support ansehen',
      availability: 'Kostenloser Download geplant · Pro Lifetime ohne Abo',
      devices: 'Für iPhone, iPad, Mac und Apple Watch',
      imageAlt: {
        mac: 'DeskOrbit-Steuerung auf dem Mac',
        iphone: 'DeskOrbit-Steuerung auf dem iPhone',
        ipad: 'DeskOrbit-Steuerung auf dem iPad',
        watch: 'DeskOrbit-Steuerung auf der Apple Watch',
      },
    },
    proof: ['Keine Werbung', 'Kein DeskOrbit-Konto', 'Kein Tracking', 'Optionaler iCloud-Sync'],
    control: {
      eyebrow: 'Aktuelle Höhe und Stop immer im Blick',
      title: 'Direkte Kontrolle, ohne die Sicherheit abzugeben.',
      text: 'Halte Hoch oder Runter, um den Tisch manuell zu bewegen. Sobald du loslässt, stoppt er. Benannte Positionen und die intelligente Aktion bringen den Tisch kontrolliert zum gewünschten Ziel.',
      liveLabel: 'Aktuelle Höhe',
      liveValue: '72,0 cm',
      status: 'Verbunden',
      down: 'Runter',
      up: 'Hoch',
      stop: 'Stop',
      positions: ['Sitzen · 72,0 cm', 'Stehen · 110,0 cm', 'Fokus · 101,0 cm'],
    },
    features: {
      eyebrow: 'Ein System, viele Oberflächen',
      title: 'Nah dran, egal wo du gerade arbeitest.',
      intro: 'DeskOrbit nutzt die Apple-Geräte und Systemfunktionen, die bereits zu deinem Alltag gehören.',
      items: [
        { icon: 'heroicons:adjustments-vertical', title: 'Positionen und intelligente Aktion', text: 'Benenne Sitz-, Steh- und weitere Höhen. Die intelligente Aktion wählt passend zur aktuellen Höhe Sitzen oder Stehen und stoppt zuerst eine laufende Bewegung.' },
        { icon: 'heroicons:clock', title: 'Optionale Automationen', text: 'Erinnere dich an den Wechsel oder nutze auf dem aktiven Mac eine sichere Automatik mit Vorlauf. iOS startet aus dem suspendierten Hintergrund niemals eine unbeaufsichtigte Bewegung.' },
        { icon: 'heroicons:squares-2x2', title: 'Widgets und Live Activities', text: 'Sieh Status und Höhe auf einen Blick. Nutze kontextabhängige Aktionen in Widgets, Live Activities und unterstützten Systemoberflächen.' },
        { icon: 'heroicons:command-line', title: 'Siri, Kurzbefehle und Aktionstaste', text: 'Starte intelligente Aktionen, Sitz-, Steh- oder benannte Positionen und Stop über App Intents. Manuelles Hoch und Runter bleibt bewusst einer gehaltenen Bedienung vorbehalten.' },
        { icon: 'heroicons:computer-desktop', title: 'Mac-Menüleiste und globale Hotkeys', text: 'Steuere den aktiven Tisch aus der Menüleiste und belege konfigurierbare globale Tastenkürzel für intelligente Aktionen, Positionen oder Stop.' },
        { icon: 'heroicons:device-phone-mobile', title: 'Apple Watch', text: 'Steuere Smart, Stop und Positionen über ein erreichbares iPhone oder nach lokaler Kopplung direkt von der Watch. Die Verbindung wird nur bei Bedarf aufgebaut.' },
      ],
    },
    safety: {
      eyebrow: 'Sicherheit ist Teil der Steuerung',
      title: 'Jede Bewegung hat ein klares Ende.',
      intro: 'DeskOrbit behandelt Tischbewegung als physischen Vorgang, nicht als beiläufige Hintergrundaktion.',
      points: [
        'Manuelle Bewegung läuft nur, solange Hoch oder Runter gehalten wird. Loslassen sendet Stop.',
        'Zielbewegungen enden am Ziel, bei Verbindungsverlust, Blockade oder spätestens nach 45 Sekunden.',
        'Ein sichtbarer Stop bleibt während einer Verbindung oder laufenden Bewegung erreichbar.',
        'DeskOrbit übernimmt keine Bluetooth-Verbindung, die bereits von einem anderen Gerät verwendet wird.',
        'Bluetooth-Zuordnungen bleiben lokal auf jedem Apple-Gerät und werden nicht synchronisiert.',
        'iOS-Automationen im Hintergrund erinnern nur. Ein suspendierter Prozess startet keine unbeaufsichtigte Bewegung.',
      ],
      note: 'Lasse einen fahrenden Tisch nie unbeaufsichtigt.',
    },
    pricing: {
      eyebrow: 'Einfaches Produktmodell',
      title: 'Kostenlos anfangen. Pro einmal kaufen.',
      intro: 'DeskOrbit ist als kostenloser Download geplant. Du kannst die Kernsteuerung dauerhaft kostenlos nutzen und alle Pro-Funktionen einmalig 14 Tage testen.',
      free: { name: 'Free', price: '0 €', items: ['Ein Tisch', 'Zwei benannte Positionen', 'Aktuelle Höhe, gehaltene Steuerung und Stop'] },
      pro: { name: 'DeskOrbit Pro Lifetime', price: '14,99 €*', badge: 'Einmaliger Kauf · kein Abo', items: ['Unbegrenzt viele Tische und Positionen', 'Automationen und intelligente Aktion', 'iCloud-Sync, Widgets, Systemaktionen und globale Mac-Hotkeys'] },
      featureLabel: 'Funktion',
      rows: [
        { feature: 'Tische', free: '1', pro: 'Unbegrenzt' },
        { feature: 'Benannte Positionen', free: '2', pro: 'Unbegrenzt' },
        { feature: 'Manuelle Steuerung und Stop', free: 'Enthalten', pro: 'Enthalten' },
        { feature: 'Intelligente Aktion und Automationen', free: '–', pro: 'Enthalten' },
        { feature: 'Optionaler iCloud-Sync', free: '–', pro: 'Enthalten' },
        { feature: 'Widgets, Live Activities und Systemaktionen', free: '–', pro: 'Enthalten' },
        { feature: 'Globale Hotkeys auf dem Mac', free: '–', pro: 'Enthalten' },
      ],
      note: '* Geplanter deutscher Basispreis. Preise in anderen Regionen werden vom App Store festgelegt.',
      family: 'Zum Start ist keine Familienfreigabe vorgesehen. Der Lifetime-Kauf ist ein nicht verbrauchbarer Kauf für denselben Apple Account.',
    },
    privacy: {
      eyebrow: 'Privat by design',
      title: 'Deine Tischdaten bleiben deine Daten.',
      text: 'DeskOrbit benötigt kein eigenes Konto, betreibt keinen Produktserver und enthält keine Werbung, keine Drittanbieter-Analytics und kein Tracking.',
      points: ['Lokale Daten bleiben auf dem Gerät.', 'Optionaler Sync nutzt deine private CloudKit-Datenbank.', 'Bluetooth-IDs werden niemals synchronisiert.', 'Käufe und Wiederherstellungen verarbeitet Apple über StoreKit.'],
      link: 'Vollständige Datenschutzerklärung',
    },
    support: {
      eyebrow: 'Support und FAQ',
      title: 'Hilfe beim Verbinden, Bewegen und Wiederherstellen.',
      intro: 'Diese Seite ist zugleich die offizielle Supportseite für DeskOrbit.',
      items: [
        { title: 'Wie verbinde ich einen Tisch?', paragraphs: ['Halte die Bluetooth-Taste am Sender des Tisches gedrückt, bis dessen Anzeige den Kopplungsmodus zeigt. Öffne DeskOrbit, wähle „Tisch verbinden“, erlaube den Bluetooth-Zugriff im Apple-Systemdialog und wähle den gefundenen Tisch. Die Bluetooth-Erlaubnis kann nicht automatisch erteilt werden.', 'Erscheint kein Tisch, prüfe, ob bereits ein anderes Telefon, Tablet, ein Mac oder eine Watch verbunden ist. Viele Tische akzeptieren nur eine Bluetooth-Zentrale. DeskOrbit übernimmt keine bestehende Verbindung gewaltsam.'] },
        { title: 'Wie funktioniert sichere Bewegung?', paragraphs: ['Halte Hoch oder Runter für eine manuelle Bewegung und lasse zum Stoppen los. Der rote Stop-Button ist immer verfügbar. Eine Positionsfahrt endet am Ziel, bei Verbindungsverlust, einem Stall oder nach 45 Sekunden. Lasse einen fahrenden Tisch nie unbeaufsichtigt.'] },
        { title: 'Wie funktionieren Pro, Test und Wiederherstellung?', paragraphs: ['Kostenlos sind ein Tisch und zwei Positionen enthalten. Der einmalige 14-Tage-Test schaltet alle Pro-Funktionen frei. Lifetime ist ein nicht verbrauchbarer Kauf für denselben Apple Account. Nutze „Käufe wiederherstellen“ in den Einstellungen nur, wenn DeskOrbit Apple ausdrücklich synchronisieren soll. Eine Rückstufung löscht niemals gespeicherte Daten.'] },
        { title: 'Was wird mit iCloud und der Apple Watch geteilt?', paragraphs: ['iCloud-Sync ist optional und während Pro oder Test verfügbar. Tischprofile, Positionen und Automationen werden synchronisiert; Bluetooth-Zuordnungen bleiben lokal auf jedem Gerät. Die Watch sendet Befehle normalerweise über ein erreichbares iPhone. Ohne Telefon wird die Watch einmal mit dem Tisch gekoppelt und verbindet sich anschließend nur bei Bedarf.'] },
      ],
      contactTitle: 'Noch eine Frage?',
      contactText: 'Schreibe direkt an Marco Hillger. Supportnachrichten sind freiwillig und werden nur zur Bearbeitung deiner Anfrage verwendet.',
      contactCta: 'hello@typewhisper.com',
    },
    compatibility: {
      title: 'Kompatibilität',
      text: 'DeskOrbit ist für kompatible elektrische Sitz-Steh-Tische mit Bluetooth-Steuerung vorgesehen. Konkrete Hersteller oder Modelle werden erst nach belastbarer Prüfung zugesagt.',
      platforms: ['iPhone und iPad ab iOS/iPadOS 18', 'Mac ab macOS 14', 'Apple Watch ab watchOS 11'],
      independence: 'DeskOrbit ist unabhängige Software und mit keinem Tischhersteller verbunden.',
    },
    footer: { product: 'Produkt', privacy: 'Datenschutz', support: 'Support', legal: 'Anbieter und Rechteinhaber' },
  },
  en: {
    meta: {
      title: 'DeskOrbit – Smart standing desk control for Apple devices',
      description: 'DeskOrbit safely controls compatible electric sit-stand desks from Mac, iPhone, iPad and Apple Watch. Coming soon to the App Store.',
    },
    nav: { features: 'Features', pricing: 'Free & Pro', support: 'Support', privacy: 'Privacy' },
    languageLabel: 'Choose language',
    skipLabel: 'Skip to content',
    homeLabel: 'Go to the hillger.net home page',
    hero: {
      eyebrow: 'Smart standing desk control',
      title: 'Your desk. Across all your Apple devices.',
      lead: 'Live height, safe movement and the right position for every part of your day. DeskOrbit connects compatible electric sit-stand desks with Mac, iPhone, iPad and Apple Watch.',
      comingSoon: 'Coming soon to the App Store',
      supportCta: 'View support',
      availability: 'Free download planned · Pro Lifetime with no subscription',
      devices: 'For iPhone, iPad, Mac and Apple Watch',
      imageAlt: { mac: 'DeskOrbit controls on Mac', iphone: 'DeskOrbit controls on iPhone', ipad: 'DeskOrbit controls on iPad', watch: 'DeskOrbit controls on Apple Watch' },
    },
    proof: ['No advertising', 'No DeskOrbit account', 'No tracking', 'Optional iCloud sync'],
    control: {
      eyebrow: 'Live height and Stop always close',
      title: 'Direct control without giving up safety.',
      text: 'Hold Up or Down to move your desk manually. It stops as soon as you release. Named positions and the Smart action move it to a controlled target.',
      liveLabel: 'Current height', liveValue: '72.0 cm', status: 'Connected', down: 'Down', up: 'Up', stop: 'Stop',
      positions: ['Sit · 72.0 cm', 'Stand · 110.0 cm', 'Focus · 101.0 cm'],
    },
    features: {
      eyebrow: 'One system, many surfaces',
      title: 'Close at hand, wherever you work.',
      intro: 'DeskOrbit uses the Apple devices and system features that are already part of your day.',
      items: [
        { icon: 'heroicons:adjustments-vertical', title: 'Positions and Smart action', text: 'Name sitting, standing and any other heights. Smart chooses Sit or Stand from the current height and stops an active movement first.' },
        { icon: 'heroicons:clock', title: 'Optional automations', text: 'Get reminders to change position or use safe active-use automation on Mac with a countdown. A suspended iOS process never starts unattended movement.' },
        { icon: 'heroicons:squares-2x2', title: 'Widgets and Live Activities', text: 'See status and height at a glance. Use contextual actions in widgets, Live Activities and supported system surfaces.' },
        { icon: 'heroicons:command-line', title: 'Siri, Shortcuts and Action Button', text: 'Run Smart, Sit, Stand, named positions and Stop through App Intents. Manual Up and Down deliberately remain held controls.' },
        { icon: 'heroicons:computer-desktop', title: 'Mac menu bar and global hotkeys', text: 'Control the active desk from the menu bar and configure global hotkeys for Smart, positions or Stop.' },
        { icon: 'heroicons:device-phone-mobile', title: 'Apple Watch', text: 'Use Smart, Stop and positions through a reachable iPhone or directly after local Watch pairing. It connects only when needed.' },
      ],
    },
    safety: {
      eyebrow: 'Safety is part of every command',
      title: 'Every movement has a clear end.',
      intro: 'DeskOrbit treats desk movement as a physical action, not a casual background task.',
      points: ['Manual movement continues only while Up or Down is held. Releasing sends Stop.', 'Target movement ends at the target, on disconnect, after a stall or no later than 45 seconds.', 'A visible Stop remains reachable while connected or movement is active.', 'DeskOrbit never forcibly takes over a Bluetooth connection already used by another device.', 'Bluetooth bindings stay local to each Apple device and are never synchronized.', 'Background iOS automations create reminders only. A suspended process starts no unattended movement.'],
      note: 'Never leave a moving desk unattended.',
    },
    pricing: {
      eyebrow: 'A simple product model', title: 'Start free. Buy Pro once.',
      intro: 'DeskOrbit is planned as a free download. Keep using the core controls for free and unlock every Pro feature once for a 14-day trial.',
      free: { name: 'Free', price: 'Free', items: ['One desk', 'Two named positions', 'Live height, held controls and Stop'] },
      pro: { name: 'DeskOrbit Pro Lifetime', price: '€14.99*', badge: 'One-time purchase · no subscription', items: ['Unlimited desks and positions', 'Automations and Smart action', 'iCloud sync, widgets, system actions and global Mac hotkeys'] },
      featureLabel: 'Feature',
      rows: [
        { feature: 'Desks', free: '1', pro: 'Unlimited' }, { feature: 'Named positions', free: '2', pro: 'Unlimited' },
        { feature: 'Manual controls and Stop', free: 'Included', pro: 'Included' }, { feature: 'Smart action and automations', free: '–', pro: 'Included' },
        { feature: 'Optional iCloud sync', free: '–', pro: 'Included' }, { feature: 'Widgets, Live Activities and system actions', free: '–', pro: 'Included' },
        { feature: 'Global hotkeys on Mac', free: '–', pro: 'Included' },
      ],
      note: '* Planned German base price. The App Store sets prices in other regions.',
      family: 'Family Sharing is not planned at launch. Lifetime is a non-consumable purchase for the same Apple Account.',
    },
    privacy: {
      eyebrow: 'Private by design', title: 'Your desk data stays your data.',
      text: 'DeskOrbit needs no account, operates no product server and contains no advertising, third-party analytics or tracking.',
      points: ['Local data stays on your device.', 'Optional sync uses your private CloudKit database.', 'Bluetooth IDs are never synchronized.', 'Apple processes purchases and restoration through StoreKit.'],
      link: 'Read the full privacy policy',
    },
    support: {
      eyebrow: 'Support and FAQ', title: 'Help with pairing, movement and restoration.', intro: 'This page is also the official support page for DeskOrbit.',
      items: [
        { title: 'How do I connect a desk?', paragraphs: ["Long-press the Bluetooth button on the desk transmitter until its indicator shows pairing mode. Open DeskOrbit, choose “Connect a Desk”, approve Apple’s Bluetooth permission and select the discovered desk. Bluetooth permission cannot be approved automatically.", 'If no desk appears, make sure another phone, tablet, Mac or Watch is not already connected. Many desks accept only one Bluetooth central. DeskOrbit does not forcibly take over an existing connection.'] },
        { title: 'How does safe movement work?', paragraphs: ['Hold Up or Down for manual movement and release to stop. The red Stop control is always available. Named-position movement stops at the target, on disconnect, after a stall or after 45 seconds. Never leave a moving desk unattended.'] },
        { title: 'How do Pro, trial and restoration work?', paragraphs: ['Free includes one desk and two positions. The one-time 14-day trial unlocks all Pro features. Lifetime is a non-consumable purchase for the same Apple Account. Use “Restore Purchases” in Settings only when you want DeskOrbit to ask Apple to synchronize purchases. A downgrade never deletes saved data.'] },
        { title: 'What is shared through iCloud and Apple Watch?', paragraphs: ['iCloud sync is optional and available during Pro or trial. Desk profiles, positions and automations sync; Bluetooth bindings remain local to each device. The Watch normally sends commands through a reachable iPhone. Without the phone, pair the Watch once with the desk; it connects only when needed.'] },
      ],
      contactTitle: 'Still have a question?', contactText: 'Write directly to Marco Hillger. Support messages are voluntary and used only to answer your request.', contactCta: 'hello@typewhisper.com',
    },
    compatibility: {
      title: 'Compatibility', text: 'DeskOrbit is intended for compatible electric sit-stand desks with Bluetooth control. Specific manufacturers or models will only be named after reliable testing.',
      platforms: ['iPhone and iPad with iOS/iPadOS 18 or later', 'Mac with macOS 14 or later', 'Apple Watch with watchOS 11 or later'],
      independence: 'DeskOrbit is independent software and is not affiliated with any desk manufacturer.',
    },
    footer: { product: 'Product', privacy: 'Privacy', support: 'Support', legal: 'Provider and rights holder' },
  },
  fr: {
    meta: { title: 'DeskOrbit – Contrôle intelligent du bureau sur appareils Apple', description: 'DeskOrbit contrôle en toute sécurité les bureaux électriques assis-debout compatibles depuis Mac, iPhone, iPad et Apple Watch. Bientôt sur l’App Store.' },
    nav: { features: 'Fonctions', pricing: 'Gratuit & Pro', support: 'Assistance', privacy: 'Confidentialité' },
    languageLabel: 'Choisir la langue', skipLabel: 'Aller au contenu', homeLabel: 'Accéder à l’accueil de hillger.net',
    hero: {
      eyebrow: 'Contrôle intelligent du bureau', title: 'Votre bureau. Sur tous vos appareils Apple.',
      lead: 'Hauteur en direct, mouvements sûrs et position adaptée à chaque moment de la journée. DeskOrbit relie les bureaux électriques assis-debout compatibles au Mac, à l’iPhone, à l’iPad et à l’Apple Watch.',
      comingSoon: 'Bientôt sur l’App Store', supportCta: 'Voir l’assistance', availability: 'Téléchargement gratuit prévu · Pro à vie sans abonnement', devices: 'Pour iPhone, iPad, Mac et Apple Watch',
      imageAlt: { mac: 'Commandes DeskOrbit sur Mac', iphone: 'Commandes DeskOrbit sur iPhone', ipad: 'Commandes DeskOrbit sur iPad', watch: 'Commandes DeskOrbit sur Apple Watch' },
    },
    proof: ['Aucune publicité', 'Aucun compte DeskOrbit', 'Aucun suivi', 'Synchronisation iCloud facultative'],
    control: {
      eyebrow: 'Hauteur en direct et Stop à portée de main', title: 'Un contrôle direct sans sacrifier la sécurité.',
      text: 'Maintenez Haut ou Bas pour déplacer le bureau manuellement. Il s’arrête dès que vous relâchez. Les positions nommées et l’action intelligente l’amènent de façon contrôlée vers la cible.',
      liveLabel: 'Hauteur actuelle', liveValue: '72,0 cm', status: 'Connecté', down: 'Bas', up: 'Haut', stop: 'Stop', positions: ['Assis · 72,0 cm', 'Debout · 110,0 cm', 'Focus · 101,0 cm'],
    },
    features: {
      eyebrow: 'Un système, plusieurs interfaces', title: 'Toujours à portée de main.', intro: 'DeskOrbit s’intègre aux appareils et fonctions Apple qui font déjà partie de votre quotidien.',
      items: [
        { icon: 'heroicons:adjustments-vertical', title: 'Positions et action intelligente', text: 'Nommez les hauteurs assise, debout et autres. L’action intelligente choisit Assis ou Debout selon la hauteur et arrête d’abord tout mouvement en cours.' },
        { icon: 'heroicons:clock', title: 'Automatisations facultatives', text: 'Recevez des rappels ou utilisez sur le Mac actif une automatisation sûre avec compte à rebours. Un processus iOS suspendu ne lance jamais de mouvement sans surveillance.' },
        { icon: 'heroicons:squares-2x2', title: 'Widgets et Live Activities', text: 'Consultez l’état et la hauteur d’un coup d’œil. Utilisez des actions contextuelles dans les widgets, Live Activities et interfaces système prises en charge.' },
        { icon: 'heroicons:command-line', title: 'Siri, Raccourcis et bouton Action', text: 'Lancez l’action intelligente, les positions Assis, Debout ou nommées et Stop via App Intents. Haut et Bas restent volontairement des commandes à maintenir.' },
        { icon: 'heroicons:computer-desktop', title: 'Barre des menus et raccourcis globaux Mac', text: 'Contrôlez le bureau actif depuis la barre des menus et configurez des raccourcis globaux pour les actions, positions ou Stop.' },
        { icon: 'heroicons:device-phone-mobile', title: 'Apple Watch', text: 'Utilisez les actions, Stop et les positions via un iPhone joignable ou directement après un jumelage local de la Watch. Elle se connecte uniquement au besoin.' },
      ],
    },
    safety: {
      eyebrow: 'La sécurité dans chaque commande', title: 'Chaque mouvement a une fin claire.', intro: 'DeskOrbit traite le mouvement du bureau comme une action physique, jamais comme une tâche de fond anodine.',
      points: ['Le mouvement manuel continue uniquement tant que Haut ou Bas est maintenu. Relâcher envoie Stop.', 'Un mouvement cible prend fin à la cible, à la déconnexion, en cas de blocage ou au plus tard après 45 secondes.', 'Un Stop visible reste accessible pendant la connexion ou un mouvement.', 'DeskOrbit ne prend jamais de force une connexion Bluetooth déjà utilisée par un autre appareil.', 'Les associations Bluetooth restent locales à chaque appareil Apple et ne sont jamais synchronisées.', 'Sur iOS, les automatisations en arrière-plan créent uniquement des rappels. Un processus suspendu ne lance aucun mouvement sans surveillance.'],
      note: 'Ne laissez jamais un bureau en mouvement sans surveillance.',
    },
    pricing: {
      eyebrow: 'Un modèle simple', title: 'Commencez gratuitement. Achetez Pro une fois.', intro: 'DeskOrbit est prévu en téléchargement gratuit. Gardez les commandes essentielles gratuitement et essayez une fois toutes les fonctions Pro pendant 14 jours.',
      free: { name: 'Gratuit', price: 'Gratuit', items: ['Un bureau', 'Deux positions nommées', 'Hauteur en direct, commandes maintenues et Stop'] },
      pro: { name: 'DeskOrbit Pro à vie', price: '14,99 €*', badge: 'Achat unique · sans abonnement', items: ['Bureaux et positions illimités', 'Automatisations et action intelligente', 'iCloud, widgets, actions système et raccourcis globaux Mac'] },
      featureLabel: 'Fonction',
      rows: [
        { feature: 'Bureaux', free: '1', pro: 'Illimités' }, { feature: 'Positions nommées', free: '2', pro: 'Illimitées' }, { feature: 'Commandes manuelles et Stop', free: 'Inclus', pro: 'Inclus' },
        { feature: 'Action intelligente et automatisations', free: '–', pro: 'Inclus' }, { feature: 'Synchronisation iCloud facultative', free: '–', pro: 'Inclus' },
        { feature: 'Widgets, Live Activities et actions système', free: '–', pro: 'Inclus' }, { feature: 'Raccourcis globaux sur Mac', free: '–', pro: 'Inclus' },
      ],
      note: '* Prix de base prévu en Allemagne. L’App Store fixe les prix dans les autres régions.', family: 'Le partage familial n’est pas prévu au lancement. L’accès à vie est un achat non consommable pour le même compte Apple.',
    },
    privacy: {
      eyebrow: 'Confidentiel par conception', title: 'Les données de votre bureau restent les vôtres.', text: 'DeskOrbit ne nécessite aucun compte, n’exploite aucun serveur produit et ne contient ni publicité, ni analyse tierce, ni suivi.',
      points: ['Les données locales restent sur l’appareil.', 'La synchronisation facultative utilise votre base CloudKit privée.', 'Les identifiants Bluetooth ne sont jamais synchronisés.', 'Apple traite les achats et restaurations via StoreKit.'], link: 'Lire la politique de confidentialité complète',
    },
    support: {
      eyebrow: 'Assistance et FAQ', title: 'Aide au jumelage, au mouvement et à la restauration.', intro: 'Cette page est également la page d’assistance officielle de DeskOrbit.',
      items: [
        { title: 'Comment connecter un bureau ?', paragraphs: ["Maintenez le bouton Bluetooth de l’émetteur du bureau jusqu’au mode jumelage, puis choisissez « Connecter un bureau » dans DeskOrbit et acceptez l’autorisation système. Si aucun bureau n’apparaît, déconnectez les autres téléphones, tablettes, Mac ou Watch : de nombreux bureaux n’acceptent qu’une centrale Bluetooth. DeskOrbit ne prend pas de force une connexion existante."] },
        { title: 'Comment fonctionne le mouvement sécurisé ?', paragraphs: ['Maintenez Haut ou Bas pour déplacer le bureau et relâchez pour arrêter. Stop reste toujours disponible. Un déplacement vers une position s’arrête à la cible, à la déconnexion, en cas de blocage ou après 45 secondes. Ne laissez jamais un bureau en mouvement sans surveillance.'] },
        { title: 'Comment fonctionnent Pro, l’essai et la restauration ?', paragraphs: ["La version gratuite inclut un bureau et deux positions. L’essai unique de 14 jours déverrouille Pro. La restauration est déclenchée uniquement par l’action de l’utilisateur et une rétrogradation ne supprime aucune donnée."] },
        { title: 'Que partagent iCloud et l’Apple Watch ?', paragraphs: ["iCloud synchronise facultativement les profils, positions et automatisations, jamais les associations Bluetooth locales. La Watch passe par l’iPhone joignable ou se connecte au bureau à la demande après un jumelage local."] },
      ],
      contactTitle: 'Une autre question ?', contactText: 'Écrivez directement à Marco Hillger. Les messages d’assistance sont volontaires et servent uniquement à répondre à votre demande.', contactCta: 'hello@typewhisper.com',
    },
    compatibility: {
      title: 'Compatibilité', text: 'DeskOrbit est conçu pour les bureaux électriques assis-debout compatibles avec contrôle Bluetooth. Les fabricants ou modèles précis ne seront nommés qu’après des tests fiables.',
      platforms: ['iPhone et iPad sous iOS/iPadOS 18 ou version ultérieure', 'Mac sous macOS 14 ou version ultérieure', 'Apple Watch sous watchOS 11 ou version ultérieure'],
      independence: 'DeskOrbit est un logiciel indépendant sans affiliation avec un fabricant de bureaux.',
    },
    footer: { product: 'Produit', privacy: 'Confidentialité', support: 'Assistance', legal: 'Fournisseur et titulaire des droits' },
  },
  es: {
    meta: { title: 'DeskOrbit – Control inteligente de escritorio para dispositivos Apple', description: 'DeskOrbit controla con seguridad escritorios eléctricos regulables compatibles desde Mac, iPhone, iPad y Apple Watch. Próximamente en el App Store.' },
    nav: { features: 'Funciones', pricing: 'Gratis y Pro', support: 'Soporte', privacy: 'Privacidad' }, languageLabel: 'Elegir idioma', skipLabel: 'Saltar al contenido', homeLabel: 'Ir al inicio de hillger.net',
    hero: {
      eyebrow: 'Control inteligente de altura', title: 'Tu escritorio. En todos tus dispositivos Apple.',
      lead: 'Altura en directo, movimiento seguro y la posición adecuada para cada momento del día. DeskOrbit conecta escritorios eléctricos de altura regulable compatibles con Mac, iPhone, iPad y Apple Watch.',
      comingSoon: 'Próximamente en el App Store', supportCta: 'Ver soporte', availability: 'Descarga gratuita prevista · Pro de por vida sin suscripción', devices: 'Para iPhone, iPad, Mac y Apple Watch',
      imageAlt: { mac: 'Controles de DeskOrbit en Mac', iphone: 'Controles de DeskOrbit en iPhone', ipad: 'Controles de DeskOrbit en iPad', watch: 'Controles de DeskOrbit en Apple Watch' },
    },
    proof: ['Sin publicidad', 'Sin cuenta de DeskOrbit', 'Sin seguimiento', 'Sincronización opcional con iCloud'],
    control: {
      eyebrow: 'Altura en directo y Stop siempre a mano', title: 'Control directo sin renunciar a la seguridad.',
      text: 'Mantén pulsado Subir o Bajar para mover el escritorio manualmente. Se detiene al soltar. Las posiciones con nombre y la acción inteligente lo llevan de forma controlada al objetivo.',
      liveLabel: 'Altura actual', liveValue: '72,0 cm', status: 'Conectado', down: 'Bajar', up: 'Subir', stop: 'Stop', positions: ['Sentado · 72,0 cm', 'De pie · 110,0 cm', 'Concentración · 101,0 cm'],
    },
    features: {
      eyebrow: 'Un sistema, muchas superficies', title: 'Siempre cerca, trabajes donde trabajes.', intro: 'DeskOrbit utiliza los dispositivos y funciones de Apple que ya forman parte de tu día.',
      items: [
        { icon: 'heroicons:adjustments-vertical', title: 'Posiciones y acción inteligente', text: 'Asigna nombres a las alturas sentado, de pie y otras. La acción inteligente elige Sentado o De pie según la altura actual y primero detiene cualquier movimiento.' },
        { icon: 'heroicons:clock', title: 'Automatizaciones opcionales', text: 'Recibe recordatorios o usa en el Mac activo una automatización segura con cuenta atrás. Un proceso iOS suspendido nunca inicia movimientos sin supervisión.' },
        { icon: 'heroicons:squares-2x2', title: 'Widgets y Live Activities', text: 'Consulta estado y altura de un vistazo. Usa acciones contextuales en widgets, Live Activities y superficies compatibles del sistema.' },
        { icon: 'heroicons:command-line', title: 'Siri, Atajos y botón Acción', text: 'Ejecuta acciones inteligentes, Sentado, De pie, posiciones con nombre y Stop mediante App Intents. Subir y Bajar manualmente siguen requiriendo mantener pulsado.' },
        { icon: 'heroicons:computer-desktop', title: 'Barra de menús y atajos globales del Mac', text: 'Controla el escritorio activo desde la barra de menús y configura atajos globales para acciones, posiciones o Stop.' },
        { icon: 'heroicons:device-phone-mobile', title: 'Apple Watch', text: 'Usa acciones, Stop y posiciones a través de un iPhone disponible o directamente tras enlazar localmente el Watch. Solo se conecta cuando hace falta.' },
      ],
    },
    safety: {
      eyebrow: 'La seguridad forma parte del control', title: 'Cada movimiento tiene un final claro.', intro: 'DeskOrbit trata el movimiento del escritorio como una acción física, no como una tarea de fondo casual.',
      points: ['El movimiento manual solo continúa mientras mantienes pulsado Subir o Bajar. Al soltar se envía Stop.', 'El movimiento a un objetivo termina al llegar, al desconectarse, ante un bloqueo o como máximo a los 45 segundos.', 'Un Stop visible permanece accesible durante la conexión o un movimiento activo.', 'DeskOrbit nunca toma por la fuerza una conexión Bluetooth que ya utiliza otro dispositivo.', 'Las asociaciones Bluetooth permanecen locales en cada dispositivo Apple y nunca se sincronizan.', 'Las automatizaciones de iOS en segundo plano solo crean recordatorios. Un proceso suspendido no inicia movimientos sin supervisión.'],
      note: 'Nunca dejes desatendido un escritorio en movimiento.',
    },
    pricing: {
      eyebrow: 'Un modelo sencillo', title: 'Empieza gratis. Compra Pro una vez.', intro: 'DeskOrbit está previsto como descarga gratuita. Mantén los controles básicos gratis y prueba una vez todas las funciones Pro durante 14 días.',
      free: { name: 'Gratis', price: 'Gratis', items: ['Un escritorio', 'Dos posiciones con nombre', 'Altura en directo, controles mantenidos y Stop'] },
      pro: { name: 'DeskOrbit Pro de por vida', price: '14,99 €*', badge: 'Compra única · sin suscripción', items: ['Escritorios y posiciones ilimitados', 'Automatizaciones y acción inteligente', 'iCloud, widgets, acciones del sistema y atajos globales de Mac'] },
      featureLabel: 'Función',
      rows: [
        { feature: 'Escritorios', free: '1', pro: 'Ilimitados' }, { feature: 'Posiciones con nombre', free: '2', pro: 'Ilimitadas' }, { feature: 'Controles manuales y Stop', free: 'Incluido', pro: 'Incluido' },
        { feature: 'Acción inteligente y automatizaciones', free: '–', pro: 'Incluido' }, { feature: 'Sincronización opcional con iCloud', free: '–', pro: 'Incluido' },
        { feature: 'Widgets, Live Activities y acciones del sistema', free: '–', pro: 'Incluido' }, { feature: 'Atajos globales en Mac', free: '–', pro: 'Incluido' },
      ],
      note: '* Precio base previsto en Alemania. El App Store fija los precios en otras regiones.', family: 'No está previsto Compartir en familia en el lanzamiento. La compra de por vida no es consumible y corresponde a la misma cuenta de Apple.',
    },
    privacy: {
      eyebrow: 'Privado desde el diseño', title: 'Los datos de tu escritorio siguen siendo tuyos.', text: 'DeskOrbit no necesita cuenta, no opera un servidor propio y no incluye publicidad, analíticas de terceros ni seguimiento.',
      points: ['Los datos locales permanecen en el dispositivo.', 'La sincronización opcional usa tu base privada de CloudKit.', 'Los identificadores Bluetooth nunca se sincronizan.', 'Apple procesa compras y restauraciones mediante StoreKit.'], link: 'Leer la política de privacidad completa',
    },
    support: {
      eyebrow: 'Soporte y preguntas frecuentes', title: 'Ayuda para enlazar, mover y restaurar.', intro: 'Esta es también la página oficial de soporte de DeskOrbit.',
      items: [
        { title: '¿Cómo conecto un escritorio?', paragraphs: ['Mantén pulsado el botón Bluetooth del transmisor del escritorio hasta que entre en modo de enlace. En DeskOrbit elige «Conectar un escritorio» y acepta el permiso del sistema. Si no aparece, desconecta otros teléfonos, tabletas, Mac o Watch: muchos escritorios solo admiten una central Bluetooth. DeskOrbit no toma por la fuerza una conexión existente.'] },
        { title: '¿Cómo funciona el movimiento seguro?', paragraphs: ['Mantén pulsado Subir o Bajar para mover y suelta para detener. Stop siempre está disponible. Un movimiento a una posición termina al llegar, al desconectarse, al detectar un bloqueo o después de 45 segundos. Nunca dejes desatendido un escritorio en movimiento.'] },
        { title: '¿Cómo funcionan Pro, la prueba y la restauración?', paragraphs: ['Gratis incluye un escritorio y dos posiciones. La prueba única de 14 días desbloquea Pro. La restauración solo se inicia por acción del usuario y una reducción nunca elimina datos.'] },
        { title: '¿Qué comparten iCloud y Apple Watch?', paragraphs: ['iCloud sincroniza opcionalmente perfiles, posiciones y automatizaciones, nunca asociaciones Bluetooth locales. Watch usa el iPhone cuando está disponible o se conecta al escritorio bajo demanda tras enlazarlo localmente.'] },
      ],
      contactTitle: '¿Tienes otra pregunta?', contactText: 'Escribe directamente a Marco Hillger. Los mensajes de soporte son voluntarios y solo se usan para responder a tu solicitud.', contactCta: 'hello@typewhisper.com',
    },
    compatibility: {
      title: 'Compatibilidad', text: 'DeskOrbit está pensado para escritorios eléctricos de altura regulable compatibles con control Bluetooth. Solo se indicarán fabricantes o modelos concretos tras pruebas fiables.',
      platforms: ['iPhone y iPad con iOS/iPadOS 18 o posterior', 'Mac con macOS 14 o posterior', 'Apple Watch con watchOS 11 o posterior'],
      independence: 'DeskOrbit es software independiente y no está afiliado a ningún fabricante de escritorios.',
    },
    footer: { product: 'Producto', privacy: 'Privacidad', support: 'Soporte', legal: 'Proveedor y titular de los derechos' },
  },
  it: {
    meta: { title: 'DeskOrbit – Controllo smart della scrivania su dispositivi Apple', description: 'DeskOrbit controlla in sicurezza scrivanie elettriche regolabili compatibili da Mac, iPhone, iPad e Apple Watch. Prossimamente sull’App Store.' },
    nav: { features: 'Funzioni', pricing: 'Free e Pro', support: 'Supporto', privacy: 'Privacy' }, languageLabel: 'Scegli la lingua', skipLabel: 'Vai al contenuto', homeLabel: 'Vai alla home di hillger.net',
    hero: {
      eyebrow: 'Controllo scrivania smart', title: 'La tua scrivania. Su tutti i tuoi dispositivi Apple.',
      lead: 'Altezza in tempo reale, movimento sicuro e la posizione giusta per ogni momento della giornata. DeskOrbit collega scrivanie elettriche regolabili compatibili a Mac, iPhone, iPad e Apple Watch.',
      comingSoon: 'Prossimamente sull’App Store', supportCta: 'Vedi il supporto', availability: 'Download gratuito previsto · Pro a vita senza abbonamento', devices: 'Per iPhone, iPad, Mac e Apple Watch',
      imageAlt: { mac: 'Controlli DeskOrbit su Mac', iphone: 'Controlli DeskOrbit su iPhone', ipad: 'Controlli DeskOrbit su iPad', watch: 'Controlli DeskOrbit su Apple Watch' },
    },
    proof: ['Nessuna pubblicità', 'Nessun account DeskOrbit', 'Nessun tracciamento', 'Sincronizzazione iCloud opzionale'],
    control: {
      eyebrow: 'Altezza in tempo reale e Stop sempre vicini', title: 'Controllo diretto senza rinunciare alla sicurezza.',
      text: 'Tieni premuto Su o Giù per muovere manualmente la scrivania. Si ferma appena rilasci. Le posizioni nominate e l’azione smart la portano in modo controllato all’obiettivo.',
      liveLabel: 'Altezza attuale', liveValue: '72,0 cm', status: 'Collegata', down: 'Giù', up: 'Su', stop: 'Stop', positions: ['Seduto · 72,0 cm', 'In piedi · 110,0 cm', 'Concentrazione · 101,0 cm'],
    },
    features: {
      eyebrow: 'Un sistema, tante superfici', title: 'Sempre a portata di mano.', intro: 'DeskOrbit usa i dispositivi e le funzioni Apple che fanno già parte della tua giornata.',
      items: [
        { icon: 'heroicons:adjustments-vertical', title: 'Posizioni e azione smart', text: 'Assegna un nome alle altezze da seduto, in piedi e alle altre. L’azione smart sceglie Seduto o In piedi dall’altezza attuale e prima ferma qualsiasi movimento.' },
        { icon: 'heroicons:clock', title: 'Automazioni opzionali', text: 'Ricevi promemoria oppure usa sul Mac attivo un’automazione sicura con conto alla rovescia. Un processo iOS sospeso non avvia mai movimenti senza supervisione.' },
        { icon: 'heroicons:squares-2x2', title: 'Widget e Live Activities', text: 'Visualizza stato e altezza a colpo d’occhio. Usa azioni contestuali nei widget, nelle Live Activities e nelle superfici di sistema supportate.' },
        { icon: 'heroicons:command-line', title: 'Siri, Comandi Rapidi e tasto Azione', text: 'Avvia azioni smart, Seduto, In piedi, posizioni nominate e Stop tramite App Intents. Su e Giù manuali restano volutamente comandi da tenere premuti.' },
        { icon: 'heroicons:computer-desktop', title: 'Barra dei menu e scorciatoie globali Mac', text: 'Controlla la scrivania attiva dalla barra dei menu e configura scorciatoie globali per azioni, posizioni o Stop.' },
        { icon: 'heroicons:device-phone-mobile', title: 'Apple Watch', text: 'Usa azioni, Stop e posizioni tramite un iPhone raggiungibile o direttamente dopo l’abbinamento locale del Watch. Si collega solo quando serve.' },
      ],
    },
    safety: {
      eyebrow: 'La sicurezza è parte del controllo', title: 'Ogni movimento ha una fine chiara.', intro: 'DeskOrbit tratta il movimento della scrivania come un’azione fisica, non come un’attività in background qualsiasi.',
      points: ['Il movimento manuale continua solo mentre tieni premuto Su o Giù. Rilasciando viene inviato Stop.', 'Un movimento verso un obiettivo termina all’arrivo, alla disconnessione, in caso di blocco o al massimo dopo 45 secondi.', 'Uno Stop visibile resta raggiungibile durante la connessione o un movimento attivo.', 'DeskOrbit non assume mai forzatamente il controllo di una connessione Bluetooth già usata da un altro dispositivo.', 'Le associazioni Bluetooth restano locali su ogni dispositivo Apple e non vengono mai sincronizzate.', 'Le automazioni iOS in background creano solo promemoria. Un processo sospeso non avvia movimenti senza supervisione.'],
      note: 'Non lasciare mai incustodita una scrivania in movimento.',
    },
    pricing: {
      eyebrow: 'Un modello semplice', title: 'Inizia gratis. Acquista Pro una volta.', intro: 'DeskOrbit è previsto come download gratuito. Continua a usare gratis i controlli principali e prova una volta tutte le funzioni Pro per 14 giorni.',
      free: { name: 'Free', price: 'Gratis', items: ['Una scrivania', 'Due posizioni nominate', 'Altezza in tempo reale, controlli da tenere premuti e Stop'] },
      pro: { name: 'DeskOrbit Pro a vita', price: '14,99 €*', badge: 'Acquisto unico · nessun abbonamento', items: ['Scrivanie e posizioni illimitate', 'Automazioni e azione smart', 'iCloud, widget, azioni di sistema e scorciatoie globali Mac'] },
      featureLabel: 'Funzione',
      rows: [
        { feature: 'Scrivanie', free: '1', pro: 'Illimitate' }, { feature: 'Posizioni nominate', free: '2', pro: 'Illimitate' }, { feature: 'Controlli manuali e Stop', free: 'Inclusi', pro: 'Inclusi' },
        { feature: 'Azione smart e automazioni', free: '–', pro: 'Inclusi' }, { feature: 'Sincronizzazione iCloud opzionale', free: '–', pro: 'Inclusa' },
        { feature: 'Widget, Live Activities e azioni di sistema', free: '–', pro: 'Inclusi' }, { feature: 'Scorciatoie globali su Mac', free: '–', pro: 'Incluse' },
      ],
      note: '* Prezzo base previsto in Germania. L’App Store stabilisce i prezzi nelle altre regioni.', family: 'Condivisione in famiglia non è prevista al lancio. L’acquisto a vita è non consumabile per lo stesso Apple Account.',
    },
    privacy: {
      eyebrow: 'Privacy fin dalla progettazione', title: 'I dati della tua scrivania restano tuoi.', text: 'DeskOrbit non richiede account, non gestisce un server del prodotto e non contiene pubblicità, analisi di terze parti o tracciamento.',
      points: ['I dati locali restano sul dispositivo.', 'La sincronizzazione opzionale usa il tuo database CloudKit privato.', 'Gli ID Bluetooth non vengono mai sincronizzati.', 'Apple gestisce acquisti e ripristini tramite StoreKit.'], link: 'Leggi l’informativa privacy completa',
    },
    support: {
      eyebrow: 'Supporto e FAQ', title: 'Aiuto per abbinamento, movimento e ripristino.', intro: 'Questa è anche la pagina di supporto ufficiale di DeskOrbit.',
      items: [
        { title: 'Come collego una scrivania?', paragraphs: ['Tieni premuto il pulsante Bluetooth sul trasmettitore della scrivania finché entra in modalità abbinamento. In DeskOrbit scegli «Collega una scrivania» e accetta il permesso di sistema. Se non appare nulla, scollega altri telefoni, tablet, Mac o Watch: molte scrivanie accettano una sola centrale Bluetooth. DeskOrbit non assume forzatamente il controllo di una connessione esistente.'] },
        { title: 'Come funziona il movimento sicuro?', paragraphs: ["Tieni premuto Su o Giù per muovere e rilascia per fermare. Stop rimane sempre disponibile. Un movimento verso una posizione termina all’arrivo, alla disconnessione, in caso di blocco o dopo 45 secondi. Non lasciare mai incustodita una scrivania in movimento."] },
        { title: 'Come funzionano Pro, la prova e il ripristino?', paragraphs: ['La versione gratuita include una scrivania e due posizioni. La prova unica di 14 giorni sblocca Pro. Il ripristino parte solo dopo un’azione dell’utente e il downgrade non elimina dati.'] },
        { title: 'Cosa condividono iCloud e Apple Watch?', paragraphs: ["iCloud sincronizza facoltativamente profili, posizioni e automazioni, mai le associazioni Bluetooth locali. Watch usa l’iPhone raggiungibile oppure si collega alla scrivania su richiesta dopo l’abbinamento locale."] },
      ],
      contactTitle: 'Un’altra domanda?', contactText: 'Scrivi direttamente a Marco Hillger. I messaggi al supporto sono volontari e usati solo per rispondere alla richiesta.', contactCta: 'hello@typewhisper.com',
    },
    compatibility: {
      title: 'Compatibilità', text: 'DeskOrbit è pensato per scrivanie elettriche regolabili compatibili con controllo Bluetooth. Produttori o modelli specifici saranno indicati solo dopo test affidabili.',
      platforms: ['iPhone e iPad con iOS/iPadOS 18 o successivo', 'Mac con macOS 14 o successivo', 'Apple Watch con watchOS 11 o successivo'],
      independence: 'DeskOrbit è un software indipendente e non è affiliato ad alcun produttore di scrivanie.',
    },
    footer: { product: 'Prodotto', privacy: 'Privacy', support: 'Supporto', legal: 'Fornitore e titolare dei diritti' },
  },
}

export const deskOrbitPrivacyCopy: Record<DeskOrbitLanguage, PrivacyCopy> = {
  de: {
    meta: { title: 'Datenschutzerklärung – DeskOrbit', description: 'Datenschutzerklärung für DeskOrbit: lokale Speicherung, optionaler privater CloudKit-Sync, StoreKit und freiwillige Supportnachrichten.' },
    languageLabel: 'Sprache wählen', skipLabel: 'Zum Inhalt springen', back: 'Zurück zu DeskOrbit', eyebrow: 'Datenschutzerklärung', title: 'Datenschutz bei DeskOrbit',
    intro: 'DeskOrbit steuert kompatible höhenverstellbare Schreibtische über Bluetooth. Die App benötigt kein DeskOrbit-Konto und enthält keine Werbung, Drittanbieter-Analytics oder Tracking.',
    updated: 'Gültig und zuletzt aktualisiert: 11. August 2026',
    sections: [
      { title: 'Lokale Daten', paragraphs: ['Tischprofile, Positionen, Automationen, Einstellungen und die lokale Bluetooth-Zuordnung werden auf dem Gerät gespeichert. Eine Bluetooth-Peripheral-ID gehört zu dem Apple-Gerät, das sie ermittelt hat, und wird von DeskOrbit nie hochgeladen.'] },
      { title: 'Optionaler iCloud-Sync', paragraphs: ['Während eines verifizierten DeskOrbit-Pro-Kaufs oder Tests kann der Nutzer iCloud-Sync verwenden. Tischprofile, Positionen und Automationen werden dann in der privaten CloudKit-Datenbank des Nutzers gespeichert und auf dessen Apple-Geräten bereitgestellt.', 'Lokale Bluetooth-Zuordnungen sind ausgeschlossen. DeskOrbit betreibt keinen Produktserver; der Entwickler erhält diese privaten Datensätze nicht.'] },
      { title: 'Käufe, Mitteilungen und Widgets', paragraphs: ['Apple verarbeitet Käufe, Wiederherstellungen, Erstattungen und Testtransaktionen über StoreKit. DeskOrbit liest den verifizierten Kaufstatus zur Freischaltung, erhält aber keine Zahlungskartendaten.', 'Lokale Mitteilungen für Automationen entstehen auf dem Gerät. Widgets lesen nur einen minimalen App-Group-Snapshot und greifen nicht direkt auf CloudKit zu.'] },
      { title: 'Löschen und Verwalten', paragraphs: ['Gelöschte Tische, Positionen oder Automationen werden bei aktivem iCloud-Sync auch synchronisiert gelöscht. Das Entfernen der App löscht deren lokale Daten gemäß dem Betriebssystem. iCloud-Daten und Käufe können mit Apples Werkzeugen verwaltet werden.'] },
      { title: 'Supportnachrichten', paragraphs: ['Supportnachrichten sind freiwillig und werden nur zur Bearbeitung der Anfrage verwendet.'] },
    ],
    contactTitle: 'Datenschutzfragen', contactText: 'Für Fragen zum Datenschutz kontaktiere Marco Hillger unter:', contactCta: 'hello@typewhisper.com',
    footer: deskOrbitProductCopy.de.footer,
  },
  en: {
    meta: { title: 'Privacy Policy – DeskOrbit', description: 'DeskOrbit privacy policy covering local storage, optional private CloudKit sync, StoreKit and voluntary support messages.' },
    languageLabel: 'Choose language', skipLabel: 'Skip to content', back: 'Back to DeskOrbit', eyebrow: 'Privacy Policy', title: 'Privacy at DeskOrbit',
    intro: 'DeskOrbit controls compatible height-adjustable desks over Bluetooth. It does not require a DeskOrbit account and contains no advertising, third-party analytics or tracking.',
    updated: 'Effective and last updated: 11 August 2026',
    sections: [
      { title: 'Local data', paragraphs: ['Desk profiles, positions, automations, settings and the local Bluetooth binding are stored on the device. A Bluetooth peripheral identifier is specific to the Apple device that discovered it and is never uploaded by DeskOrbit.'] },
      { title: 'Optional iCloud sync', paragraphs: ["During a verified DeskOrbit Pro purchase or trial, the user may use iCloud sync. Desk profiles, positions and automations are then stored in the user’s private CloudKit database so they can appear on the user’s Apple devices.", 'Local Bluetooth bindings are excluded. DeskOrbit operates no product server and the developer does not receive these private records.'] },
      { title: 'Purchases, notifications and widgets', paragraphs: ['Apple processes purchases, restoration, refunds and trial transactions through StoreKit. DeskOrbit reads verified purchase status to unlock features but does not receive payment-card details.', 'Local notifications are created on the device for automation reminders. Widgets read a minimal snapshot from the shared App Group and do not access CloudKit directly.'] },
      { title: 'Deletion and management', paragraphs: ['Deleting desks, positions or automations creates synchronized deletions when iCloud sync is active. Removing the app removes its local data according to the operating system. The user can manage iCloud data and purchases with the tools provided by Apple.'] },
      { title: 'Support messages', paragraphs: ['Support messages are voluntary and are handled only to answer the request.'] },
    ],
    contactTitle: 'Privacy questions', contactText: 'For privacy questions, contact Marco Hillger at:', contactCta: 'hello@typewhisper.com', footer: deskOrbitProductCopy.en.footer,
  },
  fr: {
    meta: { title: 'Politique de confidentialité – DeskOrbit', description: 'Politique de confidentialité de DeskOrbit : stockage local, synchronisation CloudKit privée facultative, StoreKit et messages volontaires.' },
    languageLabel: 'Choisir la langue', skipLabel: 'Aller au contenu', back: 'Retour à DeskOrbit', eyebrow: 'Politique de confidentialité', title: 'Confidentialité chez DeskOrbit',
    intro: 'DeskOrbit contrôle des bureaux réglables compatibles via Bluetooth. Aucun compte DeskOrbit n’est requis et l’app ne contient ni publicité, ni analyse tierce, ni suivi.',
    updated: 'En vigueur et dernière mise à jour : 11 août 2026',
    sections: [
      { title: 'Données locales', paragraphs: ["Les profils, positions, automatisations, réglages et associations Bluetooth locales sont stockés sur l’appareil. L’identifiant d’un périphérique Bluetooth est propre à l’appareil Apple qui l’a détecté et n’est jamais envoyé par DeskOrbit."] },
      { title: 'Synchronisation iCloud facultative', paragraphs: ["Pendant un achat Pro ou un essai vérifié, l’utilisateur peut activer la synchronisation iCloud. Les profils, positions et automatisations sont alors stockés dans sa base CloudKit privée afin d’apparaître sur ses appareils Apple.", 'Les associations Bluetooth locales en sont exclues. DeskOrbit n’exploite aucun serveur produit et le développeur ne reçoit pas ces données privées.'] },
      { title: 'Achats, notifications et widgets', paragraphs: ["Apple traite les achats, restaurations, remboursements et essais avec StoreKit. DeskOrbit lit uniquement l’état vérifié pour déverrouiller les fonctions et ne reçoit aucune donnée de carte bancaire.", "Les rappels d’automatisation sont des notifications locales. Les widgets lisent un instantané minimal de l’App Group et n’accèdent pas directement à CloudKit."] },
      { title: 'Suppression et gestion', paragraphs: ["La suppression de bureaux, positions ou automatisations est synchronisée lorsque iCloud est actif. La suppression de l’app efface ses données locales selon le système. L’utilisateur peut gérer ses données iCloud et ses achats avec les outils Apple."] },
      { title: 'Messages à l’assistance', paragraphs: ['Les messages au support sont volontaires et servent uniquement à répondre à la demande.'] },
    ],
    contactTitle: 'Questions de confidentialité', contactText: 'Pour toute question de confidentialité, contactez Marco Hillger :', contactCta: 'hello@typewhisper.com', footer: deskOrbitProductCopy.fr.footer,
  },
  es: {
    meta: { title: 'Política de privacidad – DeskOrbit', description: 'Política de privacidad de DeskOrbit: almacenamiento local, sincronización privada opcional con CloudKit, StoreKit y mensajes voluntarios.' },
    languageLabel: 'Elegir idioma', skipLabel: 'Saltar al contenido', back: 'Volver a DeskOrbit', eyebrow: 'Política de privacidad', title: 'Privacidad en DeskOrbit',
    intro: 'DeskOrbit controla escritorios regulables compatibles mediante Bluetooth. No requiere una cuenta de DeskOrbit y no contiene publicidad, analíticas de terceros ni seguimiento.',
    updated: 'Vigente y última actualización: 11 de agosto de 2026',
    sections: [
      { title: 'Datos locales', paragraphs: ['Los perfiles, posiciones, automatizaciones, ajustes y asociaciones Bluetooth locales se guardan en el dispositivo. El identificador de un periférico Bluetooth pertenece al dispositivo Apple que lo detectó y DeskOrbit nunca lo sube.'] },
      { title: 'Sincronización opcional con iCloud', paragraphs: ['Durante una compra Pro o prueba verificada, el usuario puede activar la sincronización con iCloud. Los perfiles, posiciones y automatizaciones se guardan entonces en su base privada de CloudKit para aparecer en sus dispositivos Apple.', 'Las asociaciones Bluetooth locales quedan excluidas. DeskOrbit no opera un servidor propio y el desarrollador no recibe esos registros privados.'] },
      { title: 'Compras, notificaciones y widgets', paragraphs: ['Apple procesa compras, restauraciones, reembolsos y pruebas mediante StoreKit. DeskOrbit solo lee el estado verificado para desbloquear funciones y no recibe datos de tarjetas.', 'Los recordatorios de automatización son notificaciones locales. Los widgets leen una instantánea mínima del App Group y no acceden directamente a CloudKit.'] },
      { title: 'Eliminación y gestión', paragraphs: ['Al eliminar escritorios, posiciones o automatizaciones, la eliminación se sincroniza si iCloud está activo. Eliminar la app borra sus datos locales según el sistema operativo. El usuario puede gestionar datos de iCloud y compras con las herramientas de Apple.'] },
      { title: 'Mensajes de soporte', paragraphs: ['Los mensajes de soporte son voluntarios y se usan solo para responder a la solicitud.'] },
    ],
    contactTitle: 'Preguntas de privacidad', contactText: 'Para preguntas de privacidad, contacta con Marco Hillger:', contactCta: 'hello@typewhisper.com', footer: deskOrbitProductCopy.es.footer,
  },
  it: {
    meta: { title: 'Informativa sulla privacy – DeskOrbit', description: 'Informativa privacy di DeskOrbit: dati locali, sincronizzazione CloudKit privata opzionale, StoreKit e messaggi volontari.' },
    languageLabel: 'Scegli la lingua', skipLabel: 'Vai al contenuto', back: 'Torna a DeskOrbit', eyebrow: 'Informativa sulla privacy', title: 'Privacy in DeskOrbit',
    intro: 'DeskOrbit controlla scrivanie regolabili compatibili tramite Bluetooth. Non richiede un account DeskOrbit e non contiene pubblicità, analisi di terze parti o tracciamento.',
    updated: 'In vigore e ultimo aggiornamento: 11 agosto 2026',
    sections: [
      { title: 'Dati locali', paragraphs: ["Profili, posizioni, automazioni, impostazioni e associazioni Bluetooth locali sono memorizzati sul dispositivo. L’identificatore di una periferica Bluetooth appartiene al dispositivo Apple che l’ha rilevata e DeskOrbit non lo carica mai."] },
      { title: 'Sincronizzazione iCloud opzionale', paragraphs: ["Durante un acquisto Pro o una prova verificata, l’utente può attivare la sincronizzazione iCloud. Profili, posizioni e automazioni vengono salvati nel database CloudKit privato dell’utente per apparire sui suoi dispositivi Apple.", 'Le associazioni Bluetooth locali sono escluse. DeskOrbit non gestisce un server del prodotto e lo sviluppatore non riceve questi dati privati.'] },
      { title: 'Acquisti, notifiche e widget', paragraphs: ['Apple elabora acquisti, ripristini, rimborsi e prove tramite StoreKit. DeskOrbit legge soltanto lo stato verificato per sbloccare le funzioni e non riceve dati delle carte di pagamento.', "I promemoria delle automazioni sono notifiche locali. I widget leggono un’istantanea minima dall’App Group e non accedono direttamente a CloudKit."] },
      { title: 'Eliminazione e gestione', paragraphs: ["L’eliminazione di scrivanie, posizioni o automazioni viene sincronizzata quando iCloud è attivo. La rimozione dell’app elimina i dati locali secondo il sistema operativo. L’utente può gestire dati iCloud e acquisti con gli strumenti Apple."] },
      { title: 'Messaggi al supporto', paragraphs: ['I messaggi al supporto sono volontari e usati solo per rispondere alla richiesta.'] },
    ],
    contactTitle: 'Domande sulla privacy', contactText: 'Per domande sulla privacy, contatta Marco Hillger:', contactCta: 'hello@typewhisper.com', footer: deskOrbitProductCopy.it.footer,
  },
}
